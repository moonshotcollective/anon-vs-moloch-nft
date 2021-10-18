import React from "react";
import { Button } from "../../themed-components";
import PosterCover from "../../assets/mint/poster-cover.png";

function Prologue({ goToPrevStep, goToNextStep, ...props }) {
  return (
    <>
      <div className="flex flex-1 flex-col mb-10  justify-center">
          <h1 className="text-4xl mb-4 font-normal text-green-header font-spacemono">
            ProLogue
          </h1>
          <h1 className="text-2xl mb-8 font-normal text-green-header font-spacemono">
            How we got here.
          </h1>

        <div className="text-lg max-w-md mb-6">
          Todo... write about the bankless piece, Meditations on Moloch, MolochDAO.. MoonshotBots Etc
        </div>
        <a className="font-normal text-green-header" onClick={goToNextStep} href="#"> Forward to Level 1 &gt; &gt;</a>

        <div>
          
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <div className="h-full w-64 relative">
        Right Side
        </div>
      </div>
    </>
  );
}

export default Prologue;
