---
id: spree
title: SPREE
sidebar_label: SPREE
description: Learn about the fundamentals of SPREE.
keywords: [execution, SPREE, wasm, runtime]

slug: ../spree
---

[SPREE][spree] (Substrate Parallel Runtime Execution Environment) is a parallel execution environment for smart contracts on the Substrate blockchain framework. It allows for the parallel execution of multiple smart contracts, improving the blockchain network's efficiency and scalability.
SPREE works by using multiple worker threads to execute smart contracts in parallel. Each worker thread is assigned a subset of the smart contracts to execute, and the results are combined to produce the final state of the blockchain. This approach allows for faster transaction processing and can reduce the likelihood of transaction congestion during periods of high network activity.
In addition to parallel execution, SPREE also supports deterministic execution, which ensures that the order of transactions and smart contract execution is consistent across all nodes in the network. This is important for maintaining the integrity and security of the blockchain.
Overall, SPREE is an important component of the Substrate blockchain framework, providing efficient and scalable execution of smart contracts for a wide range of applications.

## Benefits

You can use SPREE (Substrate Parallel Runtime Execution Environment) in Substrate to achieve parallel execution of smart contracts, which can lead to increased efficiency and scalability of your blockchain network.
Without SPREE, smart contracts on Substrate are executed sequentially, which can lead to transaction congestion and slower processing times during periods of high network activity. SPREE enables the parallel execution of multiple smart contracts, distributing the workload across multiple worker threads to improve transaction throughput and reduce processing times.
In addition, SPREE also supports deterministic execution, which ensures that the order of transactions and smart contract execution is consistent across all nodes in the network. This is important for maintaining the integrity and security of the blockchain.
Overall, SPREE can be useful for improving the performance and scalability of your Substrate-based blockchain network, especially in scenarios with many concurrent transactions and smart contracts.

## Architecture

SPREE designed with a modular architecture, which allows for flexibility and customization in implementing the parallel execution environment.
At a high level, the SPREE architecture consists of three components:
Scheduler: This component is responsible for scheduling and coordinating the execution of smart contracts across multiple worker threads. It includes a priority queue to prioritize transactions and a work-stealing algorithm to balance the workload across worker threads.
Executor: This component is responsible for executing smart contracts on the worker threads. It includes an interface for executing Wasm code and a sandboxed environment to ensure that contracts cannot access unauthorized resources.
Runtime: This component is responsible for managing the state of the blockchain and coordinating the execution of smart contracts with the SPREE scheduler and executor.
In addition to these core components, the SPREE architecture also includes a set of customizable modules that can be used to extend and customize the functionality of the parallel execution environment. These modules include the contract module, the transaction pool module, and the consensus module, among others.

## Contract module

The contract module manages the deployment and execution of smart contracts on the blockchain network.
Specifically, the contract module provides a high-level interface for developers to deploy and interact with smart contracts on the Substrate network. It includes support for Wasm smart contracts and provides a set of built-in contract templates that can be used to deploy new contracts quickly.
The contract module also includes some features to enhance the security and reliability of smart contract execution on the network. For example, it includes a sandboxed environment to ensure contracts cannot access unauthorized resources or execute malicious code. It also includes support for deterministic execution, which helps to ensure that the order of transactions and smart contract execution is consistent across all nodes in the network.
Overall, the contract module is an important component of the SPREE architecture in Substrate, providing developers with a powerful and flexible platform for deploying and executing smart contracts on the blockchain network.

## Transaction pool module

The transaction pool module manages the pool of transactions waiting to be processed by the network.
Specifically, the transaction pool module provides a set of rules and algorithms for managing the transaction pool efficiently and securely. This includes transaction prioritization, transaction validation, and transaction eviction.
The transaction pool module is also designed to work with the SPREE scheduler to optimize the execution of transactions in parallel. It uses a priority queue to prioritize transactions based on transaction fees, size, and type. This helps to ensure that high-priority transactions are processed quickly and efficiently while low-priority transactions are processed promptly and orderly.
Overall, the transaction pool module is an essential component of the SPREE architecture in Substrate, helping to ensure the security, reliability, and efficiency of transaction processing on the blockchain network.

## Consensus module

The consensus module manages the consensus mechanism that ensures agreement among network participants on the state of the blockchain.
Specifically, the consensus module provides a set of rules and algorithms for determining which blocks are added to the blockchain and which transactions are included in those blocks. This includes features such as block validation, block finality, and fork resolution.
The consensus module is also designed to work with the SPREE scheduler and executor to optimize the parallel execution of transactions and smart contracts. It uses a set of consensus algorithms, such as proof-of-stake (PoS) or proof-of-authority (PoA), to achieve agreement on the state of the blockchain while allowing for fast and efficient processing of transactions.

[spree]: ./glossary.md#spree