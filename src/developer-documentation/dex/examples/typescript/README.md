# DEX Example

See [example source code](./index.ts).

## Running the example

First, install dependencies:

```bash
bun install
```

You can run this example on a GGX node started with `--dev` flag.
Easiest is to use docker image: https://hub.docker.com/r/ggxdocker/ggxnode/tags

```bash
docker run -it --rm --network host --entrypoint /usr/src/app/target/release/ggxchain-node ggxdocker/ggxnode:brooklyn-405e709 --dev --tmp --rpc-external
```

Then, run this example with the following command:

```bash
bunx ts-node-esm index.ts
```

(you could use `bun run index.ts` as well, but [bun <1.1.9 crashes](https://github.com/oven-sh/bun/issues/11192))

## Example output

- In this example Alice creates 2 new **assets**: 1111 and 2222.
- Alice mints 10000 of asset 1111 to Alice account and 20000 of asset 2222 to Bob's account.
- Alice deposits 5000 of asset 1111 and Bob deposits 5000 of asset 2222 to DEX.
- Alice opens new order to trade 5000 of asset 1111 for 5000 of asset 2222. (1:1).
- Bob takes the order.
- Alice withdraws 4000 of asset 1111 and 1000 of asset 2222 from DEX.
- Alice now has 9000 of asset 1111 and 1000 of asset 2222.

Expected output:
```
Connecting to parachain...
2024-05-23 09:52:04        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, issue_getIssueRequests, issue_getVaultIssueRequests, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
2024-05-23 09:52:04        API/INIT: ggxchain-node/12: Not decorating unknown runtime apis: BtcRelayApi/1, VaultRegistryApi/1, IssueApi/1, RedeemApi/1, ReplaceApi/1
Connected and ready
Bob's balance is 200000000000000000000012345, nonce is 0
5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY is creating asset 1111 with owner 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY is creating asset 2222 with owner 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY is minting 10000 of asset 1111 to 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY is minting 20000 of asset 2222 to 5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty
Alice's balance of asset 1111: {"balance":10000,"status":"Liquid","reason":{"sufficient":null},"extra":null}
Alice's balance of asset 2222:
Bob's balance of asset 1111:
Bob's balance of asset 2222: {"balance":20000,"status":"Liquid","reason":{"sufficient":null},"extra":null}
DEX: Allowlisting asset 1111
DEX: Allowlisting asset 2222
5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY is depositing 5000 of asset 1111 to DEX
5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty is depositing 5000 of asset 2222 to DEX
DEX: Alice's balance of asset 1111: {"amount":5000,"reserved":0}
DEX: Alice's balance of asset 2222: {"amount":0,"reserved":0}
DEX: Bob's balance of asset 1111: {"amount":0,"reserved":0}
DEX: Bob's balance of asset 2222: {"amount":5000,"reserved":0}
Alice's balance of asset 1111: {"balance":5000,"status":"Liquid","reason":{"sufficient":null},"extra":null}
Alice's balance of asset 2222:
Bob's balance of asset 1111:
Bob's balance of asset 2222: {"balance":15000,"status":"Liquid","reason":{"sufficient":null},"extra":null}
5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY is making a SELL order for 1000 of asset 1111 for 1000 of asset 2222 at price 1
DEX Open orders:
0 => {"counter":"0","address":"qHWLPh1NuTLLHw5N6N5t2qgQqu2fLJNz8ZdezUrU2S2j8nPZH","pair":["1,111","2,222"],"expirationBlock":"10,000","orderType":"SELL","amountOffered":"1,000","amoutRequested":"1,000","price":"1","unfilledOffered":"1,000","unfilledRequested":"1,000","orderStatus":"Pending"}
5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty is taking order 0
DEX: Alice's balance of asset 1111: {"amount":4000,"reserved":0}
DEX: Alice's balance of asset 2222: {"amount":1000,"reserved":0}
DEX: Bob's balance of asset 1111: {"amount":1000,"reserved":0}
DEX: Bob's balance of asset 2222: {"amount":4000,"reserved":0}
5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY is withdrawing 4000 of asset 1111 from DEX
5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY is withdrawing 1000 of asset 2222 from DEX
DEX: Alice's balance of asset 1111: {"amount":0,"reserved":0}
DEX: Alice's balance of asset 2222: {"amount":0,"reserved":0}
Alice's balance of asset 1111: {"balance":9000,"status":"Liquid","reason":{"sufficient":null},"extra":null}
Alice's balance of asset 2222: {"balance":1000,"status":"Liquid","reason":{"sufficient":null},"extra":null}
```
