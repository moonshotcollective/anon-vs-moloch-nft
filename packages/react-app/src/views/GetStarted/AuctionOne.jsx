import React from "react";
import { Button } from "../../themed-components";
import EthBot from "../../assets/mint/frontEthBot.png";
import MolochStatue from "../../assets/mint/molochStatue.png";

function AuctionOne(props) {
  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="max-w-md">
          <h1 className="text-4xl mb-8 font-normal text-green-header font-librefranklin">Let's NFT Auction Begin >></h1>

          <div className="text-lg mb-6">
            We need to coordinate. Onoce all of these ETHBots have been minted, you can proceed to the next level.
          </div>

          <div>
            <Button>Continue</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <div className="grid grid-cols-2 gap-4 w-full">
          {/*  ETH Bot */}
          <div className="flex flex-col items-center">
            {/* Image Wrapper */}
            <img src={EthBot} alt="ETH Bot" className="mb-4" />

            {/* Image Title */}
            <h3 className="font-spacemono text-purple-imgText font-semibold text-lg">Physical ETHBots</h3>

            {/* Button */}
            <Button
              transparent
              className="border-2 border-green-header text-green-header hover:bg-green-dark-green mb-2"
              padding={10}
            >
              0.01 ETH
            </Button>
            <span className="text-red-500">(Only 3 available)</span>
          </div>

          {/*  Moloch Statue */}
          <div className="flex flex-col items-center">
            {/* Image Wrapper */}
            <img src={MolochStatue} alt="Moloch Statue" className="mb-4" />

            {/* Image Title */}
            <h3 className="font-spacemono text-purple-imgText font-semibold text-lg">Moloch Statue</h3>

            {/* Button */}
            <Button
              transparent
              className="border-2 border-green-header text-green-header hover:bg-green-dark-green mb-2"
              padding={10}
            >
              0.01 ETH
            </Button>
            <span className="text-red-500">(Only 300 available)</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuctionOne;
