## Create a Key with a JS Script

#### Install the @polkadot/api module:
```javascript
npm install @polkadot/api
```

#### Set up your script and import the necessary modules:
```javascript
const { ApiPromise, Keyring } = require('@polkadot/api');

async function connectToNode() {
    const api = await ApiPromise.create({ provider: 'wss://testnet.node.sydney.ggxchain.io' });
    return api;
}

// Call connectToNode() to establish the connection before proceeding.
```

#### Generate a new key pair:
```javascript
async function generateKeyPair() {
  const api = await connectToNode();
  const keyring = new Keyring({ type: 'ed25519' }); // or 'sr25519'

  const keyPair = keyring.addNewPair();

  console.log('Public Key:', keyPair.publicKey);
  console.log('Private Key:', keyPair.secretKey);

  // Optionally, you can also print the address derived from the public key
  console.log('Address:', keyPair.address);

  // Return the key pair or relevant data as needed
  return keyPair;
}

// Call generateKeyPair() to generate a new key pair.
```
