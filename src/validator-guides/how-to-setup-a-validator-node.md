# How to setup a validator node

For this instruction we consider a cloud server running Linux. The validator can use any provider according to his preferences . As OS it is best to use a recent Debian Linux. For this guide we will be using Ubuntu 22.04, but the instructions should be similar for other platforms.

Please make sure to follow all of the instructions! Mistakes in setting up a node may get your tokens slashed and may put the tokens of your nominators at risk. Check our [Validator programme](../sydney-validator-programme.md) for requirements and incentives.

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

From the repository's root directory execute following commands in order:

```
docker build -f Dockerfile.sydney -t golden-gate-node:sydney .
docker run -it --rm --name ggx-local-node -p 9944:9944 -p 9933:9933 -p 30333:30333 -v $(pwd)/custom-spec-files:/tmp golden-gate-node:sydney /usr/src/app/target/release/golden-gate-node --ws-external --base-path=/data-sydney --chain /tmp/sydney.json --bootnodes /ip4/3.69.173.157/tcp/30333/p2p/12D3KooWHAuH2gKDCgoAVYciPgaoejVwXckEsjknr8AHHPEfdzgS --telemetry-url "ws://3.127.40.214:8001/submit 0"
```

#### NTP setup&#x20;

[NTP ](../#ntp)is a networking protocol designed to synchronize the clocks of computers over a network. NTP allows you to synchronize the clocks of all the systems within the network. Currently it is required that validators' local clocks stay reasonably in sync, so you should be running NTP or a similar service. You can check whether you have the NTP client by running:

_If you are using Ubuntu 18.04 or a newer version, NTP Client should be installed by default._

```
timedatectl
```

If NTP is installed and running, you should see `System clock synchronized: yes` (or a similar message). If you do not see it, you can install it by executing:

```
sudo apt-get install ntp
```

ntpd will be started automatically after install. You can query ntpd for status information to verify that everything is working:

```
sudo ntpq -p
```

