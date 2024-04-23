# full-stack-dApp
This is a full-stack dApp containing smart contract with a front-end.

Create React App:
 • Use Create React App to set up your frontend project.
 • Run npx create-react-app my-dapp to create a new React app.

Install necessary dependencies:
 • npm i npm start

  Authentication Page:
 • An Authentication component with Sign In and Register buttons.
 • Implemented navigation to the Registration and Sign In pages.

  Registration Page:
 • A Registration component that generates a wallet address and balance for the user.
 • Using the local storage from the web console to store the wallet address, balance, and password.

  Sign In Page:
 • A Sign In component where users can pass their wallet address and password.
 • Verifying the password against the stored one on local storage.

  Main Page:
 • A Main component to display the user's wallet balance.
 • Implemented functionality to send transactions to other wallets.

  Donation Page:
 • A Donation component where users can enter an amount to donate.
 • Subtraction of the donation amount from the user's wallet balance.

Backend:
  Set Up Hardhat:
 • Install Hardhat and initialize a new project
npm install --save-dev hardhat
npx hardhat

  Smart Contracts:
 • Solidity smart contract for user transaction sending and balance checking.

  Deploy Smart Contracts:
 • Deploy the smart contract to the Ethereum blockchain using Hardhat. // you can use sepolia as a testnet
