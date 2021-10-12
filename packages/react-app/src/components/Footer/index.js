import React from "react";
import { Image } from "antd";

import "./Footer.css";
import group3392712x from "../../assets/group-33927-1@2x.svg";
import youtube from "../../assets/icon-youtube.svg";
import twitter from "../../assets/icon-twitter.svg";
import mail from "../../assets/icon-mail.svg";
import discord from "../../assets/icon-discord.svg";

const Footer = () => {
  return (
    <div className="footer-background min-w-full p-5">
      <Image preview={false} key="Footer Bot Head" className="footerBotHead align-center" src={group3392712x} />
      <div className="flex flex-row p-6">
        <a href="/" key="youtube" className="w-1/4 mx-6">
				<Image preview={false} key="youtube" className="footer-icon" src={youtube} />
			</a>
        <a href="https://twitter.com/moonshotcollect" key="twitter" className="w-1/4 mx-6">
          <Image preview={false} key="twitter" className="footer-icon" src={twitter} />
        </a>
        <a href="mailto:founders@gitcoin.co" key="mail" className="w-1/4 mx-6">
				<Image preview={false} key="mail" className="footer-icon" src={mail} />
			</a>
        <a href="https://gitcoin.co/discord" key="discord" className="w-1/4 mx-6">
          <Image preview={false} key="discord" className="footer-icon" src={discord} />
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
