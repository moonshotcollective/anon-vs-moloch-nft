import React from "react";
import { Image } from "antd";

import "./Footer.css";
import group3392712x from "../../assets/group-33927-1@2x.svg";
import youtube from "../../assets/icon-youtube.svg";
import twitter from "../../assets/icon-twitter.svg";
import discord from "../../assets/icon-discord.svg";
import telegram from "../../assets/icon-telegram.svg";
import gitcoin from "../../assets/gitcoin.svg";

const Footer = () => {
  return (
    <div className="footer-background min-w-full p-5">
      <a href="/" >
      <Image preview={false} key="Footer Bot Head" className="footerBotHead align-center" src={group3392712x} />
      </a>
      <div className="flex flex-row p-6">
        <a href="https://gitcoin.co" key="gitcoin" className="">
          <Image preview={false} key="gitcoin" className="bbg" src={gitcoin} />
        </a>
        <span className="seperator">
        | 
        </span>
        <a href="https://t.me/joinchat/ekBANXnlwcQ1NzRh" key="discord" className="w-1/4 mx-6">
          <Image preview={false} key="telegram" className="footer-icon" src={telegram} />
        </a>
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
