## Ethereum Light Client on GGX

### Block header relaying

Ethereum blocks are relayed to GGX using Ethereum Beacon Chain API for light clients.
Finalized blocks are relayed and verified on the GGX network.

You can query the latest relayed block by checking the storage state `eth2Client.finalizedExecutionHeader`.

Please note that Sydney relays the Sepolia network.

### Transaction receipt relaying

GGX tracks some contracts on the Ethereum side, so once they produce a transaction receipt, the receipt will be relayed to the GGX network.

The given receipts can be processed from the EVM or WASM smart contracts context using EVM precompile and WASM chain extension.

You can add more contracts to track using the referenda voting process. If the network agrees that the given contract is mandatory for the network, the relayers will start relaying, and the chain will validate the given contracts.

#### Solidity precompile

```sol
/// SPDX-License-Identifier: GPL-3.0-only
pragma solidity >=0.8.0;

/**
 * @title EthReceiptProvider Interface
 *
 * @dev This interface allows a contract to interact with the EthReceiptProvider at the address
 *      0x0000000000000000000000000000000000009999, to retrieve log information of a specified
 *      contract from a given block on a specified chain.
 *
 */
interface EthReceiptProvider {
    
    /**
     * @notice Fetches logs of a specified contract from a given block on an established chain.
     *
     * @dev This function returns log information in the form of topics and data arrays for a 
     *      specified contract from a given block on a specified chain. The log information is 
     *      returned as two separate arrays, where each entry corresponds to a log event.
     *
     * @param chain_id is the ID of the chain from which to retrieve log information.
     * @param block_number The block number from which to retrieve log information.
     * @param receipt_hash The hash of the receipt for which to retrieve log information.
     * @param contract_addr is the contract address for which to retrieve log information.
     *
     * @return Two separate arrays:
     *          - The first array contains arrays of bytes32 values, each representing a log topic.
     *          - The second array contains arrays of uint values representing log data.
     */
    function logs_for_receipt(
        uint256 chain_id,
        uint256 block_number,
        bytes32 receipt_hash,
        address contract_addr
    )
        external
        returns (
            bytes32 [][] calldata,
            uint[][] calldata
        );
}
```

# Chain extension

```rust
pub type Log = (Vec<types::H256>, Vec<u8>);

#[ink::chain_extension]
pub trait ReceiptRegistryExtension {
    type ErrorCode = Error;

    // 0004 stands for the registered ID on chain of the chain extension
    // 0001 stands for method that called using this interface.
    #[ink(extension = 0x00040001)]
    #[ink(handle_status = false)]
    fn logs_for_receipt(
        chain_id: u32,
        block_number: u64,
        receipt_hash: [u8; 32],
        contract_address: [u8; 20],
    ) -> Result<Vec<Log>, Error>;
}

/// chain extension errors.
#[derive(scale::Encode, scale::Decode, Debug)]
#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
pub enum Error {
    FailRetrievalOfLogs,
}

impl FromStatusCode for Error {
    fn from_status_code(status_code: u32) -> core::result::Result<(), Self> {
        match status_code {
            0 => Err(Self::FailRetrievalOfLogs),
            1 => Ok(()),
            _ => panic!("encountered unknown status code"),
        }
    }
}

#[derive(Debug, Clone, PartialEq, Eq)]
#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
pub enum ReceiptRegistryDefaultEnvironment {}

impl Environment for ReceiptRegistryDefaultEnvironment {
    const MAX_EVENT_TOPICS: usize = <DefaultEnvironment as Environment>::MAX_EVENT_TOPICS;

    type AccountId = <DefaultEnvironment as Environment>::AccountId;
    type Balance = <DefaultEnvironment as Environment>::Balance;
    type Hash = <DefaultEnvironment as Environment>::Hash;
    type BlockNumber = <DefaultEnvironment as Environment>::BlockNumber;
    type Timestamp = <DefaultEnvironment as Environment>::Timestamp;

    type ChainExtension = ReceiptRegistryExtension;
}

impl From<scale::Error> for Error {
    fn from(_: scale::Error) -> Self {
        panic!("encountered unexpected invalid SCALE encoding")
    }
}
```
