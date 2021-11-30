import React from "react";
import FinBattle from "../../assets/mint/finalBattle.png";
import { Button } from "../../themed-components";
import ReactPlayer from "react-player";

function ComingSoonTwo({ goToPrevStep, goToNextStep }) {
  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-12">
          {/* First Column */}
          <div class="p-12 md:w-1/2 flex flex-col items-start -mt-6">
            <h1 className="sm:text-3xl text-2xl font-normal text-green-header font-spacemono underline font-bold">
              We've come a long way together
            </h1>
            <ul className="list-disc ml-6 text-lg font-normal font-spacemono">
              <li className="text-orange-final">We learned the Anon/Moloch lore - Level 1</li>
              <li className="text-green-header">We've summoned 200 hero EthBots - Level 2</li>
              <li className="text-purple-final">We've captured 200 mini-Molochs - Level 3</li>
            </ul>
            <p className="ml-6">[raising $330,000 for public goods so far]</p>
            <br />
            <p className="mt-10 text-6xl font-normal text-purple-final font-spacemono font-bold leading-relaxed">
              We must coordinate to take down the Final Boss Moloch together!
            </p>
            <div className="mt-10 mb-6">
              <h1 className="text-2xl font-normal text-green-header font-spacemono underline font-bold">
                Own a piece of The Final Boss Moloch NFT
              </h1>
            </div>

            <div className="text-2xl mb-6 font-spacemono font-bold">
              Let's mint the Final Boss Moloch NFT as a community, by crowdfunding the 50 ETH reserve on{" "}
              <span className="underline">Gitcoin Party</span>.
              <br />
              <br />
              Once the reserve is met, a 24 hour auction will start where anyone can win the NFT. If the Gitcoin Party
              wins, each participant will own a part of the NFT, porportional to how much they contributed.
              <br />
            </div>

            <div>
              {/* Image Title */}
              <h3 className="font-spacemono text-orange-final font-semibold text-lg">
                All proceeds fund public goods.
              </h3>
              <br />
              <a className="font-normal text-green-header text-base" onClick={goToPrevStep} href="#">
                &lt;&lt; back
              </a>

              {/* Button */}
              {/* <Button
                transparent
                className="border-2 border-green-header text-green-header hover:bg-green-dark-green mb-2"
                padding={10}
                onClick={() => {
                  window.open("https://zora.co/collections/zora/5725");
                }}
              >
                View Auction
              </Button> */}
            </div>
          </div>

          {/* Second Column */}
          <div class="p-6 md:w-1/2 flex flex-col items-start text-center">
            <div class="flex flex-col text-center w-full mb-2">
              <h2 class="tracking-widest mb-4 text-green-header font-spacemono underline font-bold sm:text-3xl text-2xl">
                Final Boss Moloch Reserve Progress
              </h2>
              <h1 class="sm:text-xl text-xl mb-4 font-spacemono text-orange-final font-semibold">
                When the crowdfund hits 50 ETH, the reserve is met, and a 24 hour auction begins.
              </h1>
              <p class="mx-auto leading-relaxed font-spacemono text-6xl">25/50 ETH Reserve</p>
            </div>
            <div className="player-wrapper">
              <ReactPlayer url="videos/botVideoComingSoon.mp4" width="100%" height="100%" controls={true} />
            </div>
            <div class="w-3/4 mx-auto text-center mt-4">
              <p class="leading-relaxed text-lg mt-20 text-3xl font-bold text-green-header font-spacemono">
                Join The Final Moloch Crowdfund. WAGMI!
              </p>
              {/* <div className="mt-10">
                <a
                  href="https://www.addevent.com/event/Qu10410679"
                  target="_blank"
                  rel="noreferrer"
                  className="font-spacemono bg-orange-final px-8 py-4 text-lg text-white rounded hover:text-white text-base"
                >
                  Join here
                </a>
              </div> */}
              <div className="mt-10">
                <a
                  href="https://www.partybid.app/party/0xA2db0A5687F7c1F685e2E62a917b40E3133B3D8E"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 font-spacemono bg-orange-final px-8 py-4 text-lg text-white rounded hover:text-white text-base"
                >
                  Join Here
                </a>
              </div>
              <p className="mt-4">(You want to do it!)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComingSoonTwo;
