import { Popover } from "antd";
import { ethers } from "ethers";
import React from "react";
import EthBot from "../../assets/mint/frontEthBot.png";
import MolochStatue from "../../assets/mint/molochStatue.png";
import { Button } from "../../themed-components";

const getNewPrice = (price, incrementPercent) => {
  const addition = price.div("100").mul(incrementPercent);
  const newPrice = price.add(addition);
  return ethers.utils.formatUnits(newPrice).toString();
};

var uris = [
  "Beneficent_Adam.png",
  "Benign_Cyborg.png",
  "Celestial_Alice.png",
  "Godly_Ilia.png",
  "Heavenly_Lucia.png",
  "Moral_Maria.png",
  "Sainted_Lucia.png",
  "Beneficent_Ava.png",
  "Benign_Doc.png",
  "Celestial_Astor.png",
  "Godly_Kronos.png",
  "Heavenly_Metallo.png",
  "Moral_Marvin.png",
  "Sainted_Lydia.png",
  "Beneficent_Bb-8.png",
  "Benign_Elle.png",
  "Celestial_Atom.png",
  "Godly_Maria.png",
  "Heavenly_Piper.png",
  "Moral_Motoko.png",
  "Sainted_Marcus.png",
  "Beneficent_Casella.png",
  "Benign_Galaxina.png",
  "Celestial_Avery.png",
  "Godly_Nuke.png",
  "Heavenly_Qrio.png",
  "Moral_Optimus.png",
  "Sainted_Mukuro.png",
  "Beneficent_Garth.png",
  "Benign_Genghis.png",
  "Celestial_Bishop.png",
  "Godly_Piper.png",
  "Heavenly_Rachael.png",
  "Moral_Qrio.png",
  "Sainted_Ro-man,.png",
  "Beneficent_Gigan.png",
  "Benign_Irona.png",
  "Celestial_Dolores.png",
  "Godly_Robotman.png",
  "Heavenly_Robot.png",
  "Moral_Samantha.png",
  "Sainted_Robots.png",
  "Beneficent_Irona.png",
  "Benign_Jinx.png",
  "Celestial_Galaxina.png",
  "Godly_Rom.png",
  "Heavenly_Rom.png",
  "Moral_Shakey.png",
  "Sainted_Shakey.png",
  "Beneficent_Kampf.png",
  "Benign_Kampf.png",
  "Celestial_Gigan.png",
  "Godly_S1mone.png",
  "Heavenly_Shakey.png",
  "Moral_Spirit.png",
  "Sainted_Vanessa.png",
  "Beneficent_Katie.png",
  "Benign_Lucia.png",
  "Celestial_Gort.png",
  "Godly_Shakey.png",
  "Heavenly_Spirit.png",
  "Moral_Talos.png",
  "Sainted_Wall-e.png",
  "Beneficent_Marcus.png",
  "Benign_Marcus.png",
  "Celestial_Ilia.png",
  "Godly_Sonny.png",
  "Heavenly_Technology.png",
  "Moral_Torg.png",
  "Saintly_Adam.png",
  "Beneficent_Moguera.png",
  "Benign_Max.png",
  "Celestial_John.png",
  "Godly_Technology.png",
  "Heavenly_Tima.png",
  "Moral_Ultron.png",
  "Saintly_Alex.png",
  "Beneficent_Motoko.png",
  "Benign_Mukuro.png",
  "Celestial_Kimiko.png",
  "Godly_Tobor.png",
  "Holy_Adam.png",
  "Righteous_Adam.png",
  "Saintly_Astronema.png",
  "Beneficent_P2.png",
  "Benign_P2.png",
  "Celestial_Kryton.png",
  "Godly_Victor.png",
  "Holy_Alice.png",
  "Righteous_Amee.png",
  "Saintly_Baymax.png",
  "Beneficent_Pris.png",
  "Benign_Piper.png",
  "Celestial_Marcus.png",
  "Good_Alex.png",
  "Holy_Bender.png",
  "Righteous_Astor.png",
  "Saintly_Dante.png",
  "Beneficent_Qrio.png",
  "Benign_Qrio.png",
  "Celestial_Nuke.png",
  "Good_Ava.png",
  "Holy_C-3po.png",
  "Righteous_Baymax.png",
  "Saintly_Doc.png",
  "Beneficent_Robby.png",
  "Benign_Robot.png",
  "Celestial_Pickles.png",
  "Good_Avery.png",
  "Holy_Eve.png",
  "Righteous_Bb-8.png",
  "Saintly_Elle.png",
  "Beneficent_Rom.png",
  "Benign_Samantha.png",
  "Celestial_Robby.png",
  "Good_Batou.png",
  "Holy_Galaxina.png",
  "Righteous_Casella.png",
  "Saintly_Genos.png",
  "Beneficent_Samantha.png",
  "Benign_Shakey.png",
  "Celestial_Robonaut.png",
  "Good_Bb-8.png",
  "Holy_Grievous.png",
  "Righteous_Dillon.png",
  "Saintly_Metallo.png",
  "Beneficent_Sonny.png",
  "Benign_Tima.png",
  "Celestial_Robot.png",
  "Good_Bunnie.png",
  "Holy_Ilia.png",
  "Righteous_Elle.png",
  "Saintly_Mukuro.png",
  "Beneficent_Tobor.png",
  "Benign_Ultron.png",
  "Celestial_S1mone.png",
  "Good_Cameron.png",
  "Holy_Irona.png",
  "Righteous_Genghis.png",
  "Saintly_Pearl.png",
  "Benevolent_Aibo.png",
  "Benignant_Adam.png",
  "Celestial_Spirit.png",
  "Good_Cassandra.png",
  "Holy_Marvin.png",
  "Righteous_Grievous.png",
  "Saintly_Rachael.png",
  "Benevolent_Atom.png",
  "Benignant_Aibo.png",
  "Celestial_Talos.png",
  "Good_Colussus.png",
  "Holy_Pearl.png",
  "Righteous_Irona.png",
  "Saintly_Ultron.png",
  "Benevolent_Chani.png",
  "Benignant_Amee.png",
  "Celestial_Technology.png",
  "Good_Doc.png",
  "Holy_Pickles.png",
  "Righteous_Kampf.png",
  "Virtuous_Alex.png",
  "Benevolent_Dante.png",
  "Benignant_Batou.png",
  "Ethical_Adam.png",
  "Good_Genghis.png",
  "Holy_Tobor.png",
  "Righteous_Katie.png",
  "Virtuous_Astor.png",
  "Benevolent_Irona.png",
  "Benignant_Baymax.png",
  "Ethical_Arbeit.png",
  "Good_Gigan.png",
  "Holy_Ultron.png",
  "Righteous_Killian.png",
  "Virtuous_Atom.png",
  "Benevolent_John.png",
  "Benignant_Bunnie.png",
  "Ethical_Ash.png",
  "Good_Irona.png",
  "Holy_Vanessa.png",
  "Righteous_Moguera.png",
  "Virtuous_Bb-8.png",
  "Benevolent_Katie.png",
  "Benignant_Cameron.png",
  "Ethical_Batou.png",
  "Good_Jaime.png",
  "Moral_Adam.png",
  "Righteous_Piper.png",
  "Virtuous_Briareos.png",
  "Benevolent_Lydia.png",
  "Benignant_Deathstryke.png",
  "Ethical_Bb-8.png",
  "Good_Killian.png",
  "Moral_Alita.png",
  "Righteous_Ro-man,.png",
  "Virtuous_C-3po.png",
  "Benevolent_Marcus.png",
  "Benignant_Elle.png",
  "Ethical_Bender.png",
  "Good_Lydia.png",
  "Moral_Astor.png",
  "Righteous_Robby.png",
  "Virtuous_Cassandra.png",
  "Benevolent_Moguera.png",
  "Benignant_Irona.png",
  "Ethical_Bishop.png",
  "Good_Metallo.png",
  "Moral_Astroboy.png",
  "Sainted_Adam.png",
  "Virtuous_Dante.png",
  "Benevolent_Robby.png",
  "Benignant_Jinx.png",
  "Ethical_Box.png",
  "Good_Mukuro.png",
  "Moral_Austin.png",
  "Sainted_Alita.png",
  "Virtuous_Genos.png",
  "Benevolent_Robot.png",
  "Benignant_Katie.png",
  "Ethical_Cassandra.png",
  "Good_Nuke.png",
  "Moral_Avery.png",
  "Sainted_Astronema.png",
  "Virtuous_Irona.png",
  "Benevolent_Vanessa.png",
  "Benignant_Kryton.png",
  "Ethical_Chani.png",
  "Good_Omega.png",
  "Moral_Batou.png",
  "Sainted_Barry.png",
  "Virtuous_Metallo.png",
  "Benign_Adam.png",
  "Benignant_Mukuro.png",
  "Ethical_Colussus.png",
  "Good_Spirit.png",
  "Moral_Box.png",
  "Sainted_Baymax.png",
  "Virtuous_Motoko.png",
  "Benign_Alex.png",
  "Benignant_Optimus.png",
  "Ethical_Ilia.png",
  "Good_Torg.png",
  "Moral_Bunnie.png",
  "Sainted_Bb-8.png",
  "Virtuous_Omega.png",
  "Benign_Arbeit.png",
  "Benignant_P2.png",
  "Ethical_Jinx.png",
  "Good_Ultron.png",
  "Moral_Cappy.png",
  "Sainted_Bender.png",
  "Virtuous_Opportunity.png",
  "Benign_Avery.png",
  "Benignant_Piper.png",
  "Ethical_Marcus.png",
  "Heavenly_Alice.png",
  "Moral_Chani.png",
  "Sainted_Box.png",
  "Virtuous_Optimus.png",
  "Benign_Batou.png",
  "Benignant_Pris.png",
  "Ethical_P2.png",
  "Heavenly_Ava.png",
  "Moral_Elle.png",
  "Sainted_Cameron.png",
  "Virtuous_Robonaut.png",
  "Benign_Bender.png",
  "Benignant_Qrio.png",
  "Ethical_Piper.png",
  "Heavenly_Bb-8.png",
  "Moral_Genghis.png",
  "Sainted_Chappie.png",
  "Virtuous_Robot.png",
  "Benign_Bishop.png",
  "Benignant_Robot.png",
  "Ethical_Vanessa.png",
  "Heavenly_Casella.png",
  "Moral_Gigan.png",
  "Sainted_Deathstryke.png",
  "Virtuous_Robotman.png",
  "Benign_Briareos.png",
  "Benignant_Talos.png",
  "Godly_Arbeit.png",
  "Heavenly_Chani.png",
  "Moral_Ilia.png",
  "Sainted_Dolores.png",
  "Virtuous_Rom.png",
  "Benign_Bunnie.png",
  "Benignant_Technology.png",
  "Godly_Austin.png",
  "Heavenly_Elle.png",
  "Moral_Jaime.png",
  "Sainted_Galaxina.png",
  "Virtuous_Samantha.png",
  "Benign_Casella.png",
  "Benignant_Wall-e.png",
  "Godly_Bishop.png",
  "Heavenly_Jaime.png",
  "Moral_John.png",
  "Sainted_Irona.png",
  "Benign_Cherry.png",
  "Celestial_Adam.png",
  "Godly_Elsie.png",
  "Heavenly_Katie.png",
  "Moral_Kimiko.png",
  "Sainted_Killian.png",
];
setInterval(function () {
  uris.sort(() => (Math.random() > 0.5 ? 1 : -1));
  var url = "https://gateway.pinata.cloud/ipfs/QmbK1MrkzX1QMRBp9urqUMoKYSatQi5mkRTotxrjJnqm2x/" + uris[0];
  if (document.getElementById("digitalbot")) {
    document.getElementById("digitalbot").src = url;
  }
}, 1000);

function AuctionOne({
  goToPrevStep,
  goToNextStep,
  mintingToken,
  mintingStatue,
  mintTokenBot,
  mintTokenStatue,
  tokenLevelDetails,
  statueLevelDetails,
  incrementPercent,
}) {
  const level = 1;
  const levelKey = level - 1;

  const [_tokenPrice, _tokenThreshold, _tokenTotalSupply, _lastMintedToken, _tokenLeftover] =
    tokenLevelDetails[levelKey];
  const [_statuePrice, _statueThreshold, _statueTotalSupply, _lastMintedStatue, _statueLeftover] =
    statueLevelDetails[levelKey];

  // prices
  const tokenPrice = getNewPrice(_tokenPrice, incrementPercent);
  const statuePrice = getNewPrice(_statuePrice, incrementPercent);

  // last Minted ID
  const lastMintedToken = _lastMintedToken.toString();
  const lastMintedStatue = _lastMintedStatue.toString();

  // leftovers
  const tokenLeftover = _tokenLeftover.toString();
  const statueLeftover = _statueLeftover.toString();

  // total Supply
  const totalTokenSupply = _tokenTotalSupply.toString();
  const totalStatueSupply = _statueTotalSupply.toString();

  // threshold
  const tokenThreshold = _tokenThreshold.toString();
  const statueThreshold = _statueThreshold.toString();

  function truncate(str, maxDecimalDigits) {
    if (str.includes(".")) {
      const parts = str.split(".");
      return parts[0] + "." + parts[1].slice(0, maxDecimalDigits);
    }
    return str;
  }

  const popoverContent = (
    <div>
      <span>Press continue to go to next level</span>
    </div>
  );

  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="max-w-md">
          <a className="font-normal text-green-header" onClick={goToPrevStep} href="#">
            &lt;&lt; back to Level 1
          </a>

          <h1 className="text-4xl mb-4 font-normal text-green-header font-spacemono">Level 2</h1>
          <h1 className="text-2xl mb-8 font-normal text-green-header font-spacemono">Summon the ETH Bots {">>"}</h1>

          <div className="text-lg mb-6">
            Moloch is made of coordination failures, and the only way to beat a monster like that ... is more
            coordination.
            <br />
            <br />
            ETHBots are built to coordinate. They are configured by the community they serve to create coordination. The
            are the vessels through which humanity coordinates to defeat Moloch.
            <br />
            <br />
            <strong>To play this level, launch a new hero into the world by minting their NFT. </strong>
            Once {tokenThreshold} Digital ETHBots are minted ({lastMintedToken} minted so far), and {statueThreshold}{" "}
            Statue ETHBots are minted({lastMintedStatue} minted so far), humanity can begin its fight against Moloch.
          </div>

          <div>
            <Popover content={popoverContent}>
              <Button
                disabled={
                  parseInt(tokenThreshold) > parseInt(lastMintedToken) ||
                  parseInt(statueThreshold) > parseInt(lastMintedStatue)
                }
                onClick={goToNextStep}
              >
                Continue
              </Button>
            </Popover>
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <div className="grid grid-cols-2 gap-4 w-full">
          {/*  ETH Bot */}
          <div className="flex flex-col items-center">
            {/* Image Wrapper */}
            <img src={EthBot} alt="ETH Bot" className="mb-4" />

            {/* Image Title */}
            <h3 className="font-spacemono text-purple-imgText font-semibold text-lg">
              ETHBots Statue NFT({lastMintedStatue}/{totalStatueSupply})
            </h3>
            <p>Redeemable for a beautiful 12" ETHBot statue. The ETH-Bot statue stands at a whopping 9” tall x 12” in width (23cm x 30.5cm).  <a href="https://www.dropbox.com/sh/037jpsu05ed1go4/AADIDAypS-zdeTTODzvsFnV4a?dl=0" target="_blank">Check out the build here</a>.</p>
            {/* Button */}
            <Button
              transparent
              loading={mintingStatue}
              loadingText="Minting"
              disabled={lastMintedStatue === totalStatueSupply}
              onClick={() => mintTokenStatue(level, statuePrice)}
              className="border-2 border-green-header text-green-header hover:bg-green-dark-green"
              padding={10}
            >
              {lastMintedStatue === totalStatueSupply ? "Minting Completed" : `${truncate(statuePrice, 4)} ETH`}
            </Button>
            <span className="text-red-500 mt-2">
              (Only {statueLeftover} available of {totalStatueSupply} total supply)
            </span>
          </div>

          {/*  Digital ETHBot */}
          <div className="flex flex-col items-center">
            {/* Image Wrapper */}
            <a
              href="https://gateway.pinata.cloud/ipfs/QmbK1MrkzX1QMRBp9urqUMoKYSatQi5mkRTotxrjJnqm2x"
              target="_blank"
              rel="noreferrer"
            >
              <img id="digitalbot" src={MolochStatue} alt="Digital ETHBot" className="mb-4" />
            </a>

            {/* Image Title */}
            <h3 className="font-spacemono text-purple-imgText font-semibold text-lg">
              Digital ETHBot NFT({lastMintedToken}/{totalTokenSupply})
            </h3>
            <p>
              The "Moloch Wins" comic is free, but for the ETHBot Wins version, we need at least {tokenThreshold} of
              these to be summoned. Once {tokenThreshold} are minted, this NFT is redeemable to read the final comic.
            </p>

            {/* Button */}
            <Button
              transparent
              loading={mintingToken}
              loadingText="Minting"
              disabled={lastMintedToken === totalTokenSupply}
              onClick={() => mintTokenBot(level, tokenPrice)}
              className="border-2 border-green-header text-green-header hover:bg-green-dark-green"
              padding={10}
            >
              {lastMintedToken === totalTokenSupply ? "Minting Completed" : `${truncate(tokenPrice, 4)} ETH`}
            </Button>
            <span className="text-red-500 mt-2">
              (Only {tokenLeftover} available of {totalTokenSupply} total supply)
            </span>
            <a
              href="https://gateway.pinata.cloud/ipfs/QmbK1MrkzX1QMRBp9urqUMoKYSatQi5mkRTotxrjJnqm2x"
              target="_blank"
              rel="noreferrer"
            >
              (Illustrations by @-lkh)
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuctionOne;
