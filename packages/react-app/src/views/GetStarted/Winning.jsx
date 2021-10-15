import React from "react";
import FinalBattle from "../../assets/mint/finalBattle.png";
import { Button } from "../../themed-components";

function Winning(props) {
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
            <Button padding={10}>Read the comic book ending</Button>
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
