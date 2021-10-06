//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title GreatestLARP Factory Contract
/// @author jaxcoder, ghostffcode
/// @notice
/// @dev
contract EthBot is ERC721URIStorage {

    constructor() ERC721("EthBot", "ETHBOT") {}

    function _baseURI() internal pure override returns (string memory) {
        return
            "https://gateway.pinata.cloud/ipfs/QmdRmZ1UPSALNVuXY2mYPb3T5exn9in1AL3tsema4rY2QF/json/";
    }

    
}
