import { Button, Image, PageHeader, Space } from "antd";
import React from "react";
import navbarheadlogo from "../assets/navbarheadlogo.svg";
import { Account, EthbotLearn, EthbotProgress, Faq, Footer, ReadComic } from "../components";

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
      <PageHeader
        title={
          <a href="/" target="_blank" rel="noopener noreferrer" style={{ float: "left" }} className="navbar-title">
            <Image preview={false} className="h-24 float-left" src={navbarheadlogo} />
          </a>
        }
        className="bg-white"
        extra={[
          <Space>
            <h3>Explore Editions</h3>
            <h3>How it Works?</h3>
            <h3>Community</h3>
            <h3>About</h3>
          </Space>,
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
          </Space>,
        ]}
      />
      <div className="min-w-full intro-background bg-green-dark-green">
        <div className="space-y-6 infront m-8 pb-8">
          <h1 className="infront justify-center text-center text-5xl relative mt-10 text-green-teal font-spacemono">
            The Greatest Larp has begun.
          </h1>
          <div className="relative justify-center mx-2 text-center intro-info absolute text-2xl text-white">
            Are You Ready?
          </div>
          <Button className="bannertop-twitterfollowbutton">
            <div className="bannertop-joinus float-right">Join us in the fight</div>
          </Button>
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
