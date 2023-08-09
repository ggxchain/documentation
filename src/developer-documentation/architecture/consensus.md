# Consensus

### Why do we need Consensus?

Consensus is an essential aspect of blockchain technology because it enables the system to reach an agreement on the state of the ledger or database without the need for a central authority. In a decentralized blockchain network, there are many nodes that maintain a copy of the database, and they need to agree on the current state of the ledger.

Consensus is necessary to ensure that the blockchain network remains secure and immutable. If there is no consensus mechanism in place, it would be possible for an attacker to manipulate the ledger's state by introducing fraudulent transactions. With a consensus mechanism, all nodes must agree on the validity of a transaction before it can be added to the ledger, making it virtually impossible for an attacker to manipulate the system.

Consensus also helps to prevent double-spending, which is a critical issue in decentralized payment systems. Without consensus, it would be possible for a user to spend the same digital asset more than once, leading to an inconsistent ledger state. By requiring consensus on the validity of transactions, the blockchain network ensures that double-spending is prevented.

### What are PoW and PoS?

PoW and PoS are two popular consensus mechanisms used in blockchain technology.

PoW, or Proof of Work, is a consensus mechanism that requires nodes in the network to solve complex mathematical problems to validate transactions and create new blocks. Miners in a PoW blockchain network compete to solve these problems, and the first one to solve the puzzle earns a reward and adds a new block to the chain. PoW is used by popular cryptocurrencies like Bitcoin and Ethereum, and it is known for being highly secure but energy-intensive.

PoS, or Proof of Stake, is a consensus mechanism that selects validators based on the amount of cryptocurrency they hold. Validators put up a stake of their cryptocurrency as collateral, and they are selected to validate transactions and create new blocks based on the size of their stake. In a PoS blockchain network, validators are incentivized to act in the best interest of the network because they stand to lose their stake if they behave maliciously. PoS is known for being more energy-efficient than PoW because it doesn't require nodes to solve complex mathematical problems.

Both PoW and PoS have their advantages and disadvantages, and different blockchain networks may choose to implement one or the other depending on their specific requirements.

### Nominated Proof of Stake

Nominated Proof of Stake (NPoS) is a variation of the Proof of Stake (PoS) consensus mechanism that is designed to enhance the security and decentralization of a blockchain network.

In a traditional PoS system, the validators are selected based on the amount of cryptocurrency they hold, and they are responsible for validating transactions and adding new blocks to the blockchain. However, in some PoS systems, the concentration of power among a small number of validators can pose a security risk to the network, as these validators may collude to manipulate transactions or control the network.

NPoS addresses this issue by allowing token holders to nominate validators on the network. This means that token holders can choose which validators they trust to validate transactions and secure the network, and they can vote to remove validators that are not acting in the network's best interest.

In an NPoS system, the validators are still selected based on the amount of cryptocurrency they hold, but they must also be nominated by a certain number of token holders to be eligible. Validators are then chosen based on their total stake and the number of nominations they receive. This ensures that the network is decentralized, and there is a fair distribution of power among the validators.

### Probabilistic vs. Provable Finality

Probabilistic and provable finality are two different approaches to achieving finality in blockchain networks.

Probabilistic finality is a concept used in consensus mechanisms that use probabilistic algorithms to confirm transactions and add new blocks to the blockchain. In a probabilistic system, there is a small chance that a transaction may be reversed or a block may be orphaned if there is a competing chain with more computational power. This is because the blockchain network may occasionally experience forks or temporary reorganizations, but these are quickly resolved as the network continues to add new blocks.

In contrast, provable finality is a concept used in consensus mechanisms that provide mathematical proof that a transaction is confirmed and cannot be reversed. In a provable system, once a block is added to the blockchain, it is considered final and cannot be modified or reversed. This is achieved through the use of cryptographic techniques such as digital signatures and hash functions, which ensure that any changes to a block would invalidate the cryptographic signatures of subsequent blocks.

Provable finality is considered to be more secure and reliable than probabilistic finality because it provides a higher level of confidence that transactions are confirmed and cannot be reversed. However, provable finality may require more computational resources than probabilistic finality, and it may be more difficult to achieve in highly decentralized networks.

Ultimately, the choice between probabilistic and provable finality depends on the specific requirements of the blockchain network and the trade-offs between security, scalability, and efficiency.

### Hybrid Consensus

Hybrid consensus with POS block production and the finality gadget is a consensus mechanism that combines Proof of Stake (PoS) for block production and the finality gadget for provable finality in a blockchain network.

In this mechanism, validators with a stake of cryptocurrency are responsible for creating new blocks and validating transactions on the network. Validators are chosen based on the amount of cryptocurrency they hold and are incentivized to act in the best interest of the network because they stand to lose their stake if they behave maliciously.

The finality gadget is then used to provide provable finality to the network. It works by using Byzantine Fault Tolerance (BFT) algorithms to ensure that once a block is added to the blockchain, it is considered final and cannot be modified or reversed.

The combination of PoS block production and the finality gadget provides a secure and efficient consensus mechanism for blockchain networks. It is known for being energy-efficient compared to PoW-based systems and provides fast transaction finality, making it suitable for applications that require high throughput and low latency.

### Block Production: AURA

AURA (Authority Round) is a block production algorithm used in the GGX chain network.

In the AURA algorithm, a designated set of authorities or validators take turns producing blocks in a round-robin fashion. The authorities are typically trusted participants within the network, such as known organizations or entities.

The block production process in AURA involves the following steps:

1. Selection of Leader: At the beginning of each round, a leader or primary authority is selected. The selection process can be predetermined or based on a specific criterion, such as a rotating schedule or a voting mechanism.
2. Block Proposal: The selected leader creates a new block proposal containing transactions that are to be included in the next block. This block proposal may undergo a validation process by other authorities to ensure its integrity and adherence to predefined rules.
3. Block Verification: Once the block proposal is created, it is broadcasted to the other authorities in the network for verification. The other authorities validate the proposed block, ensuring it meets the consensus rules and does not conflict with the existing blockchain state.
4. Block Commitment: If the proposed block is approved by the majority or a predetermined threshold of the other authorities, it is considered valid and committed to the blockchain. The block is added to the blockchain, and the leader's turn is completed.
5. Round Progression: After the block commitment, the round proceeds to the next authority in the predefined order, and the process repeats. Each authority takes turns being the leader, proposing blocks, and receiving verification from the other authorities.

The AURA algorithm leverages the trust and reputation of the designated authorities to facilitate block production and maintain consensus within the network.

### Finality Gadget: GRANDPA

The GRANDPA finality gadget is used to provide provable finality to the blocks in the Polkadot chain. It works by using a GHOST (Greedy Heaviest Observed Subtree) algorithm to determine the final consensus of the network. The GHOST algorithm takes into account the weight of the blocks in the chain to determine which blocks are the heaviest and have the most support from the network.

Once the GHOST algorithm has determined the heaviest chain, GRANDPA uses a recursive process to derive a prefix of this chain that has the support of the majority of the network. This prefix is then considered final and cannot be modified or reversed.

The GRANDPA finality gadget is designed to be efficient and scalable, making it suitable for high-throughput applications. Its use of a recursive process allows it to quickly determine the final consensus of the network, and its use of a prefix ensures that only a small portion of the blockchain needs to be finalized, reducing the time and resources required for finality.

Overall, the GRANDPA finality gadget is an important component of the GGX chain network's consensus mechanism, ensuring fast and secure transactions across multiple chains.

## Resources

* [GRANDPA paper](https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf) - The academic description of the GRANDPA finality gadget. Contains formal proofs of the algorithm.
* [Rust implementation](https://github.com/paritytech/finality-grandpa) - The reference implementation and the accompanying Substrate pallet.
