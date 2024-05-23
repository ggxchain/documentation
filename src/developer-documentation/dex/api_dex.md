# API of the DEX Pallet

This page does not list ALL available APIs. It only lists most used APIs.

## *dex.deposit*

Arguments:
* **asset_id** - u32 (unsigned integer) - ID of asset to deposit.
* **amount** - u128 (unsiigned integer) - Amount of asset to deposit.

Events:
* `Deposited(asset_id: u32, amount: u128)`


## *dex.withdraw*

Arguments:
* **asset_id** - u32 (unsigned integer) - ID of asset to withdraw.
* **amount** - u128 (unsigned integer) - Amount of asset to withdraw.

Events:
* `Withdrawed(asset_id: u32, amount: u128)`

## **dex.deposit_native**

Arguments:
* **amount** - u128 (unsigned integer) - Amount of native asset to deposit.

Events:
- `NativeDeposited(amount: u128)`

## **dex.withdraw_native**

Arguments:
* **amount** - u128 (unsigned integer) - Amount of native asset to withdraw.

Events:
- `NativeWithdrawed(amount: u128)`

## **dex.make_order**

Arguments:
- **asset_id_1** - u32 (unsigned integer) - ID of an asset 1.
- **asset_id_2** - u32 (unsigned integer) - ID of an asset 2.
- **offered_amount** - u128 (unsigned integer) - Amount of asset 1 to offer. Sender must have that much of an asset 1 deposited to DEX.
- **requested_amount** - u128 (unsigned integer) - Amount of asset 2 to request. Sender must have that much of an asset 2 deposited to DEX.
- **price** - u128 (unsigned integer) - A price of an asset.
  - If `order_type` == `SELL`, then `price = requested_amount / offered_amount`.
  - If `order_type` == `BUY`, then `price = offered_amount / requested_amount`.
- **order_type** - `OrderType` - Type of an order. Either `SELL` or `BUY`.
- **expiration_block** - u32 (unsigned integer) - Block number when order expires.

Events:
- `OrderCreated(order_id: u32, order: Order)` where Order is:
  - `Order { counter: u32, address: AccountId, pair: (u32, u32), expiration_block: u32, order_type: OrderType, amount_offered: u128, amount_requested: u128, price: u128, unfilled_offered: u128, unfilled_requested: u128, order_status: OrderStatus }`
  - `OrderStatus(Pending, FullyFilled, PartialFilled, PartialCancelled, FullyCancelled)`

## **dex.take_order**

Arguments:
- **order_id** - u32 (unsigned integer) - ID of an order to take. Take order id either by listing open orders or by subscribing to `OrderCreated` events.

Events:
- `OrderTaken(order_index: u32, account: AccountId, order: Order)`

## **dex.cancel_order**

Arguments:
- **order_id** - u32 (unsigned integer) - ID of an order to cancel.

## **dex.allowlist_asset**

Only allowlisted assets can be traded on DEX. Use this method to allowlist an asset.

Arguments:
- **asset_id** - u32 (unsigned integer) - ID of an asset to allowlist.
