# How to chill

The Golden Gate validator may opt to chill whenever he wants to prevent participation in staking for the upcoming era but does not want to unstake funds (e.g. when there is maintenance planned)

Validator can do that by calling the `chill` [extrinsic ](../#extrinsic)in the [staking pallet](https://paritytech.github.io/substrate/master/pallet\_staking/pallet/enum.Call.html#variant.chill) following the steps:

1.  Go to Developer-->Extrinsics

    <figure><img src="../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>
2.  Choose the validator account you want to chill\


    <figure><img src="../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>
3.  Under "submit the following extrinsic" choose the "staking" extrinsic &#x20;

    <figure><img src="../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>
4.  Choose "chill" command

    <figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>
5.  Submit the transaction.

