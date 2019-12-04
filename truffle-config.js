const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const SuperblocksProvider = require("super-web3-provider").default;

// CD networks
var ropstenProvider = new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/14a9bebf5c374938b2476abe29ca5564");
var rinkebyProvider = new HDWalletProvider(process.env.MNEMONIC, "https://rinkeby.infura.io/v3/14a9bebf5c374938b2476abe29ca5564");

// MM signing enabled networks
const rinkebySuperProvider = new SuperblocksProvider({ 
  from: '0xEA6630F5bfA193f76cfc5F530648061b070e7DAd', 
  endpoint: 'https://rinkeby.infura.io/v3/14a9bebf5c374938b2476abe29ca5564',
  networkId: '4'});


module.exports = {

  plugins: ["truffle-security"],

  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    ropsten: {
      provider: () => {
          return ropstenProvider;
      },
      network_id: '3'
    },
    rinkeby: {
      provider: () => {
          return rinkebyProvider;
      },
      network_id: '4'
    },
    rinkeby_metamask: {
      provider: () => {
          // We have created outside this function as we Truffle will call this function multiple times... and we don't want to create multiple 
          // instances of the provider in that case
          return rinkebySuperProvider;
      },
      // from: "0xEA6630F5bfA193f76cfc5F530648061b070e7DAd", // default address to use for any transaction Truffle makes during migrations
      network_id: '4'
    }
  }
};
