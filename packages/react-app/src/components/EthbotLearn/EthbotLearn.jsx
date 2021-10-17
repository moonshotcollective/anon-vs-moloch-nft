import React, { useState } from "react";
import { Row, Col } from "antd";
import btnLeft from "../../assets/EthbotLearn/btnLeft.png";
import btnRight from "../../assets/EthbotLearn/btnRight.png";

import "./EthbotLearn.css";

const botMap = [
  { botName: "Prime Bot", description: "The bot of all bots. \nThis mecha is what we get when all the communites combine their powers." },
  { botName: "Gitcoin Bot", description: "This mecha's superpower is quadratic coordination." },
  { botName: "Kraken Bot", description: "This mecha is powerful!  With 8 legs and the capacity to fund public goods, it is a powerful weapon against Moloch." },
  { botName: "EthBot", description: "This mecha's power is creating coordination between all mechas.  Superpower: A transparent, immutable, programmable, global substrate for any and all coordination - including the fight against moloch" },
  { botName: "Balancer Bot", description: "The Balancer mecha provides liquidity to all of the other bots, a strong force in the fight against Moloch." },
  { botName: "Metamask Bot", description: "This friendly fox mecha makes it easy for Anon to communicate with the other bots." },
  { botName: "Yearn Bot", description: "One of the most powerful mechas, the highly engaged Yearn mecha can provide new innovative ways to fight moloch on the regulatr." },
];

export default function EthbotLearn() {
  const [botNum, setBotNum] = useState(0);

  const decreaseBot = () => {
    console.log("botnum down ", botNum);
    const temp = botNum - 1;
    if (botNum > 0) {
      setBotNum(temp);
    } else {
      setBotNum(5);
    }
  };

  const increaseBot = () => {
    console.log("botnum up ", botNum);
    if (botNum < 6) {
      const temp = botNum + 1;
      setBotNum(temp);
    } else {
      setBotNum(0);
    }
  };

  const interior = (
    <>
      <Row id="heroes" className="px-10">
        <Col span={18}>
          <h2 className="sm:text-5xl lg:text-7xl xl:text-7xl mb-2 font-medium text-green-teal font-spacemono">
            Meet your Heroes.
          </h2>
          <p className="mb-2 leading-relaxed w-1/2 lg:mt-10 text-xl">
            These mechas have been created by the Ethereum community to fight Moloch - the malign God of Coordination Failure and the reason we can't have nice things.
          </p>
          <div className="flex sm:mt-2 lg:mt-10">

          </div>
        </Col>
        <Col span={8} offset={8}></Col>
      </Row>
      <div className="float-right ethbotlearn-buttons">
        <div className="flex flex-row">
          <button
            className="bg-green-teal rounded shadow lg:h-10 md:h-5 md:h-3 align-middle mr-2"
            onClick={decreaseBot}
          >
            <img className="z-50" alt="hero" src={btnLeft} />
          </button>
          <div class="text-center">
            <p className="ethbotlearn-botName">{botMap[botNum].botName}</p>
            <p className="ethbotlearn-botDescription">{botMap[botNum].description}</p>
          </div>
          <button className="bg-green-teal rounded shadow lg:h-10 md:h-5 md:h-3 ml-2" onClick={increaseBot}>
            <img className="z-50" alt="hero" src={btnRight} />
          </button>
        </div>
      </div>
    </>
  );

  const classNumber = botNum <= 6 ? botNum + 1 : 1;

  return (
    <>
      <div className={`bg-bot${classNumber} bg-no-repeat bg-contain w-full ethbotlearn-height`}>{interior}</div>
    </>
  );
}
