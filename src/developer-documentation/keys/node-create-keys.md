## Key Generation Directly from the Node
*This is a recommended method for generating keys for running a validator node.*

If you are running a GGX node, you can generate keys directly from the node's console. Follow these steps:

#### Generating from Node

1. It's assumed you have a GGX node installed. Go to the folder of your node.
2. Use the built-in command-line tools provided by the node to generate keys.

```bash
# For sr25519 keys
./node-bin key generate -w 24 --output-type json --scheme sr25519 >$HOME/keys/ggx_sr25519.json
```

#### Generating from a Node running in Docker
