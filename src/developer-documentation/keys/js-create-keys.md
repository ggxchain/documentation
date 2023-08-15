## Create a Key with a JS Script

#### Set up your script and install the dependencies
```bash
npm init -y
npm install @polkadot/api
npm install @polkadot/util-crypto
```

#### Generate a new key pair and a mnemonic seed:
```javascript
const {Keyring} = require('@polkadot/api');
const {cryptoWaitReady, mnemonicGenerate, mnemonicToMiniSecret} = require('@polkadot/util-crypto');

async function generateKeyPair() {
    // Wait for the WASM interface to be initialized
    await cryptoWaitReady();

    // Generate a valid BIP39 mnemonic as the seed
    const seed = mnemonicGenerate();

    const keyring = new Keyring({type: 'sr25519'});
    const pair = keyring.addFromUri(seed, {name: 'mykey'});

    // Derive the private key from the seed
    const privateKey = mnemonicToMiniSecret(seed);

    console.log(`Address: ${pair.address}`);
    console.log(`PublicKey: 0x${Buffer.from(pair.publicKey).toString('hex')}`);
    console.log(`PrivateKey: 0x${Buffer.from(privateKey).toString('hex')}`);
    console.log(`Seed: ${seed}`);
}

generateKeyPair();
```
