require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",

  networks: {
    localhost: {
      url: "http://localhost:8545",
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/" + process.env.ALCHEMY_ID, 
      accounts: [
        process.env.PRIVATE_KEY
      ],
    },
    mainnet: {
      url: "https://eth-mainnet.g.alchemy.com/v2/" + process.env.ALCHEMY_ID, 
      accounts: [
        process.env.PRIVATE_KEY
      ],
    },
  }
};
