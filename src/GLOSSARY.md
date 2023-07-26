## AURA

The **Au**thority **R**ound block production **A**lgorithm is the block authoring mechanism used by GGX. In this block authoring algorithm a designated set of validators take turns producing blocks in a round-robin fashion.

## Block Explorer

A tool that allows users to view and analyze the contents of a blockchain, including the transaction history, current status, and other important data. Block explorers are web-based applications that provide an intuitive user interface for navigating the blockchain, as well as a wide range of features for exploring and analyzing its data.

## Byzantine Fault Tolerance

A characteristic of a distributed system that enables it to remain operational and consistent even in the presence of faulty components or malicious actors. The term "Byzantine" refers to the "Byzantine Generals' Problem", a hypothetical scenario in which a group of generals with different goals must coordinate a plan of attack while being separated by long distances and unreliable communication channels.

## Controller Account

A type of account that is used to control the staking and nomination activities of a stash account. A stash account is a primary account that holds a user's $GGX tokens and is used for staking and nominating, while the controller account is a separate account that is linked to the stash account to manage its staking and nomination activities.

## dApp

A **D**ecentralized **App**lication that runs on a decentralized network, such as a blockchain. They are generally designed to be open-source, transparent, and resistant to censorship, making them a promising development in the field of blockchain technology.

## Extrinsic

A property or characteristic of a function or method that depends on external factors, such as its input parameters or its environment.

These properties can affect the behavior of a function or method, but they are not inherent to the function itself. For example, the output of a function may depend on a variable or value that is passed in as an argument.

## Finality

The irreversible confirmation of a transaction or block. Once a transaction or block has been confirmed as final, it is considered permanently added to the blockchain and cannot be reversed or altered.

## GRANDPA

**G**HOST-based **R**ecursive **AN**cestor **D**eriving **P**refix **A**greement is a mechanism used in the GGX network to achieve fast and secure finality. It is a Byzantine fault-tolerant consensus algorithm that works in conjunction with the AURO block production mechanism to provide finality for GGX Network.

## Governance

The process of determining what changes to the network are permissible, such as modifications to code or movement of funds. In GGX the governing system is on-chain and revolves around validator voting.

## LIBP2P

An open-source library for encrypted peer-to-peer communications and other networking functionality. More information at: <https://libp2p.io/>

## Liveness

The property of a distributed system is that it will eventually come to some sort of consensus. A system stuck in an infinite loop would not be considered live, even if computations are taking place; a system that eventually provides a result, even if incorrect or it takes a long time, is considered to be live.

## Nominator

Users that select a set of validators to stake to. A certain amount of $GGX must be staked in order to do so, which may be lost if the validator behaves badly. This forces nominators to carefully select validators.

## On-Chain Governance

Governance of a blockchain which is controlled by the blockchain. Allows for decisions can be made transparently. Note that there are a variety of different algorithms for making these decisions, such as simple majority voting or identity-based quadratic voting.

## Proof of Stake

A method of achieving consensus in which the next block is determined by a node that is chosen by some characteristic (e.g., the amount of tokens that they stake).

## Proof of Work

A method of achieving consensus in which the next block is determined by the first to solve a difficult puzzle (e.g., in Bitcoin, solving a partial pre-image hash for a block candidate).

## Runtime

A state transition function indicates a valid algorithm for determining the state of the next block given the previous block.

## Runtime Module

WebAssembly code which encodes a state transition function.

## Safety

The property of a distributed system indicates that the system will properly meet all invariants; that is, that nothing "bad" ever happens to the data (such as it being corrupted).

## Session Certificate

Another name for the session "key" which is a BLS key for GRANDPA, a sr25519 key for AURA, and eventually an Ed25519 key for libp2p.

## Session key

A session "key" is a BLS key for GRANDPA, a sr25519 key for AURA, and eventually an Ed25519 key for libp2p.

## Solidity

Solidity is a high-level programming language specifically designed for writing smart contracts on blockchain platforms, primarily Ethereum. It is one of the most widely used languages for developing decentralized applications (dApps) and executing smart contracts within the Ethereum Virtual Machine (EVM).

## Staking

A lock-up mechanism which requires a certain amount of $GGX tokens to participate in network consensus and governance. Staking is a key mechanism in the Golden Gate ecosystem, as it helps secure the network and enables token holders to vote in the decision-making process.

## Stash Account

The primary account that holds a user's $GGX tokens and is used for staking and nominating on the network. When a user wants to participate in staking and nominating activities, they must first transfer their $GGX tokens to their stash account.

## State Transition Function

A function which describes how the state of a blockchain can be transformed. For example, it may describe how tokens can be transferred from one account to another.

## Substrate

An open-source modular framework for building custom blockchain networks and decentralized applications (dApps). It is developed by Parity Technologies and is designed to be flexible, scalable, and easy to use. It provides a set of pre-built modules that developers can use to create customized blockchain networks and dApps. These modules include functionality for consensus, networking, storage, governance, and more, allowing developers to quickly build and launch their own blockchain-based projects.

## Transaction

An individual element of the state transition function of a block, such as moving tokens from one account to another.

## Validator

A node securing the relay chain by staking $GGX, validating proofs from collators on parachains, and determining a consensus along with other validators.

## Voting

The process of stakeholders determining whether or not a referendum to implement a specific proposal should pass.

## Wallet

A program that allows one to store, receive, and transmit $GGX or other blockchain-based tokens.

## WebAssembly

An instruction format for a virtual, stack-based machine. Polkadot Runtime Modules are compiled into WebAssembly. Also known as Wasm.

## Witness

Cryptographic proof statements of data validity.
