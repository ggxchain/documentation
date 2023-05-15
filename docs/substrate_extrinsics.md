---
id: substrate-extrinsics
title: Substrate Extrinsics (a.k.a. Types of Transactions)
sidebar_label: Substrate Extrinsics
description: Learn about Transaction Types (i.e. Extrinsics)
keywords: [transaction, GGX, Extrinsics, Substrate]
slug: ../substrate-extrinsics
---

## Pallets

Golden Gate is built using
[Substrate](https://substrate.io/), a modular framework to efficiently build blockchains.
Substrate [FRAME] (https://docs.substrate.io/reference/frame-pallets/) is a development framework for building scalable and interoperable blockchain applications using the Substrate blockchain development platform. It provides a modular architecture that enables developers to customize their blockchain applications by selecting and configuring different modules, or "FRAME pallets" to suit their specific needs.
Substrate FRAME development environment is the set of tools and resources that developers use to build, test, and deploy their blockchain applications using the Substrate FRAME framework. This includes:
- Substrate node: A full-node implementation of the Substrate blockchain runtime that allows developers to create, deploy and test their custom FRAME-based blockchain applications.
- FRAME pallets: Modular components that can be added or removed from a blockchain application to customize its functionality. The Substrate FRAME development environment includes a set of pre-built pallets, such as the Identity, Treasury, and Elections pallets, which developers can use as building blocks for their own applications.
- Substrate Developer Hub: A comprehensive set of resources, including tutorials, documentation, and sample code, that helps developers learn how to use the Substrate FRAME framework to build their own blockchain applications.
- Rust programming language: Substrate FRAME is written in Rust, so developers need to be familiar with this programming language to use the development environment.
- Tools and libraries: Substrate FRAME development environment includes a range of tools and libraries that help developers build, test, and deploy their blockchain applications, such as the Substrate CLI (command-line interface), Substrate UI (user interface), and the Rust-based ink! smart contract language.

## Extrinsics

In Substrate, an extrinsic is a transaction that changes the state of the blockchain. It represents an action or a function call that a user or a smart contract initiates to modify the state of the blockchain. Extrinsic transactions can include transfers of cryptocurrency, updates to on-chain data, and calls to other smart contracts.
Extrinsics are important in Substrate because they enable users to interact with the blockchain in a flexible and programmable way. Instead of simply sending cryptocurrency from one account to another, for example, users can use extrinsics to trigger more complex transactions that execute smart contract logic and update on-chain data. This makes it possible to build decentralized applications (DApps) that leverage the power and security of the blockchain.
In Substrate, extrinsics are processed by the runtime, which is part of the Substrate node that executes the logic of the blockchain. The runtime validates the extrinsic to ensure that it meets the necessary criteria, such as having a valid signature and sufficient funds. If the extrinsic is valid, the runtime applies the changes to the blockchain state and generates a new block.
Extrinsics are represented in Substrate as a structured data format called [SCALE](docs/glossary.md#SCALE) (Simple Concatenated Aggregate Little-Endian), which is a compact and efficient binary format that is optimized for blockchain data. This allows extrinsics to be transmitted and processed quickly and efficiently, which is important for the performance and scalability of the blockchain.


## Types of Extrinsics

In Substrate, there are three main types of extrinsics:

- Signed Extrinsics: These are transactions that are signed by a user or an entity with a secret key. They are used to authorize actions on behalf of an account. For example, a signed extrinsic might transfer cryptocurrency from one account to another, or update on-chain data associated with an account.
- Unsigned Extrinsics: These are transactions that do not require a signature to be executed. They are often used for operations that are not sensitive or require no authorization. For example, an unsigned extrinsic might be used to retrieve data from the blockchain or to trigger a simple on-chain action.
- Signed Extensions: These are a special type of extrinsic that allows users to add custom data to a transaction. They are similar to signed extrinsics but include additional data that is not part of the standard transaction format. Signed extensions are useful for adding metadata or customizing the behavior of a transaction.

In addition to these three main types, Substrate also supports batch extrinsics, which allow multiple transactions to be bundled together and executed as a single atomic operation. This can improve the efficiency of the blockchain by reducing the number of network round-trips required to execute a set of transactions.

## Extrinsics verificaion
In Substrate, extrinsics are verified by the runtime, which is responsible for processing transactions and updating the state of the blockchain. When an extrinsic is submitted to the runtime, it goes through a number of validation steps to ensure that it is valid and authorized. Here is an overview of the extrinsic verification process in Substrate:

- **Deserialization**: The first step in verifying an extrinsic is to deserialize the SCALE-encoded binary data into a structured format that can be processed by the runtime.
- **Signature Verification**: If the extrinsic is a signed transaction, the next step is to verify the signature using the public key associated with the account that signed the transaction. The signature must be valid and match the expected public key in order for the transaction to be authorized.
- **Authorization**: Once the signature has been verified, the runtime checks whether the account associated with the transaction has sufficient funds and permissions to execute the requested action. For example, if the transaction is a transfer of cryptocurrency, the runtime checks that the sending account has enough funds to cover the transaction amount.
-**Pallet Validation**: Depending on the pallets included in the runtime, additional validation checks may be performed to ensure that the extrinsic complies with specific rules or requirements set by the pallets. For example, if the runtime includes a governance pallet, the extrinsic may need to pass a vote before it can be executed.
-**Execution**: If the extrinsic passes all the validation checks, the runtime executes the requested action and updates the state of the blockchain accordingly.