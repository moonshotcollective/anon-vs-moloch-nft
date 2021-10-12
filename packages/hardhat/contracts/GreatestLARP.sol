//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title GreatestLARP Factory Contract
/// @author jaxcoder, ghostffcode
/// @notice
/// @dev
contract GreatestLARP is Ownable, ERC721URIStorage {
    address payable gitcoin;

    enum levels {
        first,
        second
    }

    struct art {
        uint256 limit;
        uint256 price;
        uint256 threshold;
        uint256 tokenId;
        string uri;
    }

    mapping(uint256 => art) larp;

    constructor() ERC721("GreatestLARP", "GLARP") {
        gitcoin = payable(address(0xde21F729137C5Af1b01d73aF1dC21eFfa2B8a0d6));
        // first LARP stage
        larp[1] = art({
            limit: 300,
            price: 0.0033 ether,
            threshold: 80,
            tokenId: 0,
            uri: "stage1.json"
        });

        // second LARP stage
        larp[2] = art({
            limit: 300,
            price: 0.0033 ether,
            threshold: 160,
            tokenId: 1000,
            uri: "stage2.json"
        });
    }

    function _baseURI() internal pure override returns (string memory) {
        return
            "https://gateway.pinata.cloud/ipfs/QmdRmZ1UPSALNVuXY2mYPb3T5exn9in1AL3tsema4rY2QF/json/";
    }

    function requestMint(uint256 level) public payable returns (uint256) {
        require(level > 0, "Invalid level selected");
        require(level < 3, "Invalid level selected");

        if (level == 2) {
            require(
                larp[1].threshold > larp[1].tokenId,
                "You can't continue until level 1 threshold is reached"
            );
        }

        // get URI for selected level
        string memory tokenURI = larp[level].uri;

        // compare value and price
        require(msg.value >= larp[level].price, "NOT ENOUGH");

        // update the price of the level
        larp[level].price = (larp[level].price * 1047) / 1000;

        // send ETH to gitcoin multisig
        (bool success, ) = gitcoin.call{value: msg.value}("");
        require(success, "could not send");

        // make sure there are available tokens for this level
        require(
            larp[level].tokenId < larp[level].limit,
            "Minting completed for this level"
        );

        // increment this token count
        larp[level].tokenId += 1;

        uint256 id = larp[level].tokenId;

        // mint token
        _mint(msg.sender, id);

        // set tokenURI
        _setTokenURI(id, tokenURI);

        return id;
    }
}
