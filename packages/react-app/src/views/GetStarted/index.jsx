import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { EthbotProgress } from "../../components";
import AuctionOne from "./AuctionOne";
import AuctionTwo from "./AuctionTwo";
import FinalBattle from "./FinalBattle";
import Read from "./Read";
import Winning from "./Winning";
import { Nav } from "../../themed-components";

// Steps component array
const Steps = [Read, AuctionOne, AuctionTwo, FinalBattle, Winning];

const incrementPercent = "5";

function GetStarted({ tx, readContracts, writeContracts, events, ...props }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [mintingToken, setMintingToken] = useState(false);
  const [mintingStatue, setMintingStatue] = useState(false);
  // const [levelCompleted, setLevelCompleted] = useState(false);

  const tokenLevelDetails = useContractReader(readContracts, "GreatestLARP", "getDetailForTokenLevels");
  const statueLevelDetails = useContractReader(readContracts, "GreatestLARP", "getDetailForStatueLevels");

  console.log(`tokenLevelDetails: `, tokenLevelDetails);
  console.log(`statueLevelDetails: `, statueLevelDetails);

  // working on this
  // useEffect(() => {
  //   if (tokenLeftover >= 297 && statueLeftover >= 2) {
  //     setLevelCompleted(true);
  //   }
  // }, [tokenLeftover, statueLeftover, readContracts]);

  const mintTokenBot = async (level, price) => {
    setMintingToken(true);
    try {
      // fetch price for selected level
      const value = ethers.utils.parseEther(price);
      const result = tx(writeContracts.GreatestLARP.requestMint(level, { value }), async update => {
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
    setMintingToken(false);
  };

  const mintTokenStatue = async (level, price) => {
    setMintingStatue(true);
    try {
      // fetch price for selected level
      const value = ethers.utils.parseEther(price);
      const result = tx(writeContracts.GreatestLARP.requestMintStatue(level, { value }), async update => {
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
      setMintingStatue(false);
    }
    setMintingStatue(false);
  };

  // Proceed to the next UI step
  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const CurrentStepComponent = Steps[currentStep];

  return (
    <>
      <Nav {...props} />
      <EthbotProgress progress={currentStep} />
      <section className="container flex flex-1 mx-auto my-20">
        <CurrentStepComponent
          goToNextStep={goToNextStep}
          currentStep={currentStep}
          mintTokenBot={mintTokenBot}
          mintTokenStatue={mintTokenStatue}
          incrementPercent={incrementPercent}
          mintingToken={mintingToken}
          mintingStatue={mintingStatue}
          tokenLevelDetails={tokenLevelDetails}
          statueLevelDetails={statueLevelDetails}
        />
      </section>
    </>
  );
}

export default GetStarted;
