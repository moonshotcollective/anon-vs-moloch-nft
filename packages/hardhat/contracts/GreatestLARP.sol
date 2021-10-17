//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./TokenRecover.sol";

interface BotToken {
    function lastMintedToken() external view returns (uint256);

    function mint(address user) external returns (uint256);
}

interface StatueToken {
    function lastMintedToken() external view returns (uint256);

    function mint(address user) external returns (uint256);
}

/// @title GreatestLARP Factory Contract
/// @author jaxcoder, ghostffcode
/// @notice
/// @dev
contract GreatestLARP is Ownable {
    using SafeMath for uint256;
    address payable gitcoin;

    struct Token {
        address tokenAddress;
        uint256 thresholdBots;
        uint256 thresholdStatues;
        uint256 price;
        uint256 totalSupply;
    }

    mapping(uint256 => Token) tokenMap;
    mapping(uint256 => Token) statueMap;

    uint256 public totalTokens;
    uint256 public totalStatues;

    modifier isValidLevel(uint256 level) {
        // level is between 1 and totalTokens Count
        require(level > 0, "Invalid level selected");
        require(level <= totalTokens, "Invalid level selected");
        require(level <= totalStatues, "Invalid level selected");
        _;
    }

    constructor(
        BotToken[] memory tokens,
        StatueToken[] memory statueTokens,
        uint256[] memory thresholdBots,
        uint256[] memory thresholdStatues,
        uint256 startPriceBot,
        uint256 startPriceStatue
    ) {
        gitcoin = payable(address(0xde21F729137C5Af1b01d73aF1dC21eFfa2B8a0d6));

        require(
            tokens.length == thresholdBots.length,
            "Mismatch length of tokens and threshold"
        );

        require(
            statueTokens.length == thresholdStatues.length,
            "Mismatch length of tokens and threshold"
        );

        for (uint256 i = 0; i < tokens.length; i++) {
            // increment tokens count
            totalTokens += 1;

            // add token to tokenMap
            tokenMap[totalTokens] = Token({
                tokenAddress: address(tokens[i]),
                thresholdBots: thresholdBots[i],
                thresholdStatues: 0,
                price: startPriceBot,
                totalSupply: 300
            });
        }

        for (uint256 i = 0; i < statueTokens.length; i++) {
            // increment tokens count
            totalStatues += 1;

            // add token to tokenMap
            statueMap[totalStatues] = Token({
                tokenAddress: address(statueTokens[i]),
                thresholdBots: 0,
                thresholdStatues: thresholdStatues[i],
                price: startPriceStatue,
                totalSupply: 5
            });
        }
    }

    /// @dev A function that can be called from Etherscan to lower
    ///      the price of the item by 10%.
    function whompwhomp(uint256 _level) public isValidLevel(_level) onlyOwner {
        if (_level == 1) {
            tokenMap[_level].price = tokenMap[_level].price.sub(
                tokenMap[_level].price.div(100).mul(10)
            );
            statueMap[_level].price = statueMap[_level].price.sub(
                statueMap[_level].price.div(100).mul(10)
            );
        } else if (_level == 2) {
            tokenMap[_level].price = tokenMap[_level].price.sub(
                tokenMap[_level].price.div(100).mul(10)
            );
            statueMap[_level].price = statueMap[_level].price.sub(
                statueMap[_level].price.div(100).mul(10)
            );
        }
    }

    /// @dev returns the details for a Bot level
    function getDetailsForLevelBots(uint256 level)
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
        threshold = tokenMap[level].thresholdBots;
        totalSupply = tokenMap[level].totalSupply;
        tokenAddress = tokenMap[level].tokenAddress;
    }

    /// @dev returns the details for a Statue level
    function getDetailsForLevelStatue(uint256 level)
        public
        view
        returns (
            uint256 price,
            uint256 threshold,
            uint256 totalSupply,
            address tokenAddress
        )
    {
        price = statueMap[level].price;
        threshold = statueMap[level].thresholdStatues;
        totalSupply = statueMap[level].totalSupply;
        tokenAddress = statueMap[level].tokenAddress;
    }

    /// @dev returns the current prices for the items
    function tokenPrices() public view returns (uint256[] memory) {
        uint256[] memory prices = new uint256[](totalTokens);

        for (uint256 i = 1; i <= totalTokens; i++) {
            prices[i - 1] = tokenMap[i].price;
        }

        return prices;
    }

    /// @dev returns the current prices for the items
    function statuePrices() public view returns (uint256[] memory) {
        uint256[] memory prices = new uint256[](totalStatues);

        for (uint256 i = 1; i <= totalStatues; i++) {
            prices[i - 1] = statueMap[i].price;
        }

        return prices;
    }

    /// @dev returns the number Bot tokens left for sale
    function tokenLeftover() public view returns (uint256[] memory) {
        uint256[] memory leftOver = new uint256[](totalTokens);

        for (uint256 i = 1; i <= totalTokens; i++) {
            leftOver[i - 1] =
                tokenMap[i].totalSupply -
                BotToken(tokenMap[i].tokenAddress).lastMintedToken();
        }

        return leftOver;
    }

    /// @dev returns the number of Statue NFTs left for sale
    function statueLeftover() public view returns (uint256[] memory) {
        uint256[] memory leftOver = new uint256[](totalStatues);

        for (uint256 i = 1; i <= totalStatues; i++) {
            leftOver[i - 1] =
                statueMap[i].totalSupply -
                StatueToken(statueMap[i].tokenAddress).lastMintedToken();
        }

        return leftOver;
    }

    /// @dev update the level price
    function changeLevelPriceForBots(uint256 level, uint256 newPrice)
        public
        isValidLevel(level)
        onlyOwner
    {
        tokenMap[level].price = newPrice;
    }

    /// @dev update the level price
    function changeLevelPriceForStatues(uint256 level, uint256 newPrice)
        public
        isValidLevel(level)
        onlyOwner
    {
        statueMap[level].price = newPrice;
    }

    /// @dev request to mint a Bot NFT
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
                    .lastMintedToken() >= tokenMap[previousLevel].thresholdBots,
                "You can't continue until the previous level threshold is reached"
            );
        }

        // compare value and price
        require(msg.value >= tokenMap[level].price, "NOT ENOUGH");

        // update the price of the token
        tokenMap[level].price = (tokenMap[level].price * 1030) / 1000;

        // make sure there are available tokens for this level
        require(
            levelToken.lastMintedToken() <= tokenMap[level].totalSupply,
            "Minting completed for this level"
        );

        // send ETH to gitcoin multisig
        (bool success, ) = gitcoin.call{value: tokenMap[level].price}("");
        require(success, "could not send");

        // mint token
        uint256 id = levelToken.mint(msg.sender);

        // send the refund
        uint256 refund = msg.value.sub(tokenMap[level].price);
        if (refund > 0) {
            (bool refundSent, ) = msg.sender.call{value: refund}("");
            require(refundSent, "Refund could not be sent");
        }

        return id;
    }

    /// @dev request to mint a statue NFT
    function requestMintStatue(uint256 level)
        public
        payable
        isValidLevel(level)
        returns (uint256)
    {
        StatueToken levelToken = StatueToken(statueMap[level].tokenAddress);

        // check if threshold for previous token has been reached
        if (level > 1) {
            uint256 previousLevel = level - 1;
            require(
                StatueToken(statueMap[previousLevel].tokenAddress)
                    .lastMintedToken() >=
                    statueMap[previousLevel].thresholdStatues,
                "You can't continue until the previous level threshold is reached"
            );
        }

        // compare value and price
        require(msg.value >= statueMap[level].price, "NOT ENOUGH");

        // update the price of the token
        statueMap[level].price = (statueMap[level].price * 1350) / 1000;

        // make sure there are available tokens for this level
        require(
            levelToken.lastMintedToken() <= statueMap[level].totalSupply,
            "Minting completed for this level"
        );

        // send ETH to gitcoin multisig
        (bool success, ) = gitcoin.call{value: statueMap[level].price}("");
        require(success, "could not send");

        // mint token
        uint256 id = levelToken.mint(msg.sender);

        // send the refund
        uint256 refund = msg.value.sub(statueMap[level].price);
        if (refund > 0) {
            (bool refundSent, ) = msg.sender.call{value: refund}("");
            require(refundSent, "Refund could not be sent");
        }

        return id;
    }
}
