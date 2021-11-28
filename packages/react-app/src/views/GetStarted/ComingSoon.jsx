import React from "react";
import Countdown from "react-countdown";
import classnames from "classnames";
import { Button } from "../../themed-components";
import ReactPlayer from 'react-player'

function ComingSoon({ goToNextStep }) {
  const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    const largeTextClass = "text-5xl";

    return (
      <>
        <div class="text-center">
          <h1 className="text-2xl text-green-header font-spacemono underline font-bold">
            Countdown to the final showdown auction
          </h1>
          <div className="flex flex-row items-end lg:ml-20">
            {/* days */}
            <div className="flex flex-col items-center">
              <span className="text-gray-400 font-spacemono">days</span>
              <h2 className={classnames("mt-4 m-0 p-0 font-spacemono", largeTextClass)}>{days}</h2>
            </div>
            <span className={classnames(largeTextClass, "mx-5")}>:</span>
            {/* hours */}
            <div className="flex flex-col items-center">
              <span className="text-gray-400 font-spacemono">hours</span>
              <h2 className={classnames("mt-4 m-0 p-0 font-spacemono", largeTextClass)}>{hours}</h2>
            </div>
            <span className={classnames(largeTextClass, "mx-5")}>:</span>
            {/* minutes */}
            <div className="flex flex-col items-center">
              <span className="text-gray-400 font-spacemono">minutes</span>
              <h2 className={classnames("mt-4 m-0 p-0 font-spacemono", largeTextClass)}>{minutes}</h2>
            </div>
            <span className={classnames(largeTextClass, "mx-5")}>:</span>
            {/* seconds */}
            <div className="flex flex-col items-center">
              <span className="text-gray-400 font-spacemono">seconds</span>
              <h2 className={classnames("mt-4 m-0 p-0 font-spacemono", largeTextClass)}>{seconds}</h2>
            </div>
          </div>
        </div>
        <div className='player-wrapper mt-20'>
          <ReactPlayer
          url= 'videos/botVideoComingSoon.mp4'
          width='100%'
          height='100%'
          controls = {true}
          />
        </div>
        <div class="w-3/4 mx-auto text-center">
          <p class="leading-relaxed text-lg mt-20 text-3xl font-bold text-green-header font-spacemono">
            Join us for the kickoff party Dec 6!
          </p>
          <Button disabled={!completed} onClick={goToNextStep}>
            Join here
          </Button>
          <p>(You want to do it!)</p>
        </div>
       
      </>
    );
  };

  return (
    <div className="grid grid-cols-1">
      <div className="flex flex-wrap">

        <div className="flex flex-wrap w-1/2 p-20 sm:p-6">
          <div className="max-w-full flex flex-col ml-6">
            <h1 className="text-2xl font-normal text-green-header font-spacemono underline font-bold">
              We've come a long way together
            </h1>
            <ul className="list-disc ml-6 text-base font-normal font-spacemono">
              <li className="text-orange-final">We learned the Anon/Moloch lore - Level 1</li>
              <li className="text-green-header">We've summoned 200 hero EthBots - Level 2</li>
              <li className="text-purple-final">We've captured 200 mini-Molochs - Level 3</li>
            </ul>
            <p className="ml-6">[raising $330,000 for public goods so far]</p>
            <br/>
            <p className="text-5xl font-normal text-purple-final font-spacemono font-bold">
              Now we must beat the final Moloch boss together.
            </p>
            <h1 className="mt-6 mb-6 text-2xl font-normal text-green-header font-spacemono underline font-bold">
              It's all coordination
            </h1>
            <p className="text-lg font-normal text-green-header font-spacemono mt-4">
              On December 6th, the <span className="text-purple-final font-bold" >ETHBot vs. Moloch</span> <span className="text-orange-final font-bold" >GitcoinParty Crowdfund </span> will open. By crowdfunding 50 ETH as a community, we will hit the reserve,
              guaranteeing a chance for ETHBot to take out Moloch once and for all.
            </p>
            <p className="text-lg font-normal text-green-header font-spacemono mt-2">
              By participating in the winning <span className="font-bold" >GitcoinParty Crowdfund</span> you will own a percentage of the <span className="font-bold" >1 of 1</span> <span className="text-orange-final font-bold" >Final Battle NFT</span>.
            </p>
            <p className="text-lg font-normal text-green-header font-spacemono mt-2">
              All proceeds fund public goods (Always has been).
            </p>
          </div>
        </div>

         <div className="flex flex-wrap w-1/2 p-20 sm:p-6">
            <Countdown date={1638820800000} renderer={countdownRenderer} />
         </div>
      </div>
    </div>
  );
}

export default ComingSoon;
