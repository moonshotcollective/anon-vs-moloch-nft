import { Image } from "antd";
import React from "react";
import gitcoin from "../../assets/gitcoin.svg";
import group3392712x from "../../assets/group-33927-1@2x.svg";
import telegram from "../../assets/icon-telegram.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-background min-w-full p-5">
      <a href="/">
        <Image preview={false} key="Footer Bot Head" className="footerBotHead align-center" src={group3392712x} />
      </a>
      <div className="flex flex-row p-6">
        <div>
          <a href="https://t.me/joinchat/ekBANXnlwcQ1NzRh" key="discord" className="w-1/4 mx-6">
            <Image preview={false} key="telegram" className="footer-icon" src={telegram} />
          </a>
          <span className="seperator">|</span>
          <a href="https://gitcoin.co" key="gitcoin" className="">
            <Image preview={false} key="gitcoin" className="bbg" src={gitcoin} />
          </a>
        </div>
      </div>
      <div className="text-green-teal text-center">
        OpenSea <a href="https://opensea.io/collection/ethbot-v2">EthBots</a>
      </div>
      <div className="text-green-teal text-center">
        Mainnet Contracts
        <div>
          <a href="https://etherscan.io/address/0x82C7c02a52B75387DB14FA375938496cbb984388">EthBot</a>
        </div>
        <div>
          <a href="https://etherscan.io/address/0x42dCbA5dA33CDDB8202CC182A443a3e7b299dADb">MolochBot</a>
        </div>
        <div>
          <a href="https://etherscan.io/address/0xf80e61279bdc3d02BB9b1887A026F500B203893d">EthBotStatue</a>
        </div>
        <div>
          <a href="https://etherscan.io/address/0xaBC230E044F828e142d116D46762e95a92e4BcE2">MolochBotStatue</a>
        </div>
        <div>
          <a href="https://etherscan.io/address/0x1Ee05530f2BEB59E7D6f2838fCc7D9c9464C253d">GreatesLARP</a>
        </div>
      </div>

      {/* <div className="container flex flex-wrap p-5 justify-center text-wrap">
        <span className="footer-font-v1">Powered by </span>
        <span className="footer-font-v2">
          <a href="https://www.gitcoin.co/">Gitcoin</a>
        </span>

        <span className="footer-font-v1">| Built by </span>
        <span className="footer-font-v2">
          <a href="https://moonshotcollective.space/">Moonshot Collective</a>
        </span>
        <span className="footer-font-v3"> | Directed by</span>
        <span className="footer-font-v3">&nbsp;</span>
        <span className="footer-font-v2">
          <a href="http://www.joshblaylock.com/">Blaylock Comics</a>
        </span>
        <span className="footer-font-v3"> | Illustrated by</span>

        <span className="footer-font-v2">
          <a href="http://www.joshblaylock.com/">Blaylock Comics</a>
        </span>
        <span className="footer-font-v3">&nbsp;</span>
        <span className="footer-font-v3"> | Produced by</span>
        <span className="footer-font-v2">
          <a href="http://www.joshblaylock.com/">Blaylock Comics</a>
        </span>
      </div> */}
    </div>
  );
};

export default Footer;
