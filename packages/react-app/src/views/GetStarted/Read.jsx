import React from "react";
import { Button } from "../../themed-components";
import PosterCover from "../../assets/mint/poster-cover.png";

function Read({ goToNextStep, ...props }) {
  return (
    <>
      <div className="flex flex-1 flex-col mb-10  justify-center">
        <h1 className="text-4xl mb-10 font-normal text-green-header font-spacemono">Level 1 - Moloch wins</h1>

        <div className="text-lg max-w-md mb-6">
          Moloch, the god of coordination failure, continues to attack.  
          <br/>
          <br/>
          His minions manifest themselves in many ways -- climate change, misinformation, survelliance capitalism, nuclear prolieration -- No rational actor in society would chose these outcomes, but for lack of coordination they endure.
          <br/>
          <br/>

          The Greatest LARP is the battle to defeat Moloch, and it begins NOW.
        </div>

        <div>
          <Button
          onClick={() => {
            window.open("https://www.dropbox.com/s/otimdyi8emwbrjh/GC-02-ALT-092721-DIGI.pdf?dl=0");
            document.getElementById('continue').remove();
            document.getElementById('continue2').classList.remove('hidden');

          }}
          >Read</Button>
          <Button id="continue2" className="ml-4 hidden" onClick={goToNextStep}>
            Continue Mission
          </Button>
          <Button id="continue" className="ml-4" disabled="disabled" onClick={goToNextStep}>
            Continue Mission
          </Button>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <div className="h-full w-64 relative">
          <img src={PosterCover} alt="read the latest edition" />
          <div className="absolute top-0 h-full w-full bg-purple-overlay bg-opacity-70 flex flex-col justify-between items-center py-10">
            <div className="px-8">
              <p className="font-spacemono text-white text-xl">Read the comic</p>
              <p className="text-green-teal">Moloch is winning, but he doesnt have to be.  We can stop him, if we can coordinate.</p>
            </div>
            <div>
              <Button className="border-2 border-white bg-transparent text-white" transparent
          onClick={() => {
            window.open("https://www.dropbox.com/s/otimdyi8emwbrjh/GC-02-ALT-092721-DIGI.pdf?dl=0");
          }}

              >
                Read Comic
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Read;
