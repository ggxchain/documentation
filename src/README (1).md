# Terms and Definitions

## AURA

The Authority Round (AURA) block production algorithm is a consensus mechanism designed explicitly for permissioned or consortium blockchains. In the AURA algorithm, a designated set of authorities or validators take turns producing blocks in a round-robin fashion. The authorities are typically trusted participants within the network, such as known organizations or entities.

## BABE

BABE (Blind Assignment for Blockchain Extension) is a block production algorithm used in GGX. BABE is designed to be fast, efficient, and secure, and it uses a proof-of-stake (PoS) consensus mechanism to achieve consensus among nodes in the network.

## Block

A block in a blockchain is a collection of data that is bundled together with a unique digital signature, known as a cryptographic hash. The data contained in a block can vary depending on the specific blockchain application, but it typically includes a record of recent transactions, a timestamp, and a reference to the previous block in the chain.

## Block Explorer

A block explorer is a tool that allows users to view and analyze the contents of a blockchain, including the transaction history, current status, and other important data. Block explorers are web-based applications that provide an intuitive user interface for navigating the blockchain, as well as a wide range of features for exploring and analyzing its data.

## BLS Signatures

BLS signatures are specific signatures widely used in blockchains. They offer advantages over traditional signature schemes, such as shorter signature sizes, faster verification times, and aggregation of signatures.

## Byzantine Fault Tolerance

Byzantine fault tolerance (BFT) is a characteristic of a distributed system that enables it to remain operational and consistent even in the presence of faulty components or malicious actors. The term "Byzantine" refers to the "Byzantine Generals' Problem", a hypothetical scenario in which a group of generals with different goals must coordinate a plan of attack while being separated by long distances and unreliable communication channels.

## Consensus

Consensus is the process of a group of entities to agree on a particular data value (such as the ordering and makeup of blocks on a blockchain). There are a variety of algorithms used for determining consensus. GGX uses hybrid consensus - AURA for block production and GRANDPA as a finality gadget.

## Controller Account

In Golden Gate, a controller account is a type of account that is used to control the staking and nomination activities of a stash account. A stash account is a primary account that holds a user's GGX tokens and is used for staking and nominating, while the controller account is a separate account that is linked to the stash account to manage its staking and nomination activities.

## DApps

DApps (decentralized applications) are applications that run on a decentralized network, such as a blockchain. They are generally designed to be open-source, transparent, and resistant to censorship, making them a promising development in the field of blockchain technology.

## Extrinsic

In programming, extrinsic refers to a property or characteristic of a function or method that depends on external factors, such as its input parameters or its environment.

Extrinsic properties can affect the behavior of a function or method, but they are not inherent to the function itself. For example, the output of a function may depend on a variable or value that is passed in as an argument, which is an extrinsic property.

## Finality

In a blockchain, finality refers to the irreversible confirmation of a transaction or block. Once a transaction or block has been confirmed as final, it is considered permanently added to the blockchain and cannot be reversed or altered.

## Finality Gadget

A mechanism that determines finality.

## GRANDPA

GRANDPA (GHOST-based Recursive ANcestor Deriving Prefix Agreement) is a finality gadget used in the GGX network to achieve fast and secure finality. It is a Byzantine fault-tolerant consensus algorithm that works in conjunction with the BABE block production algorithm to provide finality for GGX Network.

## Governance

The process of determining what changes to the network are permissible, such as modifications to code or movement of funds. The governance system in Polkadot is on-chain and revolves around stakeholder voting, i.e., the majority of the stake (DOTs) determines the direction of the network.

## LIBP2P

An open-source library for encrypted peer-to-peer communications and other networking functionality. More information at: [https://libp2p.io/](https://libp2p.io/)

## Liveness

The property of a distributed system is that it will eventually come to some sort of consensus. A system stuck in an infinite loop would not be considered live, even if computations are taking place; a system that eventually provides a result, even if incorrect or it takes a long time, is considered to have liveness.

## Node Explorer

A tool that gives you information about a node, such as the latest blocks sealed, finalized, and the current chain state as known by that node.

## Nominated Proof of Stake (NPoS)

A proof of stake system whereby nominators "lend" their stake to validators as a show of faith in the good behavior of the validator. Nominated proof-of-stake differs from delegated proof-of-stake in that nominators are subject to loss of stake if they nominate a bad validator; delegates are not subject to loss of stake based on the behavior of the validator.

## Nominator

Nodes that select a set of validators. A certain amount of DOTs must be staked in order to do so, which may be lost if the validator behaves badly. This forces nominators to carefully select validators.

## NTP

Networking protocol designed to synchronize the clocks of computers over a network. NTP(Network Time Protocol) allows you to synchronize the clocks of all the systems within the network. Currently it is required that validators' local clocks stay reasonably in sync, so you should be running NTP or a similar service

## On-Chain Governance

Governance of a blockchain which is controlled by mechanisms controlled by the blockchain. On-chain governance allows for decisions can be made transparently. Note that there are a variety of different algorithms for making these decisions, such as simple majority voting or identity-based quadratic voting.

## Proof of Stake (PoS)

A method of achieving consensus in which the next block is determined by a node that is chosen by some characteristic (e.g., the amount of tokens that they stake).

## Proof of Work

A method of achieving consensus in which the next block is determined by the first to solve a difficult puzzle (e.g., in Bitcoin, solving a partial pre-image hash for a block candidate).

## Runtime

A state transition function indicates a valid algorithm for determining the state of the next block given the previous block.

## Runtime Module

Wasm code which encodes a state transition function.

## Safety

The property of a distributed system indicates that the system will properly meet all invariants; that is, that nothing "bad" ever happens to the data (such as it being corrupted).

## Session Certificate

Another name for the session "key" which is a BLS key for GRANDPA, a sr25519 key for BABE, and eventually an Ed25519 key for libp2p.

## Session key

A session "key" is a BLS key for GRANDPA, a sr25519 key for BABE, and eventually an Ed25519 key for libp2p.

## Solidity

Solidity is a high-level programming language specifically designed for writing smart contracts on blockchain platforms, primarily Ethereum. It is one of the most widely used languages for developing decentralized applications (dApps) and executing smart contracts within the Ethereum Virtual Machine (EVM).

## Staking

In Golden Gate, staking refers to locking up a certain amount of GGX tokens to participate in network consensus and governance. Staking is a key mechanism in the Golden Gate ecosystem, as it helps secure the network and enables token holders to vote in the decision-making process.

## Stash Account

In Golden Gate, a stash account is a primary account that holds a user's GGX tokens and is used for staking and nominating on the network. When a user wants to participate in staking and nominating activities, they must first transfer their GGX tokens to their stash account.

## State Transition Function

A function which describes how the state of a blockchain can be transformed. For example, it may describe how tokens can be transferred from one account to another.

## Substrate

Substrate is an open-source modular framework for building custom blockchain networks and decentralized applications (dApps). It is developed by Parity Technologies and is designed to be flexible, scalable, and easy to use.

Substrate provides a set of pre-built modules that developers can use to create customized blockchain networks and dApps. These modules include functionality for consensus, networking, storage, governance, and more, allowing developers to quickly build and launch their own blockchain-based projects.

## Transaction

An individual element of the state transition function of a block, such as moving tokens from one account to another.

## Validator

A node secures the relay chain by staking DOTs, validating proofs from collators on parachains, and determining a consensus along with other validators.

## Voting

The process of stakeholders determining whether or not a referendum to implement a specific proposal should pass. Votes are weighted both by the number of GGX tokens that the stakeholder account controls and the amount of time they are willing to lock their GGX tokens up.

## Wallet

A program that allows one to store, receive, and transmit GGX tokens or other blockchain-based tokens.

## WebAssembly

An instruction format for a virtual, stack-based machine. Polkadot Runtime Modules are compiled into WebAssembly. Also known as Wasm.

## Witness

Cryptographic proof statements of data validity.
