import React, { useState } from "react";
import { Row, Col } from "antd";
import btnLeft from "../../assets/EthbotLearn/btnLeft.png";
import btnRight from "../../assets/EthbotLearn/btnRight.png";

import "./EthbotLearn.css";

const botMap = [
  { botName: "Prime Bot", description: "Lorem Ipsum" },
  { botName: "Gitcoin Bot", description: "Lorem Ipsum" },
  { botName: "Kraken Bot", description: "Lorem Ipsum" },
  { botName: "EthBot", description: "Lorem Ipsum" },
  { botName: "Balancer Bot", description: "Lorem Ipsum" },
  { botName: "Metamask Bot", description: "Lorem Ipsum" },
  { botName: "Yearn Bot", description: "Lorem Ipsum" },
];

export default function EthbotLearn() {
  const [botNum, setBotNum] = useState(0);

  const decreaseBot = () => {
    console.log("botnum down ", botNum);
    const temp = botNum - 1;
    if (botNum > 0) {
      setBotNum(temp);
    }
  };

  const increaseBot = () => {
    console.log("botnum up ", botNum);
    if (botNum < 6) {
      const temp = botNum + 1;
      setBotNum(temp);
    }
  };

  const interior = (
    <>
      <Row className="px-10">
        <Col span={18}>
          <h2 className="sm:text-5xl lg:text-7xl xl:text-7xl mb-2 font-medium text-green-teal font-spacemono">
            Learn More about EthBot
          </h2>
          <p className="mb-2 leading-relaxed w-1/2 lg:mt-10 text-xl">
            Copper mug try-hard pitchfork pour-over freegan.
          </p>
          <div className="flex sm:mt-2 lg:mt-10">
            <button className="inline-flex text-white bg-green-teal border-0 px-10 py-1 rounded text-lg font-spacemono">
              Read
            </button>
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
