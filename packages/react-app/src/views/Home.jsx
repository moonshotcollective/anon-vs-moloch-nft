import React from "react";
import { EthbotLearn, EthbotProgress, Faq, Footer, ReadComic } from "../components";
import { Button, Nav } from "../themed-components";

function Home(props) {
  return (
    <div className="Home">
      <Nav {...props} />

      <div className=" items-center justify-center bg-green-dark-green flex flex-col py-20">
        <h1 className="title-font sm:text-6xl text-5xl mb-4 text-green-teal font-spacemono">
          The <span>Greatest Larp</span> Has Begun.
        </h1>
        <p className="mb-4 leading-relaxed font-librefranklin text-green-teal text-xl">A new Alternate Reality Game brought to you by <a href="https://twitter.com/owocki" target="_blank">Kevin Owocki</a>, <a href="https://twitter.com/austingriffith" target="_blank">Austin Griffith</a>, and <a href="http://gitcoindao.com/">GitcoinDAO</a>'s <a href="https://moonshotcollective.space/">Moonshot Collective</a>.</p>
        <p className="mb-8 leading-relaxed font-librefranklin text-white text-3xl">Are You Ready, Anon?</p>
        <Button
          onClick={() => {
            window.location = "/get-started";
          }}
          className="text-white bg-green-teal border-0 py-2 px-6 rounded text-lg font-spacemono"
        >
          Join the LARP
          {/* <a className="text-white hover:text-gray-900" href="/get-started">Join us on this fight</a> */}
        </Button>
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
