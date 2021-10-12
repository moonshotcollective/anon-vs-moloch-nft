import React from 'react'

import "./EthbotProgress.css";

import fundingbot1 from "../../assets/fundingbot-1.png";
import fundingbot2 from "../../assets/fundingbot-2.png";
import fundingbot3 from "../../assets/fundingbot-3.png";
import fundingbot4 from "../../assets/fundingbot-4.png";
import fundingbot5 from "../../assets/fundingbot-5.png";

import fundingprogress1 from "../../assets/fundingprogress-1.png";
import fundingprogress2 from "../../assets/fundingprogress-2.png";
import fundingprogress3 from "../../assets/fundingprogress-3.png";
import fundingprogress4 from "../../assets/fundingprogress-4.png";
import fundingprogress5 from "../../assets/fundingprogress-5.png";


const fundingBot = [ fundingbot1, fundingbot2, fundingbot3, fundingbot4, fundingbot5];

const fundingProgress = [ fundingprogress1, fundingprogress2, fundingprogress3, fundingprogress4, fundingprogress5];

const index = ({ progress }) => {

  const currentFundingBot = fundingBot[progress] || fundingbot1;
  const currentFundingProgress = fundingProgress[progress] || fundingprogress5;

	return (
  <section class="text-gray-600 body-font bg-green-light-green h-52">
    <div class="flex flex-wrap w-full ">
      <div class="w-2/3 float-left ">
        <img src={currentFundingBot} className="absolute inset-1/3 left-0" alt="bot"/>
        <img src={currentFundingProgress} alt="bot" className="p-2 w-full"/>
      </div>
      <div class="w-2/8 float-right ml-32">
        <h1 class="justify-self-center progress-title wrap">Get the latest Edition</h1>
        <div className="flex">
          <p class="leading-relaxed progress-subtext">Lorem Ipsum</p>
          <div class=" ml-10 flex ">
            <button class="inline-flex text-white bg-green-teal h-12 border-0 py-2 px-6 rounded text-lg font-spacemono">Join now</button>
          </div>
        </div>
      </div>
    </div>
    
  </section>
	)
}

export default index
