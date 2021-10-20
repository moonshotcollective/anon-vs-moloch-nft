import React from "react";
import FinBattle from "../../assets/mint/finalBattle.png";
import { Button } from "../../themed-components";

function FinalBattle({ goToPrevStep, goToNextStep }) {
  return (
    <>
      <div className="mb-8 flex flex-1 flex-col justify-center">
        <div className="max-w-md">
          <a className="font-normal text-green-header" onClick={goToPrevStep} href="#">
            &lt;&lt; back to Level 3
          </a>
          <h1 className="text-4xl mb-4 font-normal text-green-header font-spacemono">Level 4</h1>
          <h1 className="text-2xl mb-8 font-normal text-green-header font-spacemono">The Final Battle {">>"}</h1>

          <div className="text-lg mb-6">
            Moloch has been weakened, and our coordination is as strong as ever. Can Ethereum truly be the substrate for
            human coordination that sets Moloch back for a generation? Will we choose to coordinate? Or will we descend
            into darkness?
            <br />
            <br />
            The Greatest LARP is almost over. We've learned that we can build coordination mechanisms, but at the end of
            the day -- that all coordination is a choice. It's up to you, Anon.
            <br />
          </div>

          <div>
            {/* Image Title */}
            <h3 className="font-spacemono text-purple-imgText font-semibold text-lg">
              The Final Battle is won when this 1/1 NFT is sold.
            </h3>

            {/* Button */}
            <Button
              transparent
              className="border-2 border-green-header text-green-header hover:bg-green-dark-green mb-2"
              padding={10}
              onClick={() => {
                window.open("https://zora.co/collections/zora/5725");
              }}
            >
              View Auction
            </Button>
            <div className="text-red-500">(1/1 Ultra rare piece)</div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center relative">
        <a
          href="https://www.partybid.app/party/0xA2db0A5687F7c1F685e2E62a917b40E3133B3D8E"
          target="_blank"
          rel="noreferrer"
        >
          <img src={FinBattle} alt="final battle" />
        </a>
      </div>
    </>
  );
}

export default FinalBattle;
