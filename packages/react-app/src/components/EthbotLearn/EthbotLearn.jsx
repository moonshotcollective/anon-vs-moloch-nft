import React, { useState } from "react";

import btnLeft from "../../assets/EthbotLearn/btnLeft.png";
import btnRight from "../../assets/EthbotLearn/btnRight.png";

import "./EthbotLearn.css";

const botMap = [
	{botName: 'EthBot', description: 'Lorem Ipsum 0 '},
	{botName: 'Gitcoin Bot', description: 'Lorem Ipsum 1'},
	{botName: 'Kraken Bot', description: 'Lorem Ipsum 2'},
	{botName: 'Balancer Bot', description: 'Lorem Ipsum 3'},
	{botName: 'Metamask Bot', description: 'Lorem Ipsum 4'},
	{botName: 'Yearn Bot', description: 'Lorem Ipsum 5'},
];


export default function EthbotLearn() {
	const [botNum, setBotNum] = useState(0);

	const decreaseBot = () => {
		console.log('botnum down ', botNum);
		const temp = botNum - 1;
		if (botNum > 0) {
			setBotNum(temp);
		}
	};

	const increaseBot = () => {
		console.log('botnum up ', botNum);
		if (botNum < 5) {
			const temp = botNum + 1;
			setBotNum(temp);
		}
	};

	return (
	<div className={`bg-bot${botNum+1} bg-auto bg-no-repeat bg-contain w-full min-h-ethbotlearn`}>
		<div className="w-3/4 p-10 mt-30">
			<h2 className="sm:text-6xl text-7xl mb-2 font-medium text-green-teal font-spacemono">Learn More about EthBot</h2>
			<p className="mb-2 leading-relaxed w-1/2 mt-10 text-xl">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.</p>
			<div className="flex mt-10">
				<button className="inline-flex text-white bg-green-teal border-0 px-10 py-1 rounded text-lg font-spacemono">Read</button>
			</div>
		</div>

		<div className="flex flex-row ethbotlearn-buttons">
			<button className="bg-green-teal rounded shadow h-10 align-middle" onClick={decreaseBot}>
				<img className="z-50" alt="hero" src={btnLeft}/>
			</button>
			<div class="text-center">
				<p className="ethbotlearn-botName">{botMap[botNum].botName}</p>
				<p className="ethbotlearn-botDescription">{botMap[botNum].description}</p>
			</div>
			<button className="bg-green-teal rounded shadow h-10" onClick={increaseBot}>
				<img className="z-50" alt="hero" src={btnRight}/>
			</button>
		</div>

	</div>
	)
}
