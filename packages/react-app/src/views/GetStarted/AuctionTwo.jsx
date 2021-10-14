import React from "react";
import DigitalMoloch from "../../assets/mint/digitalMoloch.png";
import PhysicalMoloch from "../../assets/mint/physicalMoloch.png";
import { Button } from "../../themed-components";

function AuctionOne({ goToNextStep, mintingToken, mintTokenBot, mintTokenStatue, tokenPrices, tokenLeftover, statueLeftover, ...props }) {
  const level = 2;

  return (
    <>
      <div className="flex flex-1 justify-center items-center">
        <div className="grid grid-cols-2 gap-4 w-full">
          {/*  Physical Moloch */}
          <div className="flex flex-col items-center">
            {/* Image Wrapper */}
            <img src={PhysicalMoloch} alt="Physical Moloch" className="mb-4" />

            {/* Image Title */}
            <h3 className="font-spacemono text-purple-imgText font-semibold text-lg">Physical Molochs</h3>

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

          {/*  Digital Moloch */}
          <div className="flex flex-col items-center">
            {/* Image Wrapper */}
            <img src={DigitalMoloch} alt="Digital Moloch" className="mb-4" />

            {/* Image Title */}
            <h3 className="font-spacemono text-purple-imgText font-semibold text-lg">Digital Moloch</h3>

            {/* Button */}
            <Button
              transparent
              loading={mintingToken}
              onClick={() => mintTokenBot(level)}
              className="border-2 border-green-header text-green-header hover:bg-green-dark-green mb-2"
              padding={10}
            >
              {tokenPrices[level - 1]} ETH
            </Button>
            <span className="text-red-500">(Only {tokenLeftover[level - 1]} available)</span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col pl-16">
        <div className="max-w-md">
          <h1 className="text-4xl mb-8 font-normal text-green-header font-spacemono">NFT Auction 2</h1>

          <div className="text-lg mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting .Lorem Ipsum is simply dummy text.
          </div>

          <div>
            <Button onClick={goToNextStep}>Continue</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuctionOne;
