// deploy/00_deploy_your_contract.js

//const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("nftCheck", {
    from: deployer,
    args: [
      "0x82C7c02a52B75387DB14FA375938496cbb984388",
      "0xf80e61279bdc3d02BB9b1887A026F500B203893d",
      "0x42dCbA5dA33CDDB8202CC182A443a3e7b299dADb",
      "0xaBC230E044F828e142d116D46762e95a92e4BcE2",
    ],
    log: true,
  });
};
module.exports.tags = ["nftCheck"];
