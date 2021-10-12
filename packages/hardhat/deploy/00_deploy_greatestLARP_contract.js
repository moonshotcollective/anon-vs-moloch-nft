// deploy/00_deploy_your_contract.js

const { ethers } = require('hardhat')

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  // deploy ERC-721 Tokens
  const eBot = await deploy('EthBot', { from: deployer, log: true })
  const mBot = await deploy('MolochBot', { from: deployer, log: true })

  // deploy factory contract
  const factory = await deploy('GreatestLARP', {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    args: [[eBot.address, mBot.address], [3, 3], ethers.utils.parseUnits('0.0033')],
    log: true,
  })

  // load token contracts
  const EthBot = await ethers.getContract('EthBot', deployer)
  const MolochBot = await ethers.getContract('MolochBot', deployer)

  // transfer ownerships to the factory contract
  const EthBotTransfer = await EthBot.transferOwnership(factory.address)
  await EthBotTransfer.wait(1)

  const MolochBotTransfer = await MolochBot.transferOwnership(factory.address)
  await MolochBotTransfer.wait(1)
}

module.exports.tags = ['GreatestLARP', 'EthBot', 'MolochBot']
