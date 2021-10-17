import React from "react";
import { EthbotLearn, EthbotProgress, Faq, Footer, ReadComic } from "../components";
import { Button, Nav } from "../themed-components";
import background from "../assets/background.png";


function Home(props) {

  const divStyle = {
    backgroundImage: 'url(' + background + ')',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: '0%',
    backgroundColor: 'black',
  };
  return (
    <div className="Home">
      <Nav {...props} />


      <div className=" items-center justify-center bg-green-dark-green flex flex-col py-20" style={divStyle} >
        <h1 id="h1" className="title-font sm:text-6xl text-5xl mb-4 text-green-teal font-spacemono">
          The <span>GREATEST LARP</span> Has Begun.
        </h1>
        <p className="mb-2 leading-relaxed font-librefranklin text-green-teal text-xl">- An <a href="https://en.wikipedia.org/wiki/Alternate_reality_game" target="_blank">Alternate Reality Game</a> .. </p>
        <p className="mb-2 leading-relaxed font-librefranklin text-green-teal text-xl">- An experiment in networked storytelling..</p>
        <p className="mb-2 leading-relaxed font-librefranklin text-green-teal text-xl">- An ambitious gambit for public goods funding..</p>
        <p className="mb-2 leading-relaxed font-librefranklin text-green-teal text-xl">- A schelling point for the hopeful in a dystopic world...</p>
        <p className="mb-2 leading-relaxed font-librefranklin text-green-teal text-xl">- fair launched at Liscon 2021 by <a href="https://twitter.com/owocki" target="_blank">Kevin Owocki</a>, <a href="https://twitter.com/austingriffith" target="_blank">Austin Griffith</a>, and <a href="http://gitcoindao.com/">GitcoinDAO</a>'s <a href="https://moonshotcollective.space/">Moonshot Collective</a>.</p>
        <div className="surround">
        <p className="mb-8 leading-relaxed font-librefranklin text-white text-5xl">r u rdy, anon?</p>
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
