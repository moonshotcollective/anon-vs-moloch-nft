//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title Eth Bot Statue NFT Contract
/// @author jaxcoder, ghostffcode
/// @notice
/// @dev
contract EthBotStatue is ERC721URIStorage, Ownable {
    using SafeMath for uint256;
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;

    uint256 public lastMinted = 0;

    string[] private uris;

    // this lets you look up a token by the uri (assuming there is only one of each uri for now)
    mapping(bytes32 => uint256) public uriToTokenId;

    constructor() ERC721("Eth Bot Statue", "ETHBOTSTAT") {
        uris = ["ethbot.json", "ethbot.json", "ethbot.json", "ethbot.json", "ethbot.json"];
    }

    function _baseURI() internal pure override returns (string memory) {
        return
            "https://gateway.pinata.cloud/ipfs/QmfSo9qSGfjQLFtkYSjHX1L1ayrFS1SiHYXcMiEpNjgviS/";
    }

    function contractURI() public view returns (string memory) {
        return "";
    }

    function lastMintedToken() external view returns (uint256 id) {
        id = _tokenIds.current();
    }

    function mintItem(address to, string memory tokenURI)
      private
      returns (uint256)
    {
        _tokenIds.increment();

        uint256 id = _tokenIds.current();
        _mint(to, id);
        _setTokenURI(id, tokenURI);

        return id;
    }

    function mint(address user)
        external
        onlyOwner
        returns (uint256 id) 
    {
        id = _tokenIds.current();

        mintItem(user,  uris[id]);

        lastMinted = id;

        // TODO : how do we setup the URI?

        return id;
    }
}
