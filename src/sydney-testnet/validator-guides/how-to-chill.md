# How to Pause Staking

The Golden Gate validator may opt to pause staking (or *chill*) whenever he or she wants to prevent participation in staking for the upcoming era but does not want to unstake funds (e.g. when there is maintenance planned).

Validator can do that by calling the `chill` extrinsic in the staking pallet using following the steps:

1.  Go to Developer &rarr; Extrinsics

    ![](../../assets/how-to-chill/extrinsics.png "Developer -> Extrinsics")

2.  Choose the validator account you want to chill

    ![](../../assets/how-to-chill/choose-the-validator-account-you-want-to-chill.png "Choose the validator account you want to chill")

3.  Under the **submit the following extrinsic** dropdown menu choose the "staking" extrinsic

    ![](../../assets/how-to-chill/staking-extrinsic.png "staking extrinsic")

4.  Choose "chill" command

    ![](../../assets/how-to-chill/chill-command.png "chill command")

5.  Submit the transaction.
