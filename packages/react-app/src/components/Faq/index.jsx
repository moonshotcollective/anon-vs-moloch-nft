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
                  <p className="w-3/4">
                  <a href="https://en.wikipedia.org/wiki/Live_action_role-playing_game" target="_blank"> LARPing</a> or Live-action-role-playing, is a common activity online for maby.  LARPing is the face we put on on social media.  LARPing is the avatar we wear in the metaverse.  LARPing is posting instagram photos of your life's highlight reel.  We're already LARPing for much of our days, so if we're all going to LARP- why not join the Greatest LARP?
                  <br/>
                  <br/>
                 The Greatest LARP is a multi-level coordination experience.  On each level, you and your frens will mint a series of NFTs.  Only by coordinating can we beat the final boss, Moloch.  All proceeds go to public goods of course.
                  <br/>
                  <br/>
                   You'll laugh, you'll cry, maybe you'll share it with your frens.  Most importantly, you'll experience something more meaningful than just another decentralized casino.
                                    </p>
                </Panel>
                <br />
                <Panel
                  header={getTitle("Whats the point of the Greatest LARP?", 2)}
                  key={getTitle("Whats the point of the Greatest LARP? ", 2)}
                  className="faq-panel mx-20"
                  onClick={changePanel}
                  showArrow={false}
                  extra={<img alt="panel arrown up" src={panelArrowUp} className={"w-6"} />}
                >
                  <p className="w-3/4">
                  There are two goals we have for the greatest LARP.
                  <br/>
                  1. To spread the good word about coordination technology solving coordination failures.  As deeply, as far and as wide as possible.
                  <br/>
                  2. To raise $$$ for Ethereum public goods.  Proceeds from the NFT auctions will go to public goods.
                  <br/>
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
                    Meditations on Moloch is a blog post that was passed around in the Ethereum community during the 2018-2020 bear market.  There are many of us who believe that fighting Coordination Failures (Moloch) is the deep reason behind Ethereum.  We believe that Ethereum was made to make us free, not rich.  Sometimes its hard to remember which is which, and thats why we build the Greatest LARP.

                    <br/>
                    <br/>
                    Want to read the post that started it all?
                    <br/>
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

                    Feel free to <a href="https://t.me/joinchat/ekBANXnlwcQ1NzRh"> join the telegram</a> and say hi to the community.  <br/><br/>And feel free to tell your friends about the LARP on social media.

                  </p>
                </Panel>
                <Panel
                  header={getTitle("Do all funds raised go to public goods ?", 5)}
                  key={getTitle("Do all funds raised go to public goods ", 5)}
                  className="faq-panel mx-20"
                  onClick={changePanel}
                  showArrow={false}
                  extra={<img alt="panel arrown up" src={panelArrowUp} className={"w-6"} />}
                >
                  <p className="w-3/4">
                  YES -
                  All funds go directly to the <a href="https://gitcoin.co/grants/12/gitcoin-grants-official-matching-pool-fund">Gitcoin Grants Matching Pool</a>, to fund public goods on Gitcoin Grants.
                  <br/>
                  <br/>
                  You can read about the economic model of each level <a href="https://docs.google.com/spreadsheets/d/1__uH78nJVYmpwR1XYzgNbz8hCQjz3ONU6fQcOCex7nE/edit#gid=845255269">here</a>.
                  <br/>
                  <br/>
                  The Moonshot Collective believes that all funds raised should go to fund public goods, but we also believe in paying artists.  Therefore we have agreed to give a bonus to the artists, as follows: 50% of the Physical NFT Auctions, 25% of the digital auctions up to $1mm, 10% thereafter.  We plan to do this out of our workstream budget, no raised funds will be used for this purpose.
                  <br/>
                  </p>
                </Panel>
                <br />
                <Panel
                  header={getTitle("Is this the metaverse? ?", 6)}
                  key={getTitle("Is this the metaverse? ", 6)}
                  className="faq-panel mx-20"
                  onClick={changePanel}
                  showArrow={false}
                  extra={<img alt="panel arrown up" src={panelArrowUp} className={"w-6"} />}
                >
                  <p className="w-3/4">
                    The greateast LARP is an <a href="https://en.wikipedia.org/wiki/Alternate_reality_game">ARG</a>.  An alternate reality game (ARG) is an interactive networked narrative that uses the real world as a platform and employs transmedia storytelling to deliver a story that may be altered by players' ideas or actions.
                    <br/>
                    <br/>
                    We have plans to expand this narrative to multiple forms of media, and to tell the story of Ethereum/coordination to the wider world.  Want to help tell the story?  Want to extend our little corner of the metaverse?  Get in touch <a href="https://t.me/joinchat/ekBANXnlwcQ1NzRh"> on the telegram</a>
                  </p>
                </Panel>
                <br />
                <br />
                <Panel
                  header={getTitle("Where can I read the first edition comic ?", 7)}
                  key={getTitle("Where can I read the first edition comic ?", 7)}
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
                  header={getTitle("Who built this?", 8)}
                  key={getTitle("Who built this", 8)}
                  className="faq-panel mx-20"
                  onClick={changePanel}
                  showArrow={false}
                  extra={<img alt="panel arrown up" src={panelArrowUp} className={"w-6"} />}
                >
                  <p className="w-3/4">
                  <a href="http://gitcoindao.com/">GitcoinDAO</a>'s Rapid Prototyping Workstream <a href="https://moonshotcollective.space/"> The Moonshot Collective</a> was the primary instigator.
                  Thank you especially to
Josh Baylock,

Colton Orr, Kitteh,

Guist, Octavian,

Bliss, Jason, Fahim, Austin Griffith, Kevin Owocki Ryan, Loie,

GitcoinDAO, The Moonshot Collective,

@epheph for eyes on the contract, 

Hodlers of MoonshotBots, Holders of SACKs
                  </p>
                </Panel>

                <br />
                <Panel
                  header={getTitle("How can I get in touch?", 9)}
                  key={getTitle("How can I get in touch?", 9)}
                  className="faq-panel mx-20"
                  onClick={changePanel}
                  showArrow={false}
                  extra={<img alt="panel arrown up" src={panelArrowUp} className={"w-6"} />}
                >
                  <p className="w-3/4">
                    Feel free to <a href="https://t.me/joinchat/ekBANXnlwcQ1NzRh"> join the telegram</a> and say hi.
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
