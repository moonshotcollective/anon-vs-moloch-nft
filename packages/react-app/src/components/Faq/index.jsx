import React, { useState } from "react";
import { Collapse } from "antd";

import "./Faq.css";

import panelArrowUp from "../../assets/panel-arrow-up.png";

const { Panel } = Collapse;

const getTitle = (title, index) => {
  const num = index;
  return `#${num} ${title}  `;
};

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);

  const changePanel = () => {
    console.log('checkout ', isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-w-full">
      <div className="faq-group-overlay grid grid-flow-row auto-rows-max md:auto-rows-min">
        <h1 className="faq-title p-6 ml-12">faq:</h1>
        <div className="w-full">
          <Collapse>
                <Panel
                  header={getTitle("What is the greatest LARP", 1)}
                  key={getTitle("What is the greatest LARP", 1)}
                  className="faq-panel mx-20"
                  onChange={changePanel}
                  showArrow={false}
                  extra={<img alt="panel arrown up" src={panelArrowUp} className={"w-6"} />}
                >
                  <p className="w-3/4">{"Youll see on October 2021"}</p>
                </Panel>
                <br />
                <Panel
                  header={getTitle("I heard there was a ETHBot vs Moloch comic. Where can I see it?", 2)}
                  key={getTitle("I heard there was a ETHBot vs Moloch comic. Where can I see it?", 2)}
                  className="faq-panel mx-20"
                  onClick={changePanel}
                  showArrow={false}
                  extra={<img alt="panel arrown up" src={panelArrowUp} className={"w-6"} />}
                >
                  <p className="w-3/4">
                    <a href="https://gitcoin.co/quadraticlands/mission/ql-lore">Go here</a> 
                  </p>
                </Panel>
                <br />
                <Panel
                  header={getTitle("What is meditations on moloch?", 3)}
                  key={getTitle("What is meditations on moloch?", 3)}
                  className="faq-panel mx-20"
                  onClick={changePanel}
                  showArrow={false}
                  extra={<img alt="panel arrown up" src={panelArrowUp} className={"w-6"} />}
                >
                  <p className="w-3/4">
                    <a href="https://slatestarcodex.com/2014/07/30/meditations-on-moloch/">
                      Check this out
                    </a>
                  </p>
                </Panel>
                <br />
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Faq;
