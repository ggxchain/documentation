## Key Generation using Subkey Tool

Subkey is a command-line utility commonly used with Substrate-based chains to manage keys. To generate keys using Subkey, follow these steps:

#### Install Subkey on your system if you haven't already.

```bash
# You might need to install the following dependencies first
# That may be required to build the dependencies of Subkey
sudo apt install build-essential
sudo apt install protobuf-compiler
sudo apt install pkg-config
sudo apt install libssl-dev
sudo apt install librust-clang-sys-dev

# Install rust [ choose 1 ]
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Install wasm32-unknown-unknown target
rustup target add wasm32-unknown-unknown
rustup component add rust-src

# Install dylint
cargo install cargo-dylint dylint-link

rustup update
rustup update nightly
rustup target add wasm32-unknown-unknown --toolchain nightly

# Clone the Substrate repo https://github.com/paritytech/substrate

# Build Subkey
cargo +nightly build --package subkey --release
```

#### Execute the Subkey command for key generation:

```bash
subkey generate -w 24 --output-type json --scheme sr25519 >$HOME/keys/ggx_sr25519.json
```



**Safely store the generated private key and account details.**
