require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = {
  defaultNetwork:"hardhat",
  solidity: "0.8.8",
  networks:{
    rinkeby:{
      url:RINKEBY_RPC_URL,
      accounts:[PRIVATE_KEY],
      chainId:4 
    },
    localhost:{
      url:"http://127.0.0.1:8545",
      chainId:31337
    }
  },
  etherscan: {
    apiKey:ETHERSCAN_API_KEY
     
  }
};
