const path = require("path");

const SuperblocksProvider = require("super-web3-provider").default;
const ropstenSuperProvider = new SuperblocksProvider({ 
  from: '0xEA6630F5bfA193f76cfc5F530648061b070e7DAd', 
  endpoint: 'https://ropsten.infura.io/v3/14a9bebf5c374938b2476abe29ca5564',
  networkId: '3'});

const rinkebySuperProvider = new SuperblocksProvider({ 
  from: '0xEA6630F5bfA193f76cfc5F530648061b070e7DAd', 
  endpoint: 'https://rinkeby.infura.io/v3/14a9bebf5c374938b2476abe29ca5564',
  networkId: '4'});


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    ropsten_metamask: {
        provider: () => {
            // We have created outside this function as we Truffle will call this function multiple times... and we don't want to create multiple 
            // instances of the provider in that case
            return ropstenSuperProvider;
        },
        from: "0xEA6630F5bfA193f76cfc5F530648061b070e7DAd", // default address to use for any transaction Truffle makes during migrations
        network_id: '3'
    },
    rinkeby_metamask: {
        provider: () => {
            // We have created outside this function as we Truffle will call this function multiple times... and we don't want to create multiple 
            // instances of the provider in that case
            return rinkebySuperProvider;
        },
        from: "0xEA6630F5bfA193f76cfc5F530648061b070e7DAd", // default address to use for any transaction Truffle makes during migrations
        network_id: '4'
    }
  }
};
