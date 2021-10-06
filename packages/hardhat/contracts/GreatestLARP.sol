//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./EthBot.sol";
import "./MolochBot.sol";
import "./EthStatue.sol";
import "./MolochStatue.sol";

/// @title GreatestLARP Factory Contract
/// @author jaxcoder, ghostffcode
/// @notice
/// @dev
contract GreatestLARP is Ownable {
    address payable gitcoin;

    EthBot public ethBot;
    MolochBot public molochBot;
    EthStatue public ethStatue;
    MolochStatue public molochStatue;

    enum NFT_TYPE {
        ETHBOT,
        MOLOCHBOT,
        ETHSTATUE,
        MOLOCHSTATUE
    }

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

    constructor
    (
        address _ethBot,
        address _molochBot,
        address _ethStatue,
        address _molochStatue 
    ) {
        gitcoin = payable(address(0xde21F729137C5Af1b01d73aF1dC21eFfa2B8a0d6));

        ethBot = EthBot(_ethBot);
        molochBot = MolochBot(_molochBot);
        ethStatue = EthStatue(_ethStatue);
        molochStatue = MolochStatue(_molochStatue);

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

    
    function requestMint(uint256 level, NFT_TYPE nftType) public payable returns (uint256) {
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
        // _mint(msg.sender, id);

        // set tokenURI
        // _setTokenURI(id, tokenURI);

        return id;
    }
}
