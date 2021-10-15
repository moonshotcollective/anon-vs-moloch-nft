// deploy/00_deploy_your_contract.js

const { ethers } = require("hardhat");


module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  // deploy ERC-721 Tokens
  const eBot = await deploy("EthBot", { from: deployer, log: true });
  const mBot = await deploy("MolochBot", { from: deployer, log: true });
  const eStatue = await deploy("EthBotStatue", { from: deployer, log: true });
  const mStatue = await deploy("MolochBotStatue", {
    from: deployer,
    log: true,
  });

  // deploy factory contract
  const factory = await deploy("GreatestLARP", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    args: [
      [eBot.address, mBot.address],
      [eStatue.address, mStatue.address],
      [3, 3], // Digital threshold 200/300
      [1, 1], // Physical threshold 3/5
      ethers.utils.parseUnits("0.0033"), // Digital
      ethers.utils.parseUnits("3"), // Pysical
    ],
    log: true,
  });

  // load token contracts
  const EthBot = await ethers.getContract("EthBot", deployer);
  const MolochBot = await ethers.getContract("MolochBot", deployer);
  const EthBotStatue = await ethers.getContract("EthBotStatue", deployer);
  const MolochBotStatue = await ethers.getContract("MolochBotStatue", deployer);

  // transfer ownerships to the factory contract
  const EthBotTransfer = await EthBot.transferOwnership(factory.address);
  await EthBotTransfer.wait(1);

  const MolochBotTransfer = await MolochBot.transferOwnership(factory.address);
  await MolochBotTransfer.wait(1);

  const EthBotStatueTransfer = await EthBotStatue.transferOwnership(
    factory.address
  );
  await EthBotStatueTransfer.wait(1);

  const MolochBotStatueTransfer = await MolochBotStatue.transferOwnership(
    factory.address
  );
  await MolochBotStatueTransfer.wait(1);

  // set the owner to austin or kevin for whomp whomp function
  // const FactoryTransfer = await factory.transferOwnership()
  // await FactoryTransfer.wait(1);
};

module.exports.tags = [
  "GreatestLARP",
  "EthBot",
  "MolochBot",
  "EthBotStatue",
  "MolochBotStatue",
];
