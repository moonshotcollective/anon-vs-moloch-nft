import React from "react";
import { Button } from "../../themed-components";
import PosterCover from "../../assets/mint/poster-cover.png";

function Prologue({ goToPrevStep, goToNextStep, ...props }) {
  return (
    <>
      <div className="flex flex-2 flex-col mb-10  justify-center">
          <h1 className="text-4xl mb-4 font-normal text-green-header font-spacemono">
            ProLogue
          </h1>
          <h1 className="text-2xl mb-8 font-normal text-green-header font-spacemono">
            Big Dreams, ambitious launches, & DAOs - How we got here:
          </h1>

        <div className="text-lg  mb-6">
        <ol>
            <li>
               <strong>2015 </strong>- <a href="https://slatestarcodex.com/2014/07/30/meditations-on-moloch/" target="_blank">Meditations on Moloch</a>, an essay about the rationalist struggle againts coordination failures, published.
            </li>
            <li>
               <strong>2015 </strong>- <a href="https://www.wisdomtree.com/blog/2021-07-15/ethereums-history-from-zero-to-20#:~:text=On%20July%2030%2C%202015%2C%20the,ether%20and%20run%20smart%20contracts.">Ethereum launches</a> 💎
            </li>
            <li>
               <strong>2016 </strong>- "The DAO" Hack 🦹‍♀️
            </li>
            <li>
               <strong>2017 </strong>- ICO Mania 🤪
            </li>
            <li>
               <strong>2018 </strong>- <a href="https://slatestarcodex.com/2014/07/30/meditations-on-moloch/" target="_blank">Meditations on Moloch</a> is read widely within the Ethereum community.  The community is struggling through the long hard bear market. ❄️🧸
            </li>
            <li>
               <strong>2019 February </strong>- MolochDAO, a DAO to fund public goods in the Ethereum community, <a href="https://unchainedpodcast.com/molochdao-could-this-decentralized-autonomous-organization-help-ethereum-scale-faster/">launched</a> by Ameen. 
            </li>
            <li>
               <strong>2019 May </strong>- Joe Lubin, the EF, Vitalik <a href="https://cointelegraph.com/news/vitalik-buterin-joseph-lubin-each-donate-1-000-ether-to-moloch-dao">fund MolochDAO with $1mm</a>. 🪵🔥
            </li>
            <li>
               <strong>2019</strong> - <a href="bots.moonshotcollective.space">MolochDAO evalutes 100 proposals</a>. Interest in the DAO space is reignited!  Crypto Spring is here 🌱.
            </li>
            <li>
               <strong>2020</strong> - <a href="https://www.youtube.com/watch?v=903tHM4RA9k">Podcast about Meditations on Moloch, featuring Ameen & Kevin, published by Bankless</a> 
            </li>
            <li>
               <strong>2020</strong> - DEFI Summer! ☀️🏖💸
            </li>
            <li>
               <strong>2021</strong> - <a href="https://gitcoin.co/quadraticlands/mission/ql-lore">Gitcoin Comic #1 - Ethereum for public goods</a> launched.  (Oh, and <a href="https://gitcoin.co/blog/introducing-gtc-gitcoins-governance-token/">GitcoinDAO</a> and <a href="https://sacks.exchange/">SACKS</a> launches.) 
            </li>
            <li>
               <strong>2021</strong> - <a href="https://newsletter.banklesshq.com/p/know-thy-enemy-coordination-failures">Know thy Enemy: Coordination Failures</a> published in Bankless. 
            </li>
            <li>
               <strong>2020</strong> - NFT Summer! ☀️🏖🎨
            </li>
            <li>
               <strong>2021</strong> - Kevin gives <a href="https://www.youtube.com/watch?v=KpXPym_m_wA">It's all Coordination</a> talk at ETHCC, <a href="https://moonshotcollective.space/">Moonshot Collective</a> launches. 
            </li>
            <li>
               <strong>2021</strong> - Moonshot Collective launches <a href="http://bots.moonshotcollective.space/">Moonshot Bots</a>, <a href="https://decrypt.co/79606/moonshot-bots-nfts-gitcoin-ethereum-grants-1-8-million">raises $2.2m for public goods</a>
            </li>

        </ol>
        </div>
        <a className="font-normal text-green-header" onClick={goToNextStep} href="#"> Forward to Level 1 &gt; &gt;</a>

        <div>
          
        </div>
      </div>

    </>
  );
}

export default Prologue;
