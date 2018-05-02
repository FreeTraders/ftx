var OriginIdentityContract = require("../build/contracts/OriginIdentity.json")
var contract = require("truffle-contract")
var web3Utils = require("web3-utils")

const issuer = "0x99C03fBb0C995ff1160133A8bd210D0E77bCD101"
const issuerHashed = web3Utils.soliditySha3(issuer)
const keyPurpose = 3
const keyType = 1

module.exports = function(deployer, network) {
  return add_sample_issuer(network)
}

async function add_sample_issuer(network) {
  let defaultAccount = web3.eth.accounts[0]

  let originIdentityContract = contract(OriginIdentityContract)
  originIdentityContract.setProvider(web3.currentProvider)
  let originIdentity = await originIdentityContract.deployed()

  return await originIdentity.addKey(
    issuerHashed,
    keyPurpose,
    keyType,
    { from: defaultAccount, gas: 4000000 }
  )
}
