# Tokenomics

## Initial Total Supply

- **100 Billion GGX**
- **18 decimals**
- **8886 Chain ID**

All amounts in this document are in GGX.

## APY

Schedule of APY will be next:

| Date | Yearly APY** |
| -----|-----------------------|
| 2023 |    14.93%             |
| 2024 |    13.93%             |
| 2028 |    11.31%             |
| 2043 |    4%                 |
| 2053 |    2%                 |
| 2054 |    2%                 |

**APY decreases by 6.7% per year.**

After 30 years, the APY stabilizes at 2%.

### Current State

- Initial total supply is distributed to multisig to distribute to selected network validators.
- 18 decimals.
- APY is configured to 14.93% and drops 6.7% every year until it reaches 2% (configured by `runtime/mainnet/src/pos/currency.rs`).
- APY decrease happens every 365.25 days to address leap years (configured by `runtime/mainnet/src/pos/currency.rs`).

## Staking

Each new validator enters `PoS` with `1100 GGX` staked for `1 year`.

Staking rewards are distributed each session.

- **Session period:** 4 hours
- **Era period:** 4 hours

### Slashing

| Misbehavior | Amount | Parameters |
| ------------| -------| ------------------ |
| Consensus Offline | 0.01% to 44% * Stake | Starting from 10% validators offline, linear increase |  
| Consensus Equivocation for Blocks (Double Sign) | 0.01% * Stake | Validator signs conflicting blocks |
| MPC Signature (Wrong message) | 0.01% * Stake | Validator signs an incorrect MPC message |
| MPC Key Generation (Failure to Participate) | 0.001% * Stake | Validator fails to participate in key generation |
| Early Unstake | 10% * Stake | Unstaking before the bonding period ends |

Slashed amounts are sent to the treasury.

### Nominations

| Account | Part | Type |
| ------- | ---- | ---- |
| Validator | 5% | Configurable commission |
| Nominator + Validator | 95% | Shared between nominators and validator |

- **Validators** receive a commission that is deducted from the nominators' rewards. The commission rate is configurable and determined as the median value of all validators' preferred rates. The remaining rewards, after the commission deduction, are shared between the nominators and the validator based on their respective stakes.
- **10% of validators' rewards** go to the Treasury:

| Account | Part |
| --------- | ---- |
| Validator | 90% |
| Treasury | 10% |

### Current State

- 1-year stake withdrawal.
- Session period is 4 hours. Era period is 4 hours (configured by `EpochDurationInBlocks`, `SessionsPerEra`).
- Payout at the end of the session (configured by `runtime/mainnet/src/pos/session_payout/mod.rs`).
- Median commission to nominators from validator preferences calculated each session. Static commission can be enabled by referenda (configured by `runtime/mainnet/src/pos/session_payout/mod.rs`).
- 10% Treasury commission is implemented (configured by `runtime/mainnet/src/pos/currency.rs`).
- Github: https://github.com/ggxchain

## Rewards

### From Block Rewards

| Account | Part | Description |
| ---------------------------- | ------------------- | ------------------------------------------------- |
| Validators | 682,055 GGX per session | Reward for producing blocks and maintaining the network. Distribution based on session points and commission. |
| Nominators | 6,138,492 GGX per session | Shared among nominators based on their stake. Distribution after validator commission. |
| Treasury | 68,206 GGX per session | Leftover rewards and failed to pay amounts are sent to the treasury. Treasury commission also applies. |

**Details:**
- **Validator Rewards:** Calculated per session based on the total session points earned by the validator. A commission (static or median) is applied before distributing rewards to nominators.
- **Nominator Rewards:** Calculated from the remaining rewards after the validator commission is deducted. Distributed proportionally among nominators based on their stake.
- **Treasury:** Receives any remaining rewards after distribution to validators and nominators, and also gets a specific commission from the staking rewards.

**Example Calculation:**
- **Total Session Reward (session_reward):** 6,820,547 GGX (assuming 2190 sessions per year)
- **Validator Reward:** 682,055 GGX (10% of session reward)
- **Nominator Reward:** 6,138,492 GGX (remaining 90% of session reward)
- **Treasury Commission:** 68,206 GGX per session

* All these values are based on the initial supply and 1st year of inflation.

### From Transaction Fees

| Account | Part |
| -------- | ----- |
| Treasury | 100% |
| Validator (block producer) | 0% |
| Burn | 0% |

Fees are distributed each block.

### From Transaction Tips

| Account | Part |
| -------- | ----- |
| Treasury | 25% |
| Validator (block producer) | 75% |
| Burn | 0% |

## Fees

| Category | Type | Amount |
| ------ | -------- | ----------- |
| Transaction | 1 second of execution (or equivalent proof size) | 10,000 GGX |
| Transaction | MPC signature | 100 GGX |
| Storage | Existential Deposit (ED) for account | 0.1 GGX |

## Parameters Configuration

Parameters can be changed by OpenGov.
