import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";
import React, { useState } from "react";
import AuctionOne from "./AuctionOne";
import AuctionTwo from "./AuctionTwo";
import FinalBattle from "./FinalBattle";
import Read from "./Read";
import Winning from "./Winning";

// Steps component array
const Steps = [Read, AuctionOne, AuctionTwo, FinalBattle, Winning];

function GetStarted({ tx, readContracts, writeContracts, events, ...props }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [mintingToken, setMintingToken] = useState(false);
  const [buyingStatue, setBuyingStatue] = useState(false);

  const tokenPrices = (useContractReader(readContracts, "GreatestLARP", "tokenPrices") || []).map(v =>
    ethers.utils.formatUnits(v),
  );

  const statuePrices = (useContractReader(readContracts, "GreatestLARP", "statuePrices") || []).map(v =>
    ethers.utils.formatUnits(v),
  );

  const tokenLeftover = (useContractReader(readContracts, "GreatestLARP", "tokenLeftover") || []).map(v =>
    v.toString(),
  );

  const statueLeftover = (useContractReader(readContracts, "GreatestLARP", "statueLeftover") || []).map(v =>
    v.toString(),
  );

  const mintTokenBot = async level => {
    setMintingToken(true);
    try {
      // fetch price for selected level
      const { price } = await readContracts.GreatestLARP.getDetailsForLevelBots(level);
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

  const mintTokenStatue = async level => {
    setMintingToken(true);
    try {
      // fetch price for selected level
      const { price } = await readContracts.GreatestLARP.getDetailsForLevelStatue(level);
      const result = tx(writeContracts.GreatestLARP.requestMintStatue(level, { value: price }), async update => {
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
  console.log(statuePrices);

  const CurrentStepComponent = Steps[currentStep];

  return (
    <>
      {/* <EthbotProgress progress={currentStep} /> */}
      <section className="container flex flex-1 mx-auto my-20">
        <CurrentStepComponent
          goToNextStep={goToNextStep}
          currentStep={currentStep}
          mintTokenBot={mintTokenBot}
          mintTokenStatue={mintTokenStatue}
          tokenLeftover={tokenLeftover}
          statueLeftover={statueLeftover}
          tokenPrices={tokenPrices}
          statuePrices={statuePrices}
          mintingToken={mintingToken}
          buyingStatue={buyingStatue}
        />
      </section>
    </>
  );
}

export default GetStarted;
