# How to Setup a Validator Node

For this instruction we consider a cloud server running Linux. The validator can use any provider according to his preferences . As OS it is best to use a recent Debian Linux. For this guide we will be using Ubuntu 22.04, but the instructions should be similar for other platforms.

Please make sure to follow all of the instructions. Mistakes in setting up a node may get your tokens slashed and may put the tokens of your nominators at risk. Check our [sydney-validator-programme.md](../sydney-testnet/sydney-validator-programme.md "mention") for requirements and incentives.

### Docker

From the repository's root directory execute following commands in order:

```
docker run -it --rm --name ggx-local-node \
           -p 9944:9944 -p 9933:9933 -p 30333:30333 \
           -v $(pwd)/custom-spec-files:/tmp golden-gate-node:sydney /usr/src/app/target/release/golden-gate-node --base-path=/data-sydney --chain /tmp/sydney.json --bootnodes /ip4/3.69.173.157/tcp/30333/p2p/12D3KooWSriyuFSmvuc188UWqV6Un7YYCTcGcoSJcoyhtTZEWi1n --telemetry-url "https://testnet.telemetry.sydney.ggxchain.io/submit 0"
```

You can use the following optional flags:

| Flags                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--validator`                     | Starts the node with the authority role and enables it to actively participate in any consensus task that it can (for example, depending on availability of local keys).                                                                                                                                                                                                                                                                               |
| `--rpc-external`                  | Listens to all RPC interfaces. By default, the node only listens to local RPC calls. If you set this command-line option, keep in mind that that not all RPC methods are safe to be exposed publicly. Use an RPC proxy server to filter out dangerous methods. For more information about RPC methods that shouldn't be publicly exposed, see Remote procedure calls. Use `--unsafe-rpc-external` to suppress the warning if you understand the risks. |
| `--ws-externa`                    | Listens to all Websocket interfaces. By default, the node only listens locally. Keep in mind that not all RPC methods are safe to be exposed publicly. You can use an RPC proxy server to filter out dangerous methods. You can use `--unsafe-ws-external` to suppress the warning if you understand the risks.                                                                                                                                        |
| `--unsafe-rpc-external`           | Listens to all RPC interfaces. This option is the same as `--rpc-external`.                                                                                                                                                                                                                                                                                                                                                                            |
| `--unsafe-ws-external`            | Listens to all Websocket interfaces. This option is the same as `--ws-external` but doesn't warn you about it.                                                                                                                                                                                                                                                                                                                                         |
| `--base-path <path>`              | Specifies a custom base path.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `--bootnodes <node-identifier>`   | Specifies a list of boot nodes identifiers for peer-to-peer communication.                                                                                                                                                                                                                                                                                                                                                                             |
| `--chain <chain-specification>`   | Specifies the chain specification to use. You can set this option using a predefined chain specification name,such as `dev`, `local`, or `staging`or you can specify the path to a file that contains the chain specification, for example, the chain specification generated by using the build-spec subcommand.                                                                                                                                      |
| `--name <name>`                   | Specifies the human-readable name for this node. The node name is reported to the telemetry server, if enabled.                                                                                                                                                                                                                                                                                                                                        |
| `--password <password>`           | Specifies the password to use for the keystore.                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--telemetry-url <url verbosity>` | Specifies the URL of the telemetry server to connect to. You can pass this flag multiple times to specify multiple telemetry endpoints. Verbosity levels range from 0-9, with 0 denoting the least verbose. Use the following format to specify the URL followed the verbosity option is `--telemetry-url 'wss://foo/bar 0'`.                                                                                                                          |

### Compile and Run Node Using Rust

#### Software requirements

The following dependencies are required to run the project:

* rust, wasm32-unknown-unknown target
* protobuf
* dylint

Below is the code example how to install required software:

```
# Install rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh 

# Install wasm32-unknown-unknown target
rustup target add wasm32-unknown-unknown
rustup component add rust-src

# Install protobuf
sudo apt install protobuf-compiler

# Install dylint
cargo install cargo-dylint dylint-link
```

You can use docker container to setup a validator node. Due to the highly CPU dependent nature of 'cargo build' command, it's strongly recommended that you have at least 8 core enabled for this method. It takes around 20 mins to complete with this suggested requirements, exponentially more if you use lesser proccessor power during the docker build operation.
