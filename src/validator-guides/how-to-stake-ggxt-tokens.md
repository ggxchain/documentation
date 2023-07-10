# How to Stake GGXT Tokens

To stake GGXT tokens in the Golden Gate Sydney testnet, please follow the steps:

1. Acquire tokens. Please check out our [sydney-validator-programme.md](../sydney-testnet/sydney-validator-programme.md "mention").
2. Create two substrate accounts. You can do that using [Polkadot-JS](../developer-documentation/wallets/polkadotjs.md).
3. Distribute tokens between the [controller account](<../README (1).md#controller-account>) and the [stash account](<../README (1).md#stash-account>). You will need at least 1000 GGXT tokens in the stash to stake.
4. After setting up a node [how-to-setup-a-validator-node.md](how-to-setup-a-validator-node.md "mention") and receiving tokens you can stake using our block explorer.
5. Go to Network-->Staking
6. Go to Accounts. You can see [Nominators ](<../README (1).md#nominator>)and [Validators](<../README (1).md#validator>) there.
7.  You can bond tokens using **+Stash** button. You will need to populate:

    * **Stash account** - Select the stash account created in step 2.
    * **Controller account** - Select the controller account created in step 2. This account will also need a small amount of GGXT to pay for controlling transactions.
    * **Value bonded** - How much GGXT from the Stash account you want to bond/stake. Note that withdrawing any bonded amount requires the duration of the unbonding period.
    * **Payment destination** - The account where the rewards from validating are sent.

    Once everything is filled in properly, click `Bond` and sign the transaction with your Stash account.

Make sure not to bond all your GGXT balance since you cannot pay transaction fees from your bonded balance.

#### Session keys

To get your node nominated, please follow the steps:

1.  Install [`websocat`](https://github.com/vi/websocat). On Ubuntu this can be done by issuing the following commands:

    ```bash
    sudo wget -qO /usr/local/bin/websocat https://github.com/vi/websocat/releases/latest/download/websocat.x86_64-unknown-linux-musl
    sudo chmod a+x /usr/local/bin/websocat
    ```
2.  Get your node session key. You can do that running the command:

    ```bash
    websocat -n1 -B 99999999 ws://127.0.0.1:9944 <<< '{"id":1,"jsonrpc":"2.0","method":"author_rotateKeys","params":[]}'
    ```
3. Go to Network-->Staking
4. Go to Accounts. Click "Set Session Key" next to stash account created earlier.
5. Enter the output from `author_rotateKeys` from step 2 and click "Set Session Key".
6. Authorize the transactions. Now others can nominate your node.
7.  Go to Network-->Staking

    <figure><img src="../.gitbook/assets/image (4) (1) (1).png" alt=""><figcaption></figcaption></figure>
8.  Go to Accounts. You can see [Nominators ](<../README (1).md#nominator>)and [Validators](<../README (1).md#validator>) there

    <figure><img src="../.gitbook/assets/image (3) (1).png" alt=""><figcaption></figcaption></figure>
9.  You can bond tokens using **+Stash** button, nominate a validator using +Validator button and add a Nominator using **+Nominator** button

    <figure><img src="../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>
