# How to Deploy Rust Smart Contracts

## Update Your Development Environment

1. Update Rust using `rustup compnent add rust-src`
2. Verify that you have the WebAssembly target installed using `rustup target add wasm32-unknown-unknown --toolchain nightly`
3. Install `cargo-contract`. This is a command-line tool which you will use to build, deploy, and interact with your `ink!` contracts. You can install it using `cargo install cargo-contract --version 2.0.0-rc`
4. Compile your contract into WASM. To build a contract using `cargo`, navigate to the folder with contract and run `cargo contract build`

## Deploy Your Contract on The GGX chain

1. Navigate to explorer of the GGX chain network you want to deploy your contract on ([https://testnet.brooklyn.ggxchain.io/](https://testnet.brooklyn.ggxchain.io/) for the Brooklyn testnet)
2. Go to Developer &rarr; Contracts page
3. Press Upload & deploy code
4. Choose deployment account (you will need PolkadotJS or other substrate account manager to use your account)
