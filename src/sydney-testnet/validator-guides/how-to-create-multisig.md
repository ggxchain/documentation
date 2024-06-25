# Introduction

A multisig wallet is a type of wallet that requires multiple signatures to authorize a transaction. This ensures added security as multiple parties need to approve transactions. This guide will walk you through the steps to create a multisig wallet using the GGX Explorer on the GGX blockchain. As GGX is a substrate-based blockchain, this works on many other instances with a multisig pallet enabled.

## Prerequisites

Before you start, make sure you have the following:

- Access to the GGX Explorer.
- Polkadotjs Chrome Extension.
- The public addresses of all participants who will be part of the multisig wallet.
- Basic understanding of how to use the GGX Explorer.

### 1. Navigate to GGX Explorer and Connect Wallet
The GGX explorer can be found [here](http://explorer.ggxchain.io/), and the explorer should be recognizing your Polkadotjs Chrome Extension for you, showing your address in "Accounts".
<img width="1197" alt="Screenshot 2024-05-23 at 11 41 58 AM" src="https://github.com/Liquid369/ggxnode/assets/45834289/e5c0b8e3-3921-4118-93a6-671a4aec4ab9">

### 2. Adding Multisig Participants to Wallet
After you can see your address and now we need to start adding the other party's to our multisig wallet. If we click on "Accounts" there is a menu dropdown and we want to select "Address Book". 

<img width="1201" src="assets/multisig/multisig-account.png">

Here we need to start adding the participants as Contacts. If we click the + in the top right to add a contact we can paste the address and label a name to it.
See pic below:

<img width="905" src="assets/multisig/multisig-add-participants.png">

Continue to add as many Contacts as needed so that you can later create your multisig.

### 3. Create Multisig Wallet
Navigate to the "Accounts" section again and click "Accounts", when we are out of the Address Book and in Accounts we need to click in the top right the + multisig button.

<img width="1106" src="assets/multisig/multisigh-add-contact.png">

This window here is how we will select the participants for our multisig. Simply click and select the addresses/labels you want to include in the multisig. 
Important Note: Multisig wallets are meant to be deterministic and for this reason order does matter. You must take note of in what order you have added everyone so that after creation everyone can create the same multisig for themselves to participate. 
After you have completed the multisig accounts to participate, we have two last items to set. You will now select the "Threshold" depending on the size of your wallet and needs you can set the threshold to as low as 1 or as many as there are wallet participants.
Lastly you just now need to name your multisig wallet and then click the "Create" button.

### 4. Creating a Multisig Transactions
Upon creation of the multisig wallet, it should now be under the name you gave it in your "Accounts" page. In order to create a transaction we would handle this like a normal one by clicking the "Send" button next to the multisig account. Select from your multisig and to whomever you intend to send to. Adjust amount and lastly verify all data then click "Make Transfer".
<img width="1093" src="assets/multisig/multisig-make-transfer.png">

The next upcoming window should ask you to sign the transaction. Upon selecting your account that is tied to the multisig to sign with, make sure you also copy the "Multisig Call Data" there's a copy button to the right hand side for ease. This is needed for the creators final signature.
<img width="966" alt="multisig-call-data" src="assets/multisig/multisig-call-data.png">



### 5. Signing the Multisig Transaction
You should now see after the transaction was created the following below on the Multisig address.
<img width="1093" src="assets/multisig/multisig-pending-approvals.png">

If we now click the three dots ... it will give us an option to approve the multisig transaction.
<img width="1093" src="assets/multisig/multisig-call-approval.png">

You should see a window like so above, where you can then select the account to approve with and choose to either "Approve this call hash" or "Deny this call hash", switch between deny and approve and it should highlight then the "Approve" button so that it is now clickable.

<img width="1098" src="assets/multisig/multisig-auth-tx.png">

We now need to sign and submit it.
Upon doing so the transaction is then broadcasted and the original creator has to sign with the call data we recorded at the start.
Once it is signed with the final call data the funds are then transferred.

<img width="1093" src="assets/multisig/multisig-call-approval.png">

In this screenshot is how we would do the final approval. This is the screen to copy the call data to, where it says at the bottom about balance.TransferKeepAlive is a text box that you copy the call data into, once its copied it switches to the balance transfer.

Lastly, we just select approve and then the address should have its funds the transaction is finally broadcasted and sent.
