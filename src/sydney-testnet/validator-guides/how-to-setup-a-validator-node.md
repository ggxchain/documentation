# How to Setup a Validator Node

For this instruction we consider a cloud server running Linux. The validator can use any provider according to his preferences . As OS it is best to use a recent Debian Linux. For this guide we will be using Ubuntu 22.04, but the instructions should be similar for other platforms.

Please make sure to follow all of the instructions. Mistakes in setting up a node may get result in slashed tokens and may put the tokens of nominators at risk. Check our [Sydney Validator Program](../sydney-validator-programme.md) for requirements and incentives.

From the repository's root directory execute following commands in order:

```bash
docker build -f Dockerfile.sydney -t golden-gate-node:sydney .

mkdir -p data-sydney

docker run \
    -it \
    --rm \
    --name ggx-local-node \
    -u $(id -g):$(id -u) \
    -p 30333:30333 \
    -v $(pwd)/custom-spec-files:/tmp \
    -v $(pwd)/data-sydney:/data-sydney \
    golden-gate-node:sydney \
    --base-path=/data-sydney \
    --chain /tmp/sydney.json \
    --bootnodes /ip4/3.69.173.157/tcp/30333/p2p/12D3KooWSriyuFSmvuc188UWqV6Un7YYCTcGcoSJcoyhtTZEWi1n \
    --telemetry-url "wss://test.telemetry.sydney.ggxchain.io/submit 0" \
    --name <INSERT_UNIQUE_NAME>
```

Here the user must replace `<INSERT_UNIQUE_NAME>` with a unique name for their validator.

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