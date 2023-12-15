# How to Setup a Validator Node

Please make sure to follow the instructions carefully. Mistakes in setting up a node may get result in slashed tokens and may put the tokens of nominators at risk. Check our [Sydney Validator Program](../sydney-validator-program.md) for requirements and incentives.

Checkout the latest stable release version from the [GitHub repository](https://github.com/ggxchain/ggxnode).

From the repository's root directory execute following commands in order:

Please note that this guide expects that you have already created [node and validator keys](../../developer-documentation/keys/node-create-keys.md) to participate in the network.

```bash
docker build -f Dockerfile.sydney -t ggxchain-node:sydney .

mkdir -p data-sydney

# You should insert keys in the data directory.
# Inserting AURA SR25519 key
docker run -it ggxchain-node:sydney key insert --key-type aura --scheme sr25519 --suri "{YOUR_AURA_KEY}" --chain=sydney -d data-sydney
# Inserting GRANDPA ED25519 key
docker run -it ggxchain-node:sydney key insert --key-type gran --scheme ed25519 --suri "{YOUR_GRANDPA_KEY}" --chain=sydney -d data-sydney
# Inserting GRANDPA ECDSA key
docker run -it ggxchain-node:sydney key insert --key-type beef --scheme ecdsa --suri "{YOUR_BEEFY_KEY}" --chain=sydney -d data-sydney
# Inserting I'm Online SR25519 key. Please note you can reuse the same or choose another that is more secure.
docker run -it ggxchain-node:sydney key insert --key-type imon --scheme sr25519 --suri "{YOUR_AURA_KEY}" --chain=sydney -d data-sydney

# Now, when we prepared volume we can run the node.

docker run -d -it --restart=unless-stopped --ulimit nofile=100000:100000 ggxchain-node:sydney \
    --name <INSERT_UNIQUE_NAME> \
    -p 127.0.0.1:9944:9944 \
    -p 127.0.0.1:9933:9933 \
    -p 127.0.0.1:9615:9615 \
    -p 0.0.0.0:30333:30333 \
    -v $(pwd)/custom-spec-files:/tmp \
    -v $(pwd)/data-sydney:/data-sydney \
    ggxchain-node:sydney \
    --wasm-execution Compiled \
    --database rocksdb \
    --rpc-cors all \
    --sync warp \
    --no-private-ip \
    --no-mdns \
    --state-pruning 256 \
    --blocks-pruning 256 \
    --node-key-type ed25519 \
    --node-key-file /data-sydney/node.key \
    --log info \
    --rpc-methods unsafe \
    --unsafe-rpc-external \
    --prometheus-external \
    --validator \
    --chain sydney \
    --base-path=/data-sydney \
    --bootnodes /dns/sun.sydney.ggxchain.io/tcp/30333/p2p/12D3KooWGmopnFNtQb2bo1irpjPLJUnmt9K4opTSHTMhYYobB8pC \
    --telemetry-url "wss://telemetry.sydney.ggxchain.io/submit 0"
```

Please note that is a recommended script to run for testnet, but you should be aware of some parameters that potentially can expose some security risks: 
* --rpc-methods unsafe
* --unsafe-rpc-external

You do not need pruning if you want to run a full archive node for some purposes.

Here the user must replace `<INSERT_UNIQUE_NAME>` with a unique name for their validator.

You should be able to see your node when you visit the GGX telemetry website: <https://telemetry.sydney.ggxchain.io/>

You can use the following optional flags:

| Flags                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--validator`                     | Starts the node with the authority role and enables it to actively participate in any consensus task that it can (for example, depending on availability of local keys).                                                                                                                                                                                                                                                                               |
| `--rpc-external`                  | Listens to all RPC interfaces. By default, the node only listens to local RPC calls. If you set this command-line option, keep in mind that that not all RPC methods are safe to be exposed publicly. Use an RPC proxy server to filter out dangerous methods. For more information about RPC methods that shouldn't be publicly exposed, see Remote procedure calls. Use `--unsafe-rpc-external` to suppress the warning if you understand the risks. |
| `--ws-external`                   | Listens to all Websocket interfaces. By default, the node only listens locally. Keep in mind that not all RPC methods are safe to be exposed publicly. You can use an RPC proxy server to filter out dangerous methods. You can use `--unsafe-ws-external` to suppress the warning if you understand the risks.                                                                                                                                        |
| `--unsafe-rpc-external`           | Listens to all RPC interfaces. This option is the same as `--rpc-external`.                                                                                                                                                                                                                                                                                                                                                                            |
| `--unsafe-ws-external`            | Listens to all Websocket interfaces. This option is the same as `--ws-external` but doesn't warn you about it.                                                                                                                                                                                                                                                                                                                                         |
| `--base-path <path>`              | Specifies a custom base path.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `--bootnodes <node-identifier>`   | Specifies a list of boot nodes identifiers for peer-to-peer communication.                                                                                                                                                                                                                                                                                                                                                                             |
| `--chain <chain-specification>`   | Specifies the chain specification to use. You can set this option using a predefined chain specification name,such as `dev`, `local`, or `staging`or you can specify the path to a file that contains the chain specification, for example, the chain specification generated by using the build-spec subcommand.                                                                                                                                      |
| `--name <name>`                   | Specifies the human-readable name for this node. The node name is reported to the telemetry server, if enabled.                                                                                                                                                                                                                                                                                                                                        |
| `--password <password>`           | Specifies the password to use for the keystore.                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--telemetry-url <url verbosity>` | Specifies the URL of the telemetry server to connect to. You can pass this flag multiple times to specify multiple telemetry endpoints. Verbosity levels range from 0-9, with 0 denoting the least verbose. Use the following format to specify the URL followed the verbosity option is `--telemetry-url 'wss://foo/bar 0'`.                                                                                                                          |
