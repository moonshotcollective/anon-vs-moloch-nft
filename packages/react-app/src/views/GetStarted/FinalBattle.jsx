import React from "react";
import FinBattle from "../../assets/mint/finalBattle.png";
import { Button } from "../../themed-components";

function FinalBattle({ goToNextStep }) {
  return (
    <>
      <div className="flex flex-1 flex-col justify-center">
        <div className="max-w-md">
          <h1 className="text-4xl mb-8 font-normal text-green-header font-spacemono">
            Open bids for PUBLIC GOODS{" >>"}
          </h1>

          <div className="text-lg mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting .Lorem Ipsum is simply dummy text.
          </div>

          <div>
            {/* Image Title */}
            <h3 className="font-spacemono text-purple-imgText font-semibold text-lg">Final Battle</h3>

            {/* Button */}
            <Button
              transparent
              className="border-2 border-green-header text-green-header hover:bg-green-dark-green mb-2"
              padding={10}
              onClick={() => {
                window.location =
                  "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/51825607130456865052072540421054875649262172737660879203026539353253980667905/";
              }}
            >
              Open Sea Auction
            </Button>
            <div className="text-red-500">(Ultra rare piece)</div>
          </div>
          <div>
            <Button
              onClick={() => {
                window.location = "/";
              }}
            >
              Go Back To Home Page{" "}
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center relative">
        <img src={FinBattle} alt="final battle" />
      </div>
    </>
  );
}

export default FinalBattle;
