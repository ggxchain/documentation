## Key Generation using Metamask Extension

GGX chain provides a support for EVM-based (H160) accounts. You can use the Metamask extension to create and manage EVM-based keys.

While operating as a validator requires a node-based ed25519 key, you can use EVM-based keys for other purposes, such as interacting with smart contracts. They also can be an easy way for end users to manage their accounts.

#### Converting sr25519/ed25519 to H160 (Ethereum address)

By using Keccak-256 function to generate hash from a public key and taking the rightmost 20 bytes of the hash, it's possible to get the H160 representation of the key.

### Setting up Metamask for GGX

In order to use GGX chain in Metamask you'll have to manually configure the network settings. These instructions cover the settings required for the Sydney Testnet.

1. Open Metamask and click on the network selection dropdown.
2. Click "Add Network" button.
3. Select "Add network manually" and fill in the following details:
   - Network Name: GGX Sydney Testnet
   - New RPC URL: https://testnet.node.sydney.ggxchain.io
   - Chain ID: 8866
   - Currency Symbol: GGXT
   - Block Explorer URL: https://testnet.sydney.ggxchain.io
4. Save and switch to the selected network.
5. Now you can use your Ethereum account on GGX chain.

<div align="center">
  <img src="../../assets/keys/metamask-network.png" alt="Metamask network settings" style="max-width: 600px; margin: 20px 20px 40px 20px;" />
</div>

For mobile Metamask app the UI is slightly different but network settings are the same.
