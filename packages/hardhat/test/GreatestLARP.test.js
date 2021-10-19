const { ethers } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");

use(solidity);

describe("My Dapp", function () {
  let GreatestLARP;

  // quick fix to let gas reporter fetch data from gas station & coinmarketcap
  before(done => {
    setTimeout(done, 2000);
  });

  describe("GreatestLARP", function () {
    it("Should deploy contracts", async function () {
      const ethBot = await ethers.getContractFactory("EthBot");
      const molochBot = await ethers.getContractFactory("MolochBot");
      const EthBotStatue = await ethers.getContractFactory("EthBotStatue");
      const MolochBotStatue = await ethers.getContractFactory("MolochBotStatue");
      const greatestLARP = await ethers.getContractFactory("GreatestLARP");

      const eBot = await ethBot.deploy();
      const mBot = await molochBot.deploy();
      const eStatue = await EthBotStatue.deploy();
      const mStatue = await MolochBotStatue.deploy();
      GreatestLARP = await greatestLARP.deploy(
        [eBot.address, mBot.address],
        [eStatue.address, mStatue.address],
        [200, 200], // Digital threshold 200/300
        [3, 3], // Physical threshold 3/5
        ethers.utils.parseUnits("0.0033"), // Digital
        ethers.utils.parseUnits("0.003"), // Pysical
        [1350, 1350], // inflationRatesStatues
        [1030, 1030], // inflationRatesDigital);
      );
    });
  });
});
