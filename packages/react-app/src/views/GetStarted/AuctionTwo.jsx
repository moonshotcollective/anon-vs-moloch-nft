import React from "react";
import DigitalMoloch from "../../assets/mint/digitalMoloch.png";
import PhysicalMoloch from "../../assets/mint/physicalMoloch.png";
import { Button } from "../../themed-components";
import { Popover } from "antd";
import { ethers } from "ethers";

const getNewPrice = (price, incrementPercent) => {
  const addition = price.div("100").mul(incrementPercent);
  const newPrice = price.add(addition);
  return ethers.utils.formatUnits(newPrice).toString();
};

function AuctionTwo({
  goToNextStep,
  mintingToken,
  mintingStatue,
  mintTokenBot,
  mintTokenStatue,
  tokenLevelDetails,
  statueLevelDetails,
  incrementPercent,
}) {
  const level = 2;
  const levelKey = level - 1;

  const [_tokenPrice, _tokenThreshold, _tokenTotalSupply, _lastMintedToken, _tokenLeftover] =
    tokenLevelDetails[levelKey];
  const [_statuePrice, _statueThreshold, _statueTotalSupply, _lastMintedStatue, _statueLeftover] =
    statueLevelDetails[levelKey];

  // prices
  const tokenPrice = getNewPrice(_tokenPrice, incrementPercent);
  const statuePrice = getNewPrice(_statuePrice, incrementPercent);

  // last Minted ID
  const lastMintedToken = _lastMintedToken.toString();
  const lastMintedStatue = _lastMintedStatue.toString();

  // leftovers
  const tokenLeftover = _tokenLeftover.toString();
  const statueLeftover = _statueLeftover.toString();

  // total Supply
  const totalTokenSupply = _tokenTotalSupply.toString();
  const totalStatueSupply = _statueTotalSupply.toString();

  // threshold
  const tokenThreshold = _tokenThreshold.toString();
  const statueThreshold = _statueThreshold.toString();

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
              loading={mintingStatue}
              disabled={lastMintedStatue === totalStatueSupply}
              onClick={() => mintTokenStatue(level, statuePrice)}
              className="border-2 border-green-header text-green-header hover:bg-green-dark-green mb-2"
              padding={10}
            >
              {truncate(statuePrice, 4)} ETH
            </Button>
            <span className="text-red-500">(Only {statueLeftover} available)</span>
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
              disabled={lastMintedToken === totalTokenSupply}
              onClick={() => mintTokenBot(level, tokenPrice)}
              className="border-2 border-green-header text-green-header hover:bg-green-dark-green mb-2"
              padding={10}
            >
              {truncate(tokenPrice, 4)} ETH
            </Button>
            <span className="text-red-500">(Only {tokenLeftover} available)</span>
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
            <Popover content={popoverContent}>
              <Button
                disabled={
                  parseInt(tokenThreshold) > parseInt(lastMintedToken) ||
                  parseInt(statueThreshold) > parseInt(lastMintedStatue)
                }
                onClick={goToNextStep}
              >
                Continue
              </Button>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuctionTwo;
