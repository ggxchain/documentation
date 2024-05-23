import { ApiPromise, Keyring, WsProvider } from "@polkadot/api";
import { cryptoWaitReady } from '@polkadot/util-crypto';
import { BN } from "@polkadot/util";


async function sendAndWaitForFinalized(tx: any, senderKeypair: any): Promise<void> {
    // Sign and send the transaction
    return new Promise((resolve, reject) => {
        tx.signAndSend(senderKeypair, (result: any) => {
            if (!result.status.isFinalized) {
                // transaction is in a block, but we need to wait until it is finalized...
                return;
            }

            if (!result.dispatchError) {
                // success
                return resolve(undefined);
            }

            if (result.dispatchError.isModule) {
                // Dex pallet error
                const { method } = result.dispatchError.registry.findMetaError(
                    result.dispatchError.asModule,
                );

                reject(method);
            } else {
                // BadOrigin, Not enough balance, etc.
                reject(result.dispatchError.toString());
            }
        }).catch(reject);
    })
}

async function assets_force_create(api: any, signer: any, asset_id: number, owner: any) {
    console.log(`${signer.address} is creating asset ${asset_id} with owner ${owner.address}`)
    const tx = api.tx.assets.forceCreate(
        /*asset_id=*/asset_id,
        /*owner=*/owner.address,
        /*is_sufficient=*/true,
        /*min_balance=*/1);

    // force_create requires sudo, and Alice has sudo
    const sudo = api.tx.sudo.sudo(tx);
    await sendAndWaitForFinalized(sudo, signer);
}

async function assets_mint(api: any, signer: any, asset_id: number, amount: BN, recipient: any) {
    console.log(`${signer.address} is minting ${amount} of asset ${asset_id} to ${recipient.address}`)
    const tx = api.tx.assets.mint(
        /*asset_id=*/asset_id,
        /*beneficiary=*/recipient.address,
        /*amount=*/amount);

    await sendAndWaitForFinalized(tx, signer);
}

async function assets_get_balance(api: any, account: any, asset_id: number) {
    const result = await api.query.assets.account(
        /*asset_id=*/asset_id,
        /*address=*/account.address);
    return result;
}

async function dex_deposit(api: any, signer: any, asset_id: number, amount: BN) {
    console.log(`${signer.address} is depositing ${amount} of asset ${asset_id} to DEX`)
    const tx = api.tx.dex.deposit(
        /*asset_id=*/asset_id,
        /*amount=*/amount);

    await sendAndWaitForFinalized(tx, signer);
}

async function dex_withdraw(api: any, signer: any, asset_id: number, amount: BN) {
    console.log(`${signer.address} is withdrawing ${amount} of asset ${asset_id} from DEX`)
    const tx = api.tx.dex.withdraw(
        /*asset_id=*/asset_id,
        /*amount=*/amount);

    await sendAndWaitForFinalized(tx, signer);
}

async function dex_balance_of(api: any, account: any, asset_id: number) {
    const result = await api.query.dex.userTokenInfoes(
        /*address=*/account.address,
        /*asset_id=*/asset_id,
    );
    return result;
}

async function dex_allowlist_asset(api: any, signer: any, asset_id: number) {
    console.log(`DEX: Allowlisting asset ${asset_id}`)
    const tx = api.tx.dex.allowlistAsset(asset_id);
    const sudo = api.tx.sudo.sudo(tx);
    await sendAndWaitForFinalized(sudo, signer);
}

async function dex_make_order(
    api: any,
    signer: any,
    asset_id1: number,
    asset_id2: number,
    offered_amount: BN,
    requested_amount: BN,
    order_type: "buy" | "sell",
    expiration_block: number) {

    let price = undefined
    let order_type_enum = undefined
    if (order_type === "buy") {
        order_type_enum = { BUY: {} }
        price = offered_amount.div(requested_amount);
        console.log(`${signer.address} is making a BUY order for ${offered_amount} of asset ${asset_id1} for ${requested_amount} of asset ${asset_id2} at price ${price}`)
    } else if (order_type === "sell") {
        order_type_enum = { SELL: {} }
        price = requested_amount.div(offered_amount);
        console.log(`${signer.address} is making a SELL order for ${offered_amount} of asset ${asset_id1} for ${requested_amount} of asset ${asset_id2} at price ${price}`)
    } else {
        throw new Error(`Invalid order type: ${order_type}`)
    }

    const tx = api.tx.dex.makeOrder(
                /*asset_id1=*/asset_id1,
                /*asset_id2=*/asset_id2,
                /*offered_amount=*/offered_amount,
                /*requested_amount=*/requested_amount,
                /*price=*/price,
                /*order_type=*/order_type_enum,
                /*expiration_block=*/expiration_block);

    await sendAndWaitForFinalized(tx, signer);

    // Event dex.OrderCreated will be fired. In this example we do not subscribe,
    // we just list existing orders.
}

async function dex_take_order(api: any, signer: any, orderId: number) {
    console.log(`${signer.address} is taking order ${orderId}`)
    const tx = api.tx.dex.takeOrder(orderId);
    await sendAndWaitForFinalized(tx, signer);
}

async function dex_get_orders(api: any) {
    console.log("DEX Open orders:")
    const orders = await api.query.dex.orders.entries();
    let orderIds = []
    for (const [key, value] of orders) {
        const id = key.args[0].toNumber();
        console.log(`${id} => ${JSON.stringify(value.toHuman())}`);
        orderIds.push(id)
    }

    return orderIds;
}

async function main() {
    // Init wasm crypto
    await cryptoWaitReady();

    // Construct
    console.log("Connecting to parachain...")
    const wsProvider = new WsProvider('ws://127.0.0.1:9944');
    const keyring = new Keyring({ type: 'sr25519' });
    const alice = keyring.addFromUri('//Alice');
    const bob = keyring.addFromUri('//Bob');
    const api = await ApiPromise.create({ provider: wsProvider });

    try {

        // Wait until the api is ready
        await api.isReadyOrError;
        console.log("Connected and ready")

        // Send a transfer from Alice to Bob
        const transfer = api.tx.balances.transfer(bob.address, new BN("12345"));
        await sendAndWaitForFinalized(transfer, alice);

        // Query Bob's balance in native tokens
        const { data: { free }, nonce }: any = await api.query.system.account(bob.address);
        console.log(`Bob's balance is ${free}, nonce is ${nonce}`);

        // Create 2 new assets:
        const ASSET_A = 1111;
        const ASSET_B = 2222;
        await assets_force_create(api, alice, ASSET_A, alice);
        await assets_force_create(api, alice, ASSET_B, alice);

        // Alice mints some of the assets to herself and Bob
        await assets_mint(api, alice, ASSET_A, new BN("10000"), alice);
        await assets_mint(api, alice, ASSET_B, new BN("20000"), bob);

        console.log(`Alice's balance of asset ${ASSET_A}: ${await assets_get_balance(api, alice, ASSET_A)}`)
        console.log(`Alice's balance of asset ${ASSET_B}: ${await assets_get_balance(api, alice, ASSET_B)}`)
        console.log(`Bob's balance of asset ${ASSET_A}: ${await assets_get_balance(api, bob, ASSET_A)}`)
        console.log(`Bob's balance of asset ${ASSET_B}: ${await assets_get_balance(api, bob, ASSET_B)}`)

        await dex_allowlist_asset(api, alice, ASSET_A);
        await dex_allowlist_asset(api, alice, ASSET_B);

        // Lets deposit Alice's B and Bob's A to DEX
        // IMPORTANT: we can deposit ONLY WHITELISTED asset_ids.
        // to whitelist asset call dex.allowlistAsset
        await dex_deposit(api, alice, ASSET_A, new BN("5000"));
        await dex_deposit(api, bob, ASSET_B, new BN("5000"));

        // Check DEX balances
        console.log(`DEX: Alice's balance of asset ${ASSET_A}: ${await dex_balance_of(api, alice, ASSET_A)}`)
        console.log(`DEX: Alice's balance of asset ${ASSET_B}: ${await dex_balance_of(api, alice, ASSET_B)}`)
        console.log(`DEX: Bob's balance of asset ${ASSET_A}: ${await dex_balance_of(api, bob, ASSET_A)}`)
        console.log(`DEX: Bob's balance of asset ${ASSET_B}: ${await dex_balance_of(api, bob, ASSET_B)}`)
        console.log(`Alice's balance of asset ${ASSET_A}: ${await assets_get_balance(api, alice, ASSET_A)}`)
        console.log(`Alice's balance of asset ${ASSET_B}: ${await assets_get_balance(api, alice, ASSET_B)}`)
        console.log(`Bob's balance of asset ${ASSET_A}: ${await assets_get_balance(api, bob, ASSET_A)}`)
        console.log(`Bob's balance of asset ${ASSET_B}: ${await assets_get_balance(api, bob, ASSET_B)}`)

        // Lets start trading
        // Alice makes a buy order:
        await dex_make_order(api, alice, ASSET_A, ASSET_B, new BN("1000"), new BN("1000"), "sell", 10000);
        const orders = await dex_get_orders(api);

        // Bob takes the order (executes it)
        await dex_take_order(api, bob, orders[0])

        // Check DEX balances
        console.log(`DEX: Alice's balance of asset ${ASSET_A}: ${await dex_balance_of(api, alice, ASSET_A)}`)
        console.log(`DEX: Alice's balance of asset ${ASSET_B}: ${await dex_balance_of(api, alice, ASSET_B)}`)
        console.log(`DEX: Bob's balance of asset ${ASSET_A}: ${await dex_balance_of(api, bob, ASSET_A)}`)
        console.log(`DEX: Bob's balance of asset ${ASSET_B}: ${await dex_balance_of(api, bob, ASSET_B)}`)

        // Alice withdraws everything:
        await dex_withdraw(api, alice, ASSET_A, new BN("4000"));
        await dex_withdraw(api, alice, ASSET_B, new BN("1000"));
        console.log(`DEX: Alice's balance of asset ${ASSET_A}: ${await dex_balance_of(api, alice, ASSET_A)}`)
        console.log(`DEX: Alice's balance of asset ${ASSET_B}: ${await dex_balance_of(api, alice, ASSET_B)}`)
        console.log(`Alice's balance of asset ${ASSET_A}: ${await assets_get_balance(api, alice, ASSET_A)}`)
        console.log(`Alice's balance of asset ${ASSET_B}: ${await assets_get_balance(api, alice, ASSET_B)}`)

    } finally {
        // Do not forget to disconnect in the end
        await api.disconnect();
    }
}


main().catch(console.error);
