import React from "react";
import { Image, Space } from "antd";
import navbarheadlogo from "../assets/navbarheadlogo.svg";
import { Account } from "../components";

export default function Nav({
  faucetHint,
  address,
  localProvider,
  userSigner,
  mainnetProvider,
  price,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
  networkDisplay,
}) {
  return (
    <div class="flex flex-row p-5 w-full">
      <a href="/" target="_blank" rel="noopener noreferrer" className="float-left">
        <Image preview={false} className="h-24" src={navbarheadlogo} />
      </a>
      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a href="/" class="mr-10 hover:text-gray-900 text-green-dark-green">
          Explore Editions
        </a>
        <a href="/" class="mr-10 hover:text-gray-900 text-green-dark-green">
          How it Works?
        </a>
        <a href="/" class="mr-10 hover:text-gray-900 text-green-dark-green">
          Community
        </a>
        <a href="/" class="mr-10 hover:text-gray-900 text-green-dark-green">
          About
        </a>
      </nav>
      <Space>
        <span>{faucetHint}</span>
        <Account
          address={address}
          localProvider={localProvider}
          userSigner={userSigner}
          mainnetProvider={mainnetProvider}
          price={price}
          web3Modal={web3Modal}
          loadWeb3Modal={loadWeb3Modal}
          logoutOfWeb3Modal={logoutOfWeb3Modal}
          blockExplorer={blockExplorer}
          extra={networkDisplay}
        />
      </Space>
    </div>
  );
}
