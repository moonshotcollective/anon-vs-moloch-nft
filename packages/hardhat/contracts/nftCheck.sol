pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT
import "./Interfaces.sol";

contract EthBotCheck is ERC165, ERC721 {
    address public EthBot;
    address public EthBotStatue;
    address public Moloch;
    address public MolochStatue;

    event ownsNft(int canViewComic);

    constructor(address _EthBot, address _EthBotStatue, address _Moloch, address _MolochStatue) {
      EthBot = _EthBot;
      EthBotStatue = _EthBotStatue;
      Moloch = _Moloch;
      MolochStatue = _MolochStatue;
    }
 
    function nftOwnership(uint256 _tokenId) public view returns (int) {
        int result = 0;
        if (ERC721(EthBot).ownerOf(_tokenId) == msg.sender) {
          ownsNft(1);
        } else if (ERC721(EthBotStatue).ownerOf(_tokenId) == msg.sender) {
          ownsNft(2);
        } else if (ERC721(Moloch).ownerOf(_tokenId) == msg.sender) {
          ownsNft(3);
        } else if (ERC721(MolochStatue).ownerOf(_tokenId) == msg.sender) {
          ownsNft(4);
        }
        return result;
    }
}
