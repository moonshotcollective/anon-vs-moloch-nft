import React, { useState, useEffect } from "react";
import FinalBattle from "../../assets/mint/finalBattle.png";
import { Button } from "../../themed-components";

function Winning(props) {
  const [youCanView, setYouCanView] = useState(false);
  const nftCheck = props.events?.nftCheck;
  useEffect(() => {
    if (nftCheck) {
      const ownerArray = Object.keys(nftCheck).map(function (key, index) {
        return nftCheck[key].owner;
      });
      if (props.address && ownerArray?.includes(props.address.toString())) {
        setYouCanView(true);
      }
    }
  }, [nftCheck, props.address]);
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
            <Button
              disabled={!youCanView}
              padding={10}
              onClick={() => {
                if (youCanView) {
                  window.open(
                    "https://www.dropbox.com/sh/u4868yl4r7t9jrn/AABoG-TH9X6PEu_5uI-U3goYa?dl=0&preview=GC-02-091121-PRINT.pdf",
                  );
                }
              }}
            >
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
