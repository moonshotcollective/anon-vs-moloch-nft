const { ethers } = require("hardhat");

module.exports = [
  [
    "0xb1c3E7Ba38c952eEb1f531EFdC6750fF310D456F",
    "0x8124E4A4934743439B0827C7cE670EAB2Fc903bD",
  ],
  [
    "0x18269c39edDE3BbaC0F493E04E8B942BEBc58589",
    "0x07f2884d49F1d27cf0457716Ae4696E1c3434073",
  ],
  [3, 3],
  [1, 1],
  ethers.utils.parseUnits("0.0033"), // Digital
  ethers.utils.parseUnits("3"), // Pysical
];
