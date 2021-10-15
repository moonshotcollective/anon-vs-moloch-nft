import React from "react";
import EthBot from "../../assets/mint/frontEthBot.png";
import MolochStatue from "../../assets/mint/molochStatue.png";
import { Button } from "../../themed-components";
import { Popover } from 'antd';


function AuctionOne({
  goToNextStep,
  mintingToken,
  mintTokenBot,
  mintTokenStatue,
  tokenPrices,
  statuePrices,
  tokenLeftover,
  statueLeftover,
  levelCompleted,
  ...props
}) {
  const level = 1;

  function truncate(str, maxDecimalDigits) {
    if (str.includes(".")) {
      const parts = str.split(".");
      return parts[0] + "." + parts[1].slice(0, maxDecimalDigits);
    }
    return str;
  }

  const popoverContent = (
    <div>
      <span></span>
    </div>
  );

  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="max-w-md">
          <h1 className="text-4xl mb-8 font-normal text-green-header font-spacemono">
            Let The NFT Auction Begin {">>"}
          </h1>

          <div className="text-lg mb-6">
            We need to coordinate. Onoce all of these ETHBots have been minted, you can proceed to the next level.
          </div>

          <div>
            <Popover content={popoverContent}>
              <Button disabled={false} onClick={goToNextStep}>
                Continue
              </Button>
            </Popover>
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
            <h3 className="font-spacemono text-purple-imgText font-semibold text-lg">ETHBots Statue</h3>

            {/* Button */}
            <Button
              transparent
              loading={mintingToken}
              onClick={() => mintTokenStatue(level)}
              className="border-2 border-green-header text-green-header hover:bg-green-dark-green mb-2"
              padding={10}
            >
              {truncate(statuePrices[level - 1], 4)} ETH
            </Button>
            <span className="text-red-500">(Only {statueLeftover[level - 1]} available)</span>
          </div>

          {/*  Digital ETHBot */}
          <div className="flex flex-col items-center">
            {/* Image Wrapper */}
            <img src={MolochStatue} alt="Digital ETHBot" className="mb-4" />

            {/* Image Title */}
            <h3 className="font-spacemono text-purple-imgText font-semibold text-lg">Digital ETHBot</h3>

            {/* Button */}
            <Button
              transparent
              loading={mintingToken}
              onClick={() => mintTokenBot(level)}
              className="border-2 border-green-header text-green-header hover:bg-green-dark-green mb-2"
              padding={10}
            >
              {truncate(tokenPrices[level - 1], 4)} ETH
            </Button>
            <span className="text-red-500">(Only {tokenLeftover[level - 1]} available)</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuctionOne;
