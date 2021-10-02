pragma solidity 0.7.6;
//SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract EthBot is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    address payable public constant gitcoin = 0xde21F729137C5Af1b01d73aF1dC21eFfa2B8a0d6;

    string [] private uris;

    uint256 public constant limit = 300;
    uint256 public price = 0.0033 ether;
    uint256 public constant threshold_level_1 = 80;
    uint256 public constant threshold_level_2 = 160;
    // uint256 public constant threshold_level_3 = 260;

    constructor() public ERC721("EthBots", "ETHB") 
    {
        _setBaseURI("https://gateway.pinata.cloud/ipfs/QmdRmZ1UPSALNVuXY2mYPb3T5exn9in1AL3tsema4rY2QF/json/");
        uris = ["test.json"];
    }

    function mintItem(address to, string memory tokenURI)
      private
      returns (uint256)
    {
        require( _tokenIds.current() < limit , "DONE MINTING");
        _tokenIds.increment();

        uint256 id = _tokenIds.current();
        _mint(to, id);
        _setTokenURI(id, tokenURI);

        return id;
    }

  function requestMint(address to)
      public
      payable
  {
    require( msg.value >= price, "NOT ENOUGH");
    price = (price * 1047) / 1000;
    (bool success,) = gitcoin.call{value:msg.value}("");
    require( success, "could not send");
    mintItem(to, uris[_tokenIds.current()]);
  }
}