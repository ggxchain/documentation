# How to stake GGXT tokens

To stake GGXT tokens in the Golden Gate Sydney testnet, please follow the steps:

1. Acquire tokens. Please check out our [sydney-validator-programme.md](../other-not-part-of-the-documentation-on-site/sydney-validator-programme.md "mention").&#x20;
2. Create two substrate accounts. You can do that using [Polkadot-JS](../developer-documentation/wallets/polkadotjs.md).
3. Distribute tokens between the [controller account](../#controller-account) and the [stash account](../#stash-account). You need at least 1000 GGXT tokens in the stash to stake.&#x20;
4. After setting up a node [how-to-setup-a-validator-node.md](how-to-setup-a-validator-node.md "mention") and receiving tokens you can stake using our block explorer.
5. Go to Network-->Staking
6. Go to Accounts. You can see [Nominators ](../#nominator)and [Validators](../#validator) there.
7.  You can bond tokens using +Stash button. You will need to populate:\


    * **Stash account** - Select the stash account created in step 2.
    * **Controller account** - Select the controller account created in step 2. This account will also need a small amount of GGXT to pay for controlling transactions.
    * **Value bonded** - How much GGXT from the Stash account you want to bond/stake. Note that withdrawing any bonded amount requires the duration of the unbonding period.&#x20;
    * **Payment destination** - The account where the rewards from validating are sent.&#x20;

    Once everything is filled in properly, click `Bond` and sign the transaction with your Stash account.

Make sure not to bond all your GGXT balance since you cannot pay transaction fees from your bonded balance.

#### Session keys

To get your node nominated, please follow the steps:

1. Get your node session key. You can do that running command \
   \
   `echo '{"id":1,"jsonrpc":"2.0","method":"author_rotateKeys","params":[]}' | websocat -n1 -B 99999999 ws://127.0.0.1:9944}`
2. Go to Network-->Staking
3. Go to Accounts. Click "Set Session Key" next to stash account created earlier.
4. Enter the output from `author_rotateKeys` from step 1 and click "Set Session Key".
5. Authorize the transactions. Now others can nominate your node.\






1.  Go to Network-->Staking

    <figure><img src="../.gitbook/assets/image (4) (1) (1).png" alt=""><figcaption></figcaption></figure>
2.  &#x20;Go to Accounts. You can see [Nominators ](../#nominator)and [Validators](../#validator) there

    <figure><img src="../.gitbook/assets/image (3) (1).png" alt=""><figcaption></figcaption></figure>
3.  You can bond tokens using +Stash button, nominate a validator using +Validator button and add a Nominator using +Nominator button

    <figure><img src="../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

