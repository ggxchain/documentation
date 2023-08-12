## Key Generation Directly from the Node
*This is a recommended method for generating keys for running a validator node.*

If you are running a GGX node, you can generate keys directly from the node's console. Follow these steps:

#### Generating a Key for a Validator Node

1. It is assumed you have a GGX node installed. Go to the folder of your node.
2. Use the built-in command-line tools provided by the node to generate keys. You will need an **ed25519 key** to run a validator node. You can also generate a sr25519 key for other purposes.

```bash
./ggx-node key generate-node-key --file ed25519 >./data-sydney/ggx.key
```
If you want to generate a key from a node running in Docker, use the following command:
```bash
docker run -v $HOME/keys:/keys --rm <IMAGE_ID> key generate-node-key > ./data-sydney/node.key
```

#### Generating keys for other purposes
You may want to generate ed25519 or sr25519 keys for other purposes, in raw or json formats.
In these examples the keys will be stored in the `keys` folder of your node. You might need to create this folder manually.

For ed25519:
```bash
./node-bin key generate -w 24 --output-type json --scheme ed25519 >$HOME/keys/ed25519key.json
```
For sr25519:
```bash
./node-bin key generate -w 24 --output-type json --scheme sr25519 >$HOME/keys/sr25519key.json
```

##### When running a node in Docker

For ed25519:
```bash
docker run -v $HOME/keys:/keys --rm <COINTAINER_ID> key generate -w 24 --output-type json --scheme ed25519 >~/keys/ed25519key.json
```
For sr25519:
```bash
docker run -v $HOME/keys:/keys --rm <COINTAINER_ID> key generate -w 24 --output-type json --scheme sr25519 >~/keys/sr25519key.json
```
