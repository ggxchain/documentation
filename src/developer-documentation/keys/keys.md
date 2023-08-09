# Creating Keys

In GGX chain, key generation is a crucial process that allows users to create cryptographic key pairs. These key pairs consist of a public key and a corresponding private key. The public key is used to derive the account address, while the private key is essential for signing transactions and proving ownership of the account. GGX supports multiple methods for key generation, including using the [GGX Explorer UI](ggx-explorer-create-keys.md), [Polkadot.js extension](developer-documentation/keys/polkadot-js-create-keys.md), [Subkey tool](developer-documentation/keys/subkey-create-keys.md), [JS API](polkadot-js-create-keys.md), and direct generation from the [GGX Node](developer-documentation/keys/node-create-key.md). For better security and advanced users, it is recommended to use node-based methods or the Subkey tool. Multisig and Proxied accounts can be easily created using the [Explorer UI](ggx-explorer-create-keys.md). EVM-based keys can be created by using Metamask and other EVM-compatible wallets.

## Supported Key Standards

GGX chain supports the following key standards for its accounts:

##### ed25519
This format **is required** for running a validator node. However, conversion between sr25519 and ed25519 is not straightforward since they are different elliptic curve systems. They have different mathematical foundations and converting a private key from one to the other can compromise security. Therefore, it's recommended to use ed25519 keys for validator nodes and sr25519 or EVM-based keys for end users.

##### sr25519
Also known as **Schnorr/Ristretto 25519**. An elliptic curve cryptography algorithm optimized for Substrate-based chains, providing efficient signature verification. sr25519 provides a high level of security and resistance against various attacks.

##### EVM-based keys (H160) - Recommended for end users

It's the easiest and versatile key format, that can be used by EVM-compatible wallets including Metamask. It's a 160-bit hash of the public key, which is used as an address in EVM-based chains. It's also known as *Ethereum address*. H160 keys are a good choice for end users, as they are easy to use and compatible with EVM-based wallets.

##### Converting Keys

As it's not directly possible to convert between sr25519 and ed25519 keys, it's recommended to create a new key pair for the desired key standard. However, it's possible to convert between sr25519/ed25519 and EVM-based keys. By using Keccak-256 function to generate hash from a public key and taking the rightmost 20 bytes of the
hash, it's possible to get the H160 representation of the key.

## Validator Node Keys

For running a validator node, GGX requires two types of keys: Stash Account and Controller Account keys. The Stash key holds the funds and is used for nominating other validators, while the Controller key is used to control the validator node and manage nominations. The recommnded way to generate validator node key is by running a node and using its tools. For more information, see [Node](node-create-keys.md).

## Multisig Addresses

GGX chain supports multisig addresses, which require multiple signatures to approve transactions or changes on the chain. To create a multisig address, you need the public keys of all signatories involved in the multisig account. A multisig address can be useful for joint accounts or organizations that require consensus for transactions.


## Ways to Generate Keys

For better security, advanced users, and validators **it is recommended** to use node-based methods or the Subkey tool.

* [Node](node-create-keys.md) *(recommended, especially for Validator keys)*
* [Subkey](subkey-create-keys.md) *(CLI tool)*
* [Polkadot JS API](js-create-keys.md) *(requires scripting)*
* [Metamask Extension](metamask-create-keys.md) *(UI-based, H160 keys only)*
* [Polkadot.js Extension](polkadot-js-create-keys.md) *(UI-based, no EVM support)*
* [GGX Explorer UI](ggx-explorer-create-keys.md) *(UI-based. Multisig, Proxied accounts, and Vanity Generator)*

