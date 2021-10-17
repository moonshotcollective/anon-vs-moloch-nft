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
        <h1 id="faq" className="faq-title p-6 ml-12">faq:</h1>
        <div className="w-full">
          <Collapse>
                <Panel
                  header={getTitle("What is the greatest LARP?", 1)}
                  key={getTitle("What is the greatest LARP", 1)}
                  className="faq-panel mx-20"
                  onChange={changePanel}
                  showArrow={false}
                  extra={<img alt="panel arrown up" src={panelArrowUp} className={"w-6"} />}
                >
                  <p className="w-3/4">{"      The Greatest LARP is a multi-level coordination experience.  You'll laugh, you'll cry, maybe you'll share it with your frens.  Most importantly, you'll experience something more meaningful than just another decentralized casino."}</p>
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
                    If you want to read the first edition, <a href="https://gitcoin.co/quadraticlands/mission/ql-lore">Go here</a> .  To experience the 2nd edition, <a href="/get-started">go here</a> .
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
                      Check this blog post out
                    </a> or                     <a href="https://www.youtube.com/watch?v=903tHM4RA9k">
                      Check this podcast out
                    </a>

                  </p>
                </Panel>
                <br />
                <Panel
                  header={getTitle("How do I join the greatest LARP?", 4)}
                  key={getTitle("How do I join the greatest LARP?", 4)}
                  className="faq-panel mx-20"
                  onClick={changePanel}
                  showArrow={false}
                  extra={<img alt="panel arrown up" src={panelArrowUp} className={"w-6"} />}
                >
                  <p className="w-3/4">
                    <a href="/get-started">
                      Click here to join the LARP.
                    </a>

                    Feel free to <a href="https://t.me/joinchat/ekBANXnlwcQ1NzRh"> join the telegram</a> and say hi to the community.  And feel free to tell your friends about the LARP on social media.

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
