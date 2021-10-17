// deploy/00_deploy_your_contract.js

const { ethers } = require("hardhat");

const localChainId = "31337";

module.exports = async ({ getNamedAccounts, getChainId, deployments }) => {
  const { deploy } = deployments;
  const chainId = await getChainId();
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
      [200, 200], // Digital threshold 200/300
      [3, 3], // Physical threshold 3/5
      ethers.utils.parseUnits("0.0033"), // Digital
      ethers.utils.parseUnits("3"), // Pysical
        [1350, 1350], //inflationRatesStatues
        [1030, 1030], // inflationRatesDigital
    ],
    log: true,
  });

  // load contracts
  const GreatestLARPContract = await ethers.getContract(
    "GreatestLARP",
    deployer
  );
  const EthBot = await ethers.getContract("EthBot", deployer);
  const MolochBot = await ethers.getContract("MolochBot", deployer);
  const EthBotStatue = await ethers.getContract("EthBotStatue", deployer);
  const MolochBotStatue = await ethers.getContract("MolochBotStatue", deployer);

  // transfer ownerships to the factory contract
  const EthBotTransfer = await EthBot.transferOwnership(factory.address);
  await EthBotTransfer.wait(2);

  const MolochBotTransfer = await MolochBot.transferOwnership(factory.address);
  await MolochBotTransfer.wait(2);

  const EthBotStatueTransfer = await EthBotStatue.transferOwnership(
    factory.address
  );
  await EthBotStatueTransfer.wait(2);

  const MolochBotStatueTransfer = await MolochBotStatue.transferOwnership(
    factory.address
  );
  await MolochBotStatueTransfer.wait(2);

  // set the owner to austin or kevin for whomp whomp function
  const FactoryTransfer = await GreatestLARPContract.transferOwnership(
    "0x00de4b13153673bcae2616b67bf822500d325fc3"
  );
  await FactoryTransfer.wait(2);

  if (chainId !== localChainId) {
    // verify the contracts now
    await run("verify:verify", {
      address: EthBot.address,
      contract: "contracts/EthBot.sol:EthBot",
    });

    await run("verify:verify", {
      address: MolochBot.address,
      contract: "contracts/MolochBot.sol:MolochBot",
    });

    await run("verify:verify", {
      address: EthBotStatue.address,
      contract: "contracts/EthBotStatue.sol:EthBotStatue",
    });

    await run("verify:verify", {
      address: MolochBotStatue.address,
      contract: "contracts/MolochBotStatue.sol:MolochBotStatue",
    });

    await run("verify:verify", {
      address: factory.address,
      contract: "contracts/GreatestLARP.sol:GreatestLARP",
      constructorArguments: [
        [eBot.address, mBot.address],
        [eStatue.address, mStatue.address],
        [200, 200], // Digital threshold 200/300
        [3, 3], // Physical threshold 3/5
        ethers.utils.parseUnits("0.0033"), // Digital
        ethers.utils.parseUnits("3"), // Pysical
        [1350, 1350], //inflationRatesStatues
        [1030, 1030], // inflationRatesDigital
      ],
    });
  }
};

module.exports.tags = [
  "GreatestLARP",
  "EthBot",
  "MolochBot",
  "EthBotStatue",
  "MolochBotStatue",
];
