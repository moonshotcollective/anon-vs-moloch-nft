import React, { useEffect, useState } from "react";
import FinalBattle from "../../assets/mint/finalBattle.png";
import { Button } from "../../themed-components";
import { ethers, BigNumber } from "ethers";

function Winning({ goToPrevStep, readContracts, userSigner, address }) {
  const [canView, setCanView] = useState();

  const initialize = async () => {
    let result = 0;
    if (readContracts?.EthBot) {
      const EthBot = (await readContracts.EthBot.balanceOf(address)) || 0;
      result = ethers.utils.formatUnits(BigNumber.from(EthBot), 1).toString();
      if (result > 0) {
        setCanView(true);
        document.getElementById("FINAL_COMIC_LINK")?.classList.remove("hidden");
        document.getElementById("NFT_HOLDER_TG")?.classList.remove("hidden");
      }
    } else if (readContracts?.EthBotStatue) {
      const EthBotStatue = (await readContracts.EthBotStatue.balanceOf(address)) || 0;
      result = ethers.utils.formatUnits(BigNumber.from(EthBotStatue), 1).toString();
      if (result > 0) {
        setCanView(true);
        document.getElementById("FINAL_COMIC_LINK")?.classList.remove("hidden");
        document.getElementById("NFT_HOLDER_TG")?.classList.remove("hidden");
      }
    } else if (readContracts?.MolochBot) {
      const MolochBot = (await readContracts.MolochBot.balanceOf(address)) || 0;
      result = ethers.utils.formatUnits(BigNumber.from(MolochBot), 1).toString();
      if (result > 0) {
        setCanView(true);
        document.getElementById("FINAL_COMIC_LINK")?.classList.remove("hidden");
        document.getElementById("NFT_HOLDER_TG")?.classList.remove("hidden");
      }
    } else if (readContracts?.MolochBotStatue) {
      const MolochBotStatue = (await readContracts.MolochBotStatue.balanceOf(address)) || 0;
      result = ethers.utils.formatUnits(BigNumber.from(MolochBotStatue), 1).toString();
      if (result > 0) {
        setCanView(true);
        document.getElementById("FINAL_COMIC_LINK")?.classList.remove("hidden");
        document.getElementById("NFT_HOLDER_TG")?.classList.remove("hidden");
      }
    } else {
      setCanView(false);
      return;
    }
  };

  useEffect(() => {
    initialize();
  }, [readContracts, address]);

  return (
    <>
      <div className="flex flex-1 flex-col justify-center">
        <div className="mr-16">
          <div class="container px-5 py-10 mx-auto text-center">
            <h1 class="text-4xl font-normal text-green-header font-spacemono leading-relaxed font-bold">
              We Won the Fight Against Moloch!
            </h1>
          </div>

          <div class="container px-5 py-10 mx-auto">
            <div class="flex flex-wrap">
              <div class="p-4 lg:w-1/2">
                <div class="h-full bg-green-light-green bg-opacity-75 px-8 pt-6 pb-6 overflow-hidden relative">
                  <h2 className="font-bold text-4xl mb-3 font-librefranklin">1700+</h2>
                  <div className="text-green-teal">Comic Readers</div>
                </div>
              </div>
              <div class="p-4 lg:w-1/2">
                <div class="h-full bg-green-light-green bg-opacity-75 px-8 pt-6 pb-6 overflow-hidden relative">
                  <h2 className="font-bold text-4xl mb-3 font-librefranklin">$504,790+</h2>
                  <div className="text-green-teal">raised</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <a
              className="hidden bg-green-teal text-white py-3 px-6 rounded text-xl"
              id="NFT_HOLDER_TG"
              padding={10}
              href={process.env.REACT_APP_NFT_HOLDER_TG}
              target="_blank"
              rel="noreferrer"
            >
              Join the GreatestLARP NFT Holder Group
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center">
            <a
              className="hidden bg-green-teal text-white py-3 px-6 rounded text-xl"
              id="FINAL_COMIC_LINK"
              padding={10}
              href={process.env.REACT_APP_FINAL_COMIC_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Read the comic book ending
            </a>
          </div>
          <div className="mt-10 flex">
            <a className="font-normal text-green-header text-lg" onClick={goToPrevStep} href="#">
              &lt;&lt; back
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center relative">
        <img src={FinalBattle} alt="final battle" />
      </div>
    </>
  );
}

export default Winning;
