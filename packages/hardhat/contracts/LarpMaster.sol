pragma solidity 0.7.6;
//SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/access/Ownable.sol";
import "./EthBot.sol";
import "./Moloch.sol";

/// @title LarpMaster Factory Contract
/// @author jaxcoder, ghostffcode
/// @notice 
/// @dev 
contract LarpMaster is Ownable {

    EthBot public ethBotContract;
    Moloch public molochContract;

    address payable public constant gitcoin = 0xde21F729137C5Af1b01d73aF1dC21eFfa2B8a0d6;

    enum BotType { ETHBOT, MOLOCH }
    
    constructor 
    (
        address _ethBotAddress,
        address _molochBotAddress
    ) 
        public
    {
        ethBotContract = EthBot(_ethBotAddress);
        molochContract = Moloch(_molochBotAddress);

        // set the new owner, do we need access control?
        transferOwnership(0xA4ca1b15fE81F57cb2d3f686c7B13309906cd37B);
    }

    function requestMint(BotType botType)
        public
        payable
    {
        address to = msg.sender;
        if(BotType.ETHBOT) {
            mintEthBot(to);
        } else if(BotType.MOLOCH) {
            mintMolochBot(to);
        }
    }

    function mintEthBot(address _to)
        internal
    {
        ethBotContract.requestMint(_to);
    }

    function mintMolochBot(address _to)
        internal
    {
        molochContract.requestMint(_to);
    }
}