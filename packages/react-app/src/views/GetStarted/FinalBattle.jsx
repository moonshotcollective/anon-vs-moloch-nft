import React from "react";
import { Button } from "../../themed-components";
import FinalBattle from "../../assets/mint/finalBattle.png";

function AuctionOne(props) {
  return (
    <>
      <div className="flex flex-1 flex-col justify-center">
        <div className="max-w-md">
          <h1 className="text-4xl mb-8 font-normal text-green-header font-librefranklin">
            Open bids for PUBLIC GOODS>>
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
            >
              0.01 ETH
            </Button>
            <div className="text-red-500">(Ultra rare piece)</div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center relative">
        <img src={FinalBattle} alt="final battle" />
      </div>
    </>
  );
}

export default AuctionOne;
