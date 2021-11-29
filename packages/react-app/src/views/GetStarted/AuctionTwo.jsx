import { Popover } from "antd";
import { ethers } from "ethers";
import React from "react";
import ReactPlayer from 'react-player'

import DigitalMoloch from "../../assets/mint/digitalMoloch.png";
import PhysicalMoloch from "../../assets/mint/physicalMoloch.png";
import { Button } from "../../themed-components";

const getNewPrice = (price, incrementPercent) => {
  const addition = price.div("100").mul(incrementPercent);
  const newPrice = price.add(addition);
  return ethers.utils.formatUnits(newPrice).toString();
};

var uris = [
  "Baleful_Abaddon.png",
  "Cruel_Fenriz.png",
  "Heinous_Sammael.png",
  "Inhuman_Kali.png",
  "Malicious_Melek.png",
  "Nefarious_Mephistopheles.png",
  "Vile_Bast.png",
  "Baleful_Adramalech.png",
  "Cruel_Gorgo.png",
  "Hellish_Abaddon.png",
  "Inhuman_Mastema.png",
  "Malicious_Midgard.png",
  "Nefarious_Nergal.png",
  "Vile_Chemosh.png",
  "Baleful_Baalberith.png",
  "Cruel_Hecate.png",
  "Hellish_Adramalech.png",
  "Inhuman_Mictian.png",
  "Malicious_Naamah.png",
  "Nefarious_Nija.png",
  "Vile_Emma-o.png",
  "Baleful_Beelzebub.png",
  "Cruel_Ishtar.png",
  "Hellish_Ahpuch.png",
  "Inhuman_Pluto.png",
  "Malicious_Nergal.png",
  "Nefarious_Pluto.png",
  "Vile_Fenriz.png",
  "Baleful_Beherit.png",
  "Cruel_O-yama.png",
  "Hellish_Asmodeus.png",
  "Inhuman_Proserpine.png",
  "Malicious_Nija.png",
  "Nefarious_Proserpine.png",
  "Vile_Hecate.png",
  "Baleful_Dagon.png",
  "Cruel_Pwcca.png",
  "Hellish_Azazel.png",
  "Inhuman_Pwcca.png",
  "Malicious_Sabazios.png",
  "Nefarious_Sabazios.png",
  "Vile_Lilith.png",
  "Baleful_Diabolus.png",
  "Cruel_Shaitan.png",
  "Hellish_Baphomet.png",
  "Inhuman_Sammael.png",
  "Malicious_Tan-mo.png",
  "Nefarious_Shaitan.png",
  "Vile_Loki.png",
  "Baleful_Dracula.png",
  "Cruel_Tan-mo.png",
  "Hellish_Emma-o.png",
  "Inhuman_Samnu.png",
  "Malicious_Tezcatlipoca.png",
  "Nefarious_Shiva.png",
  "Vile_Marduk.png",
  "Baleful_Hecate.png",
  "Cruel_Thamuz.png",
  "Hellish_Proserpine.png",
  "Inhuman_Sekhmet.png",
  "Malicious_Thamuz.png",
  "Nefarious_Tan-mo.png",
  "Vile_Melek.png",
  "Baleful_Kali.png",
  "Evil_Ahriman.png",
  "Hellish_Sabazios.png",
  "Inhuman_Shiva.png",
  "Malignant_Adramalech.png",
  "Nefarious_Tunrida.png",
  "Vile_Midgard.png",
  "Baleful_Mammon.png",
  "Evil_Balaam.png",
  "Hellish_Sammael.png",
  "Inhuman_Tan-mo.png",
  "Malignant_Asmodeus.png",
  "Savage_Abaddon.png",
  "Vile_Mormo.png",
  "Baleful_Mania.png",
  "Evil_Baphomet.png",
  "Hellish_Sekhmet.png",
  "Inhuman_Tezcatlipoca.png",
  "Malignant_Astaroth.png",
  "Savage_Ahpuch.png",
  "Vile_Nihasa.png",
  "Baleful_Midgard.png",
  "Evil_Behemoth.png",
  "Hellish_Tezcatlipoca.png",
  "Inhuman_Tunrida.png",
  "Malignant_Baalberith.png",
  "Savage_Coyote.png",
  "Vile_Pluto.png",
  "Baleful_Nihasa.png",
  "Evil_Diabolus.png",
  "Immoral_Behemoth.png",
  "Iniquitous_Abaddon.png",
  "Malignant_Baphomet.png",
  "Savage_Dagon.png",
  "Vile_Proserpine.png",
  "Baleful_O-yama.png",
  "Evil_Fenriz.png",
  "Immoral_Bilé.png",
  "Iniquitous_Bilé.png",
  "Malignant_Bast.png",
  "Savage_Demogorgon.png",
  "Vile_Tunrida.png",
  "Baleful_Pwcca.png",
  "Evil_Metztli.png",
  "Immoral_Haborym.png",
  "Iniquitous_Dagon.png",
  "Malignant_Dagon.png",
  "Savage_Kali.png",
  "Villainous_Beelzebub.png",
  "Baleful_Rimmon.png",
  "Evil_Mictian.png",
  "Immoral_Mantus.png",
  "Iniquitous_Damballa.png",
  "Malignant_Demogorgon.png",
  "Savage_Lilith.png",
  "Villainous_Euronymous.png",
  "Baleful_Samnu.png",
  "Evil_Mormo.png",
  "Immoral_Melek.png",
  "Iniquitous_Midgard.png",
  "Malignant_Emma-o.png",
  "Savage_Metztli.png",
  "Villainous_Ishtar.png",
  "Baleful_Sedit.png",
  "Evil_Naamah.png",
  "Immoral_Mictian.png",
  "Iniquitous_Mormo.png",
  "Malignant_Euronymous.png",
  "Savage_Moloch.png",
  "Villainous_Mantus.png",
  "Barbarous_Amon.png",
  "Evil_O-yama.png",
  "Immoral_Mormo.png",
  "Iniquitous_Naamah.png",
  "Malignant_Ishtar.png",
  "Savage_Naamah.png",
  "Villainous_Mictian.png",
  "Barbarous_Azazel.png",
  "Evil_Rimmon.png",
  "Immoral_O-yama.png",
  "Iniquitous_Nija.png",
  "Malignant_Midgard.png",
  "Sinister_Ahpuch.png",
  "Villainous_Nihasa.png",
  "Barbarous_Baphomet.png",
  "Evil_Sabazios.png",
  "Immoral_Proserpine.png",
  "Iniquitous_Pluto.png",
  "Malignant_Mormo.png",
  "Sinister_Azazel.png",
  "Villainous_O-yama.png",
  "Barbarous_Bilé.png",
  "Ferocious_Azazel.png",
  "Immoral_Rimmon.png",
  "Iniquitous_Supay.png",
  "Malignant_Nija.png",
  "Sinister_Bilé.png",
  "Villainous_Pan.png",
  "Barbarous_Haborym.png",
  "Ferocious_Beherit.png",
  "Immoral_Sabazios.png",
  "Iniquitous_Typhon.png",
  "Malignant_Proserpine.png",
  "Sinister_Chemosh.png",
  "Villainous_Shaitan.png",
  "Barbarous_Lilith.png",
  "Ferocious_Bilé.png",
  "Immoral_Tan-mo.png",
  "Malevolent_Amon.png",
  "Malignant_Rimmon.png",
  "Sinister_Euronymous.png",
  "Villainous_Thoth.png",
  "Barbarous_Loki.png",
  "Ferocious_Midgard.png",
  "Immoral_Yaotzin.png",
  "Malevolent_Apollyon.png",
  "Malignant_Yaotzin.png",
  "Sinister_Ishtar.png",
  "Villainous_Tunrida.png",
  "Barbarous_Mantus.png",
  "Ferocious_Mormo.png",
  "Infernal_Amon.png",
  "Malevolent_Astaroth.png",
  "Monstrous_Amon.png",
  "Sinister_Mania.png",
  "Villainous_Typhon.png",
  "Barbarous_Marduk.png",
  "Ferocious_Naamah.png",
  "Infernal_Asmodeus.png",
  "Malevolent_Chemosh.png",
  "Monstrous_Azazel.png",
  "Sinister_Moloch.png",
  "Villainous_Yaotzin.png",
  "Barbarous_Melek.png",
  "Ferocious_O-yama.png",
  "Infernal_Baphomet.png",
  "Malevolent_Demogorgon.png",
  "Monstrous_Baphomet.png",
  "Sinister_Naamah.png",
  "Wicked_Amon.png",
  "Barbarous_Milcom.png",
  "Ferocious_Rimmon.png",
  "Infernal_Behemoth.png",
  "Malevolent_Dracula.png",
  "Monstrous_Beelzebub.png",
  "Sinister_Samnu.png",
  "Wicked_Apollyon.png",
  "Barbarous_Nija.png",
  "Ferocious_Sabazios.png",
  "Infernal_Dagon.png",
  "Malevolent_Ishtar.png",
  "Monstrous_Dagon.png",
  "Sinister_Tchort.png",
  "Wicked_Azazel.png",
  "Barbarous_Sammael.png",
  "Ferocious_Sekhmet.png",
  "Infernal_Loki.png",
  "Malevolent_Kali.png",
  "Monstrous_Diabolus.png",
  "Vicious_Adramalech.png",
  "Wicked_Bast.png",
  "Black_Adramalech.png",
  "Ferocious_Supay.png",
  "Infernal_Mantus.png",
  "Malevolent_Lilith.png",
  "Monstrous_Fenriz.png",
  "Vicious_Balaam.png",
  "Wicked_Emma-o.png",
  "Black_Beherit.png",
  "Ferocious_Tezcatlipoca.png",
  "Infernal_Melek.png",
  "Malevolent_Mammon.png",
  "Monstrous_Hecate.png",
  "Vicious_Chemosh.png",
  "Wicked_Gorgo.png",
  "Black_Dagon.png",
  "Ferocious_Tunrida.png",
  "Infernal_Metztli.png",
  "Malevolent_Marduk.png",
  "Monstrous_Mammon.png",
  "Vicious_Euronymous.png",
  "Wicked_Hecate.png",
  "Black_Ishtar.png",
  "Ferocious_Typhon.png",
  "Infernal_O-yama.png",
  "Malevolent_Mictian.png",
  "Monstrous_Mania.png",
  "Vicious_Lilith.png",
  "Wicked_Ishtar.png",
  "Black_Mictian.png",
  "Heinous_Amon.png",
  "Infernal_Pwcca.png",
  "Malevolent_Nihasa.png",
  "Monstrous_Milcom.png",
  "Vicious_Metztli.png",
  "Wicked_Mastema.png",
  "Black_Sammael.png",
  "Heinous_Balaam.png",
  "Infernal_Sammael.png",
  "Malevolent_Proserpine.png",
  "Monstrous_Naamah.png",
  "Vicious_Moloch.png",
  "Wicked_Mephistopheles.png",
  "Black_Supay.png",
  "Heinous_Baphomet.png",
  "Infernal_Tchort.png",
  "Malevolent_Rimmon.png",
  "Monstrous_Sammael.png",
  "Vicious_Nija.png",
  "Wicked_Naamah.png",
  "Black_Thamuz.png",
  "Heinous_Bast.png",
  "Infernal_Tezcatlipoca.png",
  "Malevolent_Thamuz.png",
  "Monstrous_Tchort.png",
  "Vicious_Pan.png",
  "Wicked_Nergal.png",
  "Cruel_Ahriman.png",
  "Heinous_Beelzebub.png",
  "Inhuman_Adramalech.png",
  "Malicious_Ahriman.png",
  "Monstrous_Tezcatlipoca.png",
  "Vicious_Proserpine.png",
  "Wicked_Nija.png",
  "Cruel_Amon.png",
  "Heinous_Bilé.png",
  "Inhuman_Asmodeus.png",
  "Malicious_Amon.png",
  "Monstrous_Typhon.png",
  "Vicious_Sedit.png",
  "Wicked_Pan.png",
  "Cruel_Beelzebub.png",
  "Heinous_Ishtar.png",
  "Inhuman_Balaam.png",
  "Malicious_Balaam.png",
  "Nefarious_Ahpuch.png",
  "Vicious_Shaitan.png",
  "Wicked_Set.png",
  "Cruel_Beherit.png",
  "Heinous_Loki.png",
  "Inhuman_Beherit.png",
  "Malicious_Diabolus.png",
  "Nefarious_Bilé.png",
  "Vicious_Tchort.png",
  "Wicked_Shaitan.png",
  "Cruel_Chemosh.png",
  "Heinous_Mammon.png",
  "Inhuman_Damballa.png",
  "Malicious_Loki.png",
  "Nefarious_Mania.png",
  "Vicious_Thamuz.png",
  "Wicked_Supay.png",
  "Cruel_Damballa.png",
  "Heinous_Naamah.png",
  "Inhuman_Hecate.png",
  "Malicious_Marduk.png",
  "Nefarious_Mantus.png",
  "Vile_Amon.png",
  "Wicked_Typhon.png",
];
setInterval(function () {
  uris.sort(() => (Math.random() > 0.5 ? 1 : -1));
  var url = "https://gateway.pinata.cloud/ipfs/QmTuc7VhLN9iYwfnrLiXZx3AXdu3uN8qbKAP5hacpVWny2/" + uris[0];
  if (document.getElementById("molochdigital")) {
    document.getElementById("molochdigital").src = url;
  }
}, 1000);

function AuctionTwo({
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
  const level = 2;
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

  const pctcomplete = Math.floor(lastMintedToken/tokenThreshold * 100);
  const progressbar = {
    color: 'red',
    width: pctcomplete + '%',
  };

  function truncate(str, maxDecimalDigits) {
    if (str.includes(".")) {
      const parts = str.split(".");
      return parts[0] + "." + parts[1].slice(0, maxDecimalDigits);
    }
    return str;
  }

  const popoverContent = (
    <div>
      <span>Press continue to go final boss</span>
    </div>
  );

  return (
    <div className="grid grid-cols-1">
      <div className="flex flex-wrap">
        <div className="flex flex-wrap w-1/2 justify-center items-center">
          <div className="grid grid-cols-2 gap-4 w-full">
            {/*  Physical Moloch */}
            <div className="flex flex-col items-center">
              {/* Image Wrapper */}
              <img src={PhysicalMoloch} alt="Physical Moloch" className="mb-4" />

              {/* Image Title */}
              <h3 className="font-spacemono text-purple-imgText font-semibold text-lg">
                Moloch Statue NFT ({lastMintedStatue}/{totalStatueSupply})
              </h3>
              <p>Want to slay Moloch?  This NFT is for you.  Redeemable for a menacingly tall physical Moloch figurine. The Moloch statue stands eye to eye with ETH-Bot at 12”, and a width of 10” of pure muscle. </p>

              {/* Button */}
              <Button
                transparent
                loading={mintingStatue}
                loadingText="Minting"
                disabled={lastMintedStatue === totalStatueSupply}
                onClick={() => mintTokenStatue(level, statuePrice)}
                className="border-2 border-green-header text-green-header hover:bg-green-dark-green mb-2"
                padding={10}
              >
                {lastMintedStatue === totalStatueSupply ? "Minting Completed" : `${truncate(statuePrice, 4)} ETH`}
              </Button>
              <span className="text-red-500">
                (Only {statueLeftover} available of {totalStatueSupply} total supply)
                <br/>
                <a href="https://gitcoin.co/blog/the-ethbot-moloch-statue-auctions-are-live/" target="_blank">(Build by Blaylock Comics)</a>
              </span>
            </div>

            {/*  Digital Moloch */}
            <div className="flex flex-col items-center">
              {/* Image Wrapper */}
              <a
                href="https://gateway.pinata.cloud/ipfs/QmTuc7VhLN9iYwfnrLiXZx3AXdu3uN8qbKAP5hacpVWny2"
                target="_blank"
                rel="noreferrer"
              >
                <img id="molochdigital" src={DigitalMoloch} alt="Digital Moloch" className="mb-4" />
              </a>

              {/* Image Title */}
              <h3 className="font-spacemono text-purple-imgText font-semibold text-lg">
                Digital Moloch NFT({lastMintedToken}/{totalTokenSupply})
              </h3>
              <p>
                This Moloch must be defeated. To defeat 1 Moloch, mint 1 NFT. Once {tokenThreshold} are minted, this NFT
                is redeemable to read the final comic.
              </p>

              {/* Button */}
              <Button
                transparent
                loading={mintingToken}
                loadingText="Minting"
                disabled={lastMintedToken === totalTokenSupply}
                onClick={() => mintTokenBot(level, tokenPrice)}
                className="border-2 border-green-header text-green-header hover:bg-green-dark-green mb-2"
                padding={10}
              >
                {lastMintedToken === totalTokenSupply ? "Minting Completed" : `${truncate(tokenPrice, 4)} ETH`}
              </Button>
              <span className="text-red-500">
                (Only {tokenLeftover} available of {totalTokenSupply} total supply)
              </span>
              <a
                href="https://gitcoin.co/l-kh"
                target="_blank"
                rel="noreferrer"
              >
                (Illustrations by @l-kh)
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap w-1/2 pl-16">
          <div className="max-w-md">
            <a className="font-normal text-green-header bold" onClick={goToPrevStep} href="#">
              &lt;&lt; back to Level 2
            </a>
            <h1 className="text-4xl mb-4 font-normal text-green-header font-spacemono">Level 3</h1>
            <h1 className="text-2xl mb-8 font-normal text-green-header font-spacemono">Fight the Many Molochs {">>"}</h1>

            <div className="text-lg mb-6">
              Moloch whose eyes are a thousand blind windows! Moloch whose skyscrapers stand in the long streets like
              endless Jehovahs! Moloch whose factories dream and croak in the fog! Moloch whose smoke-stacks and antennae
              crown the cities!
              <br />
              <br />
              Moloch whose mind is pure machinery! Moloch whose blood is running money! Moloch whose fingers are ten
              armies! Moloch whose breast is a cannibal dynamo! Moloch whose ear is a smoking tomb!
              <br />
              <br />
              <strong>To play this level, capture a Moloch by minting their NFT. </strong>
              Once {tokenThreshold} Digital Molochs are minted ({lastMintedToken} minted so far), and {statueThreshold}{" "}
              Statue Molochs are minted({lastMintedStatue} minted so far), your party may advance to the final boss...
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
              <br/>
              <br/>
              {lastMintedToken}/{tokenThreshold} minted, level {pctcomplete}% complete.
              <div id="progress_bar_1">
                <span style={progressbar}>&nbsp;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-10 bg-gradient-to-r from-red-300 to-gray-050 p-10">
        <div className="flex flex-wrap w-1/2 justify-center items-center">
          <div className="max-w-md">
            <div className='player-wrapper'>
                <ReactPlayer
                url= 'videos/molochVideoLevelFour.mp4'
                width='100%'
                height='100%'
                controls = {true}
                />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap w-1/2 pl-16">
          <div className="max-w-md">
            <div className="text-2xl mb-8 font-normal text-red-600 font-spacemono"
              href="https://larpminter.com/">
                Free 3D Moloch {">>"}
            </div>
            <div className="text-lg mb-6 mt-6">
              3D Molochs are now available to anyone holding a Digital Moloch NFT.
              <br />
              <br />
              <strong>Here’s how you can get a 3D Moloch:</strong>
              <br />
              <br />
              1. Purchase a Digital Moloch NFT (seen above)
              <br />
              2. Go to <a href="https://opensea.io/collection/moloch-v3" className="underline">opensea.com</a> and find the NFT in your collection
              <br />
              3. Open the Details dropdown and copy the Token ID
              <br />
              4. Go to <a href="http://larpminter.com/moloch" className="underline">LARPminter.com</a>
              <br />
              5. Locate the Moloch minter and input the Digital Moloch token ID
              <br />
              <br />
              Video walking through the same steps on <a href="https://youtu.be/p6Mbm39ycdc">Youtube</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuctionTwo;
