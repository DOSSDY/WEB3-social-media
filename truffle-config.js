require('babel-register');
require('babel-polyfill');
require('dotenv').config();
// const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = require("./secrets.json").mnemonic;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(
          mnemonic, `https://kovan.infura.io/v3/8547cbd76cfe4ef199d124cea1125f80`
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 42,
      confirmations: 2
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}

