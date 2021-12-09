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
      }
    } else if (readContracts?.EthBotStatue) {
      const EthBotStatue = (await readContracts.EthBotStatue.balanceOf(address)) || 0;
      result = ethers.utils.formatUnits(BigNumber.from(EthBotStatue), 1).toString();
      if (result > 0) {
        setCanView(true);
        document.getElementById("FINAL_COMIC_LINK")?.classList.remove("hidden");
      }
    } else if (readContracts?.MolochBot) {
      const MolochBot = (await readContracts.MolochBot.balanceOf(address)) || 0;
      result = ethers.utils.formatUnits(BigNumber.from(MolochBot), 1).toString();
      if (result > 0) {
        setCanView(true);
        document.getElementById("FINAL_COMIC_LINK")?.classList.remove("hidden");
      }
    } else if (readContracts?.MolochBotStatue) {
      const MolochBotStatue = (await readContracts.MolochBotStatue.balanceOf(address)) || 0;
      result = ethers.utils.formatUnits(BigNumber.from(MolochBotStatue), 1).toString();
      if (result > 0) {
        setCanView(true);
        document.getElementById("FINAL_COMIC_LINK")?.classList.remove("hidden");
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
          <h1 className="text-4xl mb-8 font-normal text-green-header font-spacemono">Winning</h1>

          <div className="text-lg mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text.
          </div>

          <div className="grid gap-4 grid-cols-2">
            <div className="flex items-center bg-green-light-green py-8 px-4">
              <div>
                <h2 className="font-bold text-4xl mb-3 font-librefranklin">10,237+</h2>
                <div className="text-green-teal">Comic Readers</div>
              </div>
            </div>
            <div className="flex items-center bg-green-light-green py-8 px-4">
              <div>
                <h2 className="font-bold text-4xl mb-3 font-librefranklin">$X,00mm</h2>
                <div className="text-green-teal">raised</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center">
            {/* Button */}
            <Button className="hidden" id="FINAL_COMIC_LINK" padding={10} href={process.env.REACT_APP_FINAL_COMIC_LINK}>
              Read the comic book ending
            </Button>
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
