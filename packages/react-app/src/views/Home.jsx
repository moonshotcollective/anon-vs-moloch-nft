import { Image, Space } from "antd";
import React from "react";
import navbarheadlogo from "../assets/navbarheadlogo.svg";
import { Account, EthbotLearn, EthbotProgress, Faq, Footer, ReadComic } from "../components";
import { Button } from "../themed-components";

function Home({
  faucetHint,
  faucetAvailable,
  address,
  localProvider,
  userSigner,
  mainnetProvider,
  price,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
  gasPrice,
  networkDisplay,
  ...props
}) {
  return (
    <div className="Home">
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
      <div className="flex py-24 items-center justify-center bg-green-dark-green">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-6xl text-5xl mb-4 text-green-teal font-spacemono">
            The Greatest Larp has begun.
          </h1>
          <p className="mb-8 leading-relaxed font-librefranklin text-white">Are You Ready?</p>
          <div className="flex justify-center">
            <Button
              onClick={() => {
                window.location = "/get-started";
              }}
              className="inline-flex text-white bg-green-teal border-0 py-2 px-6 rounded text-lg font-spacemono"
            >
              Join us on this fight
              {/* <a className="text-white hover:text-gray-900" href="/get-started">Join us on this fight</a> */}
            </Button>
          </div>
        </div>
      </div>
      {/* A progress attribute can be passed to show different stages of funding */}
      <EthbotProgress />
      <ReadComic />
      <EthbotLearn />

      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
