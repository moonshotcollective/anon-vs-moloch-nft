//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// import "./EthStatue.sol";
// import "./MolochStatue.sol";

interface BotToken {
    function lastMintedToken() external view returns (uint256);

    function mint(address user) external returns (uint256);
}

/// @title GreatestLARP Factory Contract
/// @author jaxcoder, ghostffcode
/// @notice
/// @dev
contract GreatestLARP is Ownable {
    address payable gitcoin;

    struct Token {
        address tokenAddress;
        uint256 threshold;
        uint256 price;
        uint256 totalSupply;
    }

    mapping(uint256 => Token) tokenMap;

    uint256 public totalTokens;

    modifier isValidLevel(uint256 level) {
        // level is between 1 and totalTokens Count
        require(level > 0, "Invalid level selected");
        require(level <= totalTokens, "Invalid level selected");
        _;
    }

    constructor(
        BotToken[] memory tokens,
        uint256[] memory threshold,
        uint256 startPrice
    ) {
        gitcoin = payable(address(0xde21F729137C5Af1b01d73aF1dC21eFfa2B8a0d6));

        require(
            tokens.length == threshold.length,
            "Mismatch length of tokens and threshold"
        );

        for (uint256 i = 0; i < tokens.length; i++) {
            // increment tokens count
            totalTokens += 1;

            // add token to tokenMap
            tokenMap[totalTokens] = Token({
                tokenAddress: address(tokens[i]),
                threshold: threshold[i],
                price: startPrice,
                totalSupply: 300
            });
        }
    }

    function getDetailsForLevel(uint256 level)
        public
        view
        returns (
            uint256 price,
            uint256 threshold,
            uint256 totalSupply,
            address tokenAddress
        )
    {
        price = tokenMap[level].price;
        threshold = tokenMap[level].threshold;
        totalSupply = tokenMap[level].totalSupply;
        tokenAddress = tokenMap[level].tokenAddress;
    }

    function changeLevelPrice(uint256 level, uint256 newPrice)
        public
        isValidLevel(level)
        onlyOwner
    {
        tokenMap[level].price = newPrice;
    }

    function requestMint(uint256 level)
        public
        payable
        isValidLevel(level)
        returns (uint256)
    {
        BotToken levelToken = BotToken(tokenMap[level].tokenAddress);

        // check if threshold for previous token has been reached
        if (level > 1) {
            uint256 previousLevel = level - 1;
            require(
                BotToken(tokenMap[previousLevel].tokenAddress)
                    .lastMintedToken() >= tokenMap[previousLevel].threshold,
                "You can't continue until the previous level threshold is reached"
            );
        }

        // compare value and price
        require(msg.value >= tokenMap[level].price, "NOT ENOUGH");

        // update the price of the token
        tokenMap[level].price = (tokenMap[level].price * 1047) / 1000;

        // send ETH to gitcoin multisig
        (bool success, ) = gitcoin.call{value: msg.value}("");
        require(success, "could not send");

        // make sure there are available tokens for this level
        require(
            levelToken.lastMintedToken() <= tokenMap[level].totalSupply,
            "Minting completed for this level"
        );

        // mint token
        uint256 id = levelToken.mint(msg.sender);

        return id;
    }
}
