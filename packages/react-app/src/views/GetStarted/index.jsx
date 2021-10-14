import React, { useState } from "react";
import { useContractReader } from "eth-hooks";
import { EthbotProgress } from "../../components";
import Read from "./Read";
import AuctionOne from "./AuctionOne";
import AuctionTwo from "./AuctionTwo";
import FinalBattle from "./FinalBattle";
import Winning from "./Winning";
import { ethers } from "ethers";

const Steps = [Read, AuctionOne, AuctionTwo, FinalBattle, Winning];

function GetStarted({ tx, readContracts, writeContracts, events, ...props }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [mintingToken, setMintingToken] = useState(false);
  const [buyingStatue, setBuyingStatue] = useState(false);

  const tokenPrices = (useContractReader(readContracts, "GreatestLARP", "tokenPrices") || []).map(v =>
    ethers.utils.formatUnits(v),
  );

  const tokenLeftover = (useContractReader(readContracts, "GreatestLARP", "tokenLeftover") || []).map(v =>
    v.toString(),
  );

  const mintToken = async level => {
    setMintingToken(true);
    try {
      // fetch price for selected level
      const { price } = await readContracts.GreatestLARP.getDetailsForLevel(level);
      const result = tx(writeContracts.GreatestLARP.requestMint(level, { value: price }), async update => {
        console.log("📡 Transaction Update:", update);
        // reset minting
        if (update && (update.status === "confirmed" || update.status === 1)) {
          console.log(" 🍾 Transaction " + update.hash + " finished!");
          console.log(
            " ⛽️ " +
              update.gasUsed +
              "/" +
              (update.gasLimit || update.gas) +
              " @ " +
              parseFloat(update.gasPrice) / 1000000000 +
              " gwei",
          );
        }
      });
      console.log("awaiting metamask/web3 confirm result...", result);
      console.log(await result);
    } catch (err) {
      setMintingToken(false);
    }
  };

  // Proceed to the next UI step
  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  console.log(tokenPrices);

  const CurrentStepComponent = Steps[currentStep];

  return (
    <>
      {/* <EthbotProgress progress={currentStep} /> */}
      <section className="container flex flex-1 mx-auto my-20">
        <CurrentStepComponent
          goToNextStep={goToNextStep}
          currentStep={currentStep}
          mintToken={mintToken}
          tokenLeftover={tokenLeftover}
          tokenPrices={tokenPrices}
          mintingToken={mintingToken}
          buyingStatue={buyingStatue}
        />
      </section>
    </>
  );
}

export default GetStarted;
