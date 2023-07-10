# Bug Bounty Program



#### Golden Gate bug bounties up to #2M

This bug bounty program is centered around Golden Gate's smart contracts, website, and app, with the aim of preventing:

* Any manipulation of governance voting results
* Direct theft of user funds, whether they are at rest or in motion, excluding unclaimed yield
* Permanent freezing of funds

### Rewards by threat level

This simplified scale consists of five levels and includes separate scales for websites/apps, smart contracts, and blockchains/DLTs. Its primary focus is to assess the impact of the reported vulnerability.

#### Smart Contracts

| Critical | **Up to USD 2 000 000** |
| -------- | ----------------------- |
| High     | **USD 100 000**         |
| Medium   | **USD 10 000**          |
| Low      | **USD 1 000**           |

#### **Blockchain**

| Critical | **Up to USD 2 000 000** |
| -------- | ----------------------- |
| High     | **USD 100 000**         |
| Medium   | **USD 10 000**          |
| Low      | **USD 1 000**           |

**Websites and Applications**

| Critical | **USD 200 000** |
| -------- | --------------- |
| High     | **USD 50 000**  |
| Medium   | **USD 5 000**   |
| Low      | **USD 1 000**   |

To be eligible for a reward, all bug reports for web/apps must include a Proof of Concept (PoC) that demonstrates an impactful effect on a relevant asset. In the case of Critical Smart Contract bugs, a PoC and a suggested fix must be provided. Explanations and statements alone are not considered valid PoCs, and code implementation is required.

For Critical Smart Contract vulnerabilities, the reward is capped at 10% of the economic damage caused, considering funds at risk, as well as potential public relations and branding impacts. The final decision on the reward amount is at the discretion of the team. However, there is a minimum reward of USD 100,000.

Any vulnerabilities already identified and marked in the security reviews are not eligible for a reward.

Payouts for successful bug reports are handled directly by the Golden Gate team and are denominated in USD.&#x20;

### Scope

This bug bounty program only accepts the following impacts as eligible. Any other impacts, even if they affect assets listed in the scope table, are considered out of scope and will not be considered for rewards.

Assets in scope:

* [https://github.com/GoldenGateGGX/golden-gate](https://github.com/GoldenGateGGX/golden-gate)
* [https://github.com/GoldenGateGGX/blockchain-explorer](https://github.com/GoldenGateGGX/blockchain-explorer)
* [https://github.com/GoldenGateGGX/ggx-telemetry](https://github.com/GoldenGateGGX/ggx-telemetry)

#### Smart contracts&#x20;

#### Critical:

* Manipulation of governance voting results.
* Direct theft of user funds, whether at rest or in motion, excluding unclaimed yield.
* Permanent freezing of funds.
* Miner-extractable value (MEV).
* Insolvency.

#### High

* Theft of unclaimed yield.
* Permanent freezing of unclaimed yield.
* Temporary freezing of funds for a minimum period of 2 days.

#### Medium

* Smart contracts unable to operate due to a lack of funds.
* Block stuffing for profit.
* Griefing, causing damage to users or the protocol without a profit motive.
* Theft of gas.
* Unbounded gas consumption.

#### Low

* Smart contract fails to deliver promised returns but doesn't lose value.

#### Websites and Applications

#### Critical

* Ability to execute system commands.
* Extraction of sensitive data/files from the server, such as /etc/passwd.
* Stealing user cookies.
* Taking down the application/website.
* Bypassing authentication.
* Signing transactions for other users.
* Redirection of user deposits and withdrawals.
* Subdomain takeover resulting in the financial loss (applies to subdomains with published addresses).
* Wallet interaction modification resulting in financial loss.
* Direct theft of user funds.
* Tampering with transactions submitted to the user's wallet.
* Submitting malicious transactions to an already-connected wallet.

#### High

* Spoofing content on the target application (persistent).
* Disclosure of users' confidential information, such as email.
* Subdomain takeover without a financial loss (applies to subdomains with no published addresses).
* Privilege escalation to access unauthorized functionalities.

#### Medium

* Changing details of other users without direct financial impact (CSRF).
* Leakage of third-party API keys demonstrating loss of funds or modification on the website.
* Redirecting users to malicious websites (Open Redirect).

#### Low

* Framing sensitive pages leading to financial loss (ClickJacking).
* Any impact involving a publicly released CVE without a working PoC.
* Broken Link Hijacking.

### Out of Scope

The following vulnerabilities are not eligible for rewards in this bug bounty program:

#### Smart Contracts and Blockchain

* Attacks that the reporter has already exploited themselves, leading to damage.
* Attacks requiring access to leaked keys/credentials.
* Attacks requiring access to privileged addresses (governance, strategist).
* Incorrect data supplied by third-party oracles.
* Basic economic governance attacks (e.g., 51% attack).
* Lack of liquidity.
* Best practice critiques.
* Sybil attacks.
* Centralization risks.

#### Websites and Apps

* Theoretical vulnerabilities without any proof or demonstration.
* Content spoofing/Text injection issues.
* Self-XSS.
* Captcha bypass using OCR.
* CSRF with no security impact (e.g., logout CSRF, change language, etc.).
* Missing HTTP Security Headers (such as X-FRAME-OPTIONS) or cookie security flags (such as "httponly").
* Server-side information disclosure, such as IPs, server names, and most stack traces.
* Vulnerabilities used to enumerate or confirm the existence of users or tenants.
* Vulnerabilities requiring unlikely user actions.
* URL redirects (unless combined with another vulnerability to produce a more severe vulnerability).
* Lack of SSL/TLS best practices.
* DDoS vulnerabilities.
* Attacks requiring privileged access from within the organization.
* Feature requests.
* Best practices.
* Vulnerabilities primarily caused by browser/plugin defects.
* Any vulnerability exploit requiring CSP bypass resulting from a browser bug.

#### Prohibitions

* Testing with mainnet or public testnet contracts; all testing should be done on private testnets.
* Testing with pricing oracles or third-party smart contracts.
* Attempting phishing or other social engineering attacks against the program's employees and/or customers.
* Testing with third-party systems and applications (e.g., browser extensions) as well as websites (e.g., SSO providers, advertising networks).
* Any denial of service attacks.
* Automated testing of services that generate significant amounts of traffic.
* Public disclosure of an unpatched vulnerability in an embargoed bounty.
