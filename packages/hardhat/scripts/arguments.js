const { ethers } = require("hardhat");

module.exports = [
  [
    "0xFFCf345DA8B42FC770B7A781C250274cDA45F63b",
    "0xF5E4fFf10592f282Cc0C6566dDD4B3F2cbd4eAa5",
  ],
  [
    "0x9a0Bb3b0Da47Af7128ca2b253a2A2D628dB8d7E9",
    "0x26e3dC7a4Ce2376BfDC4eB6eA2A0313505e89994",
  ],
  [3, 3], // just match the deploy
  [1, 1], // just match the deploy
  ethers.utils.parseUnits("0.0033"), // Digital
  ethers.utils.parseUnits("3"), // Pysical
];
