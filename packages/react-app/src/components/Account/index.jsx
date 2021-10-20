import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import React from "react";
import Address from "../Address";
import Balance from "../Balance";
import "./Account.css";
// import Wallet from "./Wallet";

import connectWallet from "../../assets/connect-wallet.svg";

/*
  ~ What it does? ~

  Displays an Address, Balance, and Wallet as one Account component,
  also allows users to log in to existing accounts and log out

  ~ How can I use? ~

  <Account
    address={address}
    localProvider={localProvider}
    userProvider={userProvider}
    mainnetProvider={mainnetProvider}
    price={price}
    web3Modal={web3Modal}
    loadWeb3Modal={loadWeb3Modal}
    logoutOfWeb3Modal={logoutOfWeb3Modal}
    blockExplorer={blockExplorer}
  />

  ~ Features ~

  - Provide address={address} and get balance corresponding to the given address
  - Provide localProvider={localProvider} to access balance on local network
  - Provide userProvider={userProvider} to display a wallet
  - Provide mainnetProvider={mainnetProvider} and your address will be replaced by ENS name
              (ex. "0xa870" => "user.eth")
  - Provide price={price} of ether and get your balance converted to dollars
  - Provide web3Modal={web3Modal}, loadWeb3Modal={loadWeb3Modal}, logoutOfWeb3Modal={logoutOfWeb3Modal}
              to be able to log in/log out to/from existing accounts
  - Provide blockExplorer={blockExplorer}, click on address and get the link
              (ex. by default "https://etherscan.io/" or for xdai "https://blockscout.com/poa/xdai/")
*/

export default function Account({
  address,
  userSigner,
  localProvider,
  mainnetProvider,
  price,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
  isOwner,
  width,
  extra,
}) {
  function isValidAddress(address) {
    return address && address !== "0x0000000000000000000000000000000000000000";
  }

  const menu = (
    <Menu>
      <Menu.ItemGroup key="1">
        {isValidAddress(address) ? <Balance address={address} provider={localProvider} price={price} /> : ""}
      </Menu.ItemGroup>
      <Menu.ItemGroup key="2">
        <a key="logoutbutton" size="medium" onClick={logoutOfWeb3Modal}>
          <LogoutOutlined />
          {` Logout`}
        </a>
      </Menu.ItemGroup>
    </Menu>
  );

  const modalButtons = [];
  if (web3Modal) {
    if (web3Modal.cachedProvider) {
      modalButtons.push(
        <div key="first">
          {isValidAddress(address) ? (
            <>
              <Dropdown.Button block ghost overlay={menu} icon={<DownOutlined />} trigger="click" size={"large"}>
                <Address
                  address={address}
                  ensProvider={mainnetProvider}
                  blockExplorer={blockExplorer}
                  blockieSize={10}
                  extra={extra}
                />
              </Dropdown.Button>
            </>
          ) : (
            ""
          )}
        </div>,
      );
    } else {
      modalButtons.push(
        <Button
          key="loginbutton"
          id="navbutton"
          size="small"
          onClick={loadWeb3Modal}
          shape="round"
          className="float-right"
        >
          <img src={connectWallet} alt="Wallet Icon" />
        </Button>,
      );
    }
  }

  return <div>{modalButtons}</div>;
}
