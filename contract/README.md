## HamSupportX Overview

### Description
HamSupportX is a decentralized platform akin to "Buy Me a Coffee," designed to empower creators by facilitating direct financial support from their audience. Users can subscribe to their favorite creators and receive NFTs as proof of membership, enhancing engagement and community interaction. The project consists of two primary contracts: **HamSupportX** for managing subscriptions and creator information, and **HamsToken** for minting NFTs.

### Key Features
1. **Creator Registration**: Creators can register on the platform, setting their monthly and yearly subscription prices. The platform ensures that each creator can only register once, promoting a fair and organized ecosystem.

2. **User Subscriptions**: Users can subscribe to multiple creators by paying the corresponding subscription fee. The subscription duration can be either monthly or yearly, and the contract tracks the expiry of each subscription.

3. **NFT Minting**: Upon successful subscription, users receive an NFT representing their membership. This NFT is minted by the HamsToken contract, adding value and exclusivity to the user's membership.

4. **Fund Withdrawal**: Creators can withdraw funds accumulated from subscriptions, ensuring they have access to their earnings. The contract includes checks to prevent unauthorized withdrawals.

### Contract Functions
- **registerCreator**: Allows a user to register as a creator, setting their monthly and yearly subscription prices.
- **subscribe**: Enables users to subscribe to a creator, minting an NFT in the process.
- **isSubscriptionValid**: Checks if a user’s subscription to a specific creator is still active.
- **updateSubscriptionPrices**: Allows creators to update their subscription prices as needed.
- **withdrawFunds**: Lets creators withdraw their earnings from the contract.

### Testing Suite
The provided tests ensure the functionality and security of the HamSupportX contract. Key tests include:
- **Creator Registration**: Verifying that a creator can register successfully and that their details are stored correctly.
- **User Subscription**: Checking that users can subscribe to creators and that their subscription details are accurately recorded.
- **NFT Minting**: Ensuring that an NFT is minted for the user upon successful subscription.
- **Withdrawal Functionality**: Confirming that only registered creators can withdraw funds and that the balances update correctly.

---

## Table of Contents

- [Installation](#installation)
- [Running the Local Development Environment](#running-the-local-development-environment)
- [Deploying the Contract](#deploying-the-contract)
- [Running Tests](#running-tests)


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Arulselvan-65/HamSupportX.git
   ```

2. Navigate into the project directory:

   ```bash
   cd contract
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Running the Local Development Environment

1. Start a local Ethereum node:

   ```bash
   npx hardhat node
   ```

   This will spin up a local blockchain and provide you with several test accounts.

## Deploying the Contract

1. In another terminal window, run the following command to deploy the contract. Replace `<network-name>` with your desired network (e.g., `localhost` for local testing):

   ```bash
   npx hardhat run ./scripts/deploy.js --network <network-name>
   ```

   This will deploy your contracts to the specified network. Take note of the deployed contract address.

## Running Tests

1. To run the tests and ensure everything works correctly, use the following command:

   ```bash
   npx hardhat test
   ```

   This will execute the test suite, and you should see the results in your terminal.

