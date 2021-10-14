import { Button } from "antd";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

function Mint({ readContracts, tx, writeContracts, events, lastMinted = [], ...props }) {
  const [level, setLevel] = useState(1);
  const [minting, setMinting] = useState(0);
  const [levelInfo, setLevelInfo] = useState({});

  const refreshLevel = async l => {
    console.log(`Refreshing for this level: `, l || level);
    const { price, threshold, tokenAddress, totalSupply } = await readContracts.GreatestLARP.getDetailsForLevel(
      l || level,
    );

    console.log({ price, level, threshold, tokenAddress, totalSupply });

    setLevelInfo({ price, threshold, tokenAddress, totalSupply });
  };

  const incrementLevel = async () => {
    const newLevel = level + 1;

    await refreshLevel(newLevel);
    setLevel(newLevel);
  };

  useEffect(() => {
    if (readContracts && readContracts.GreatestLARP) {
      refreshLevel();
    }
  }, [readContracts]);

  const mintToken = async level => {
    // set minting to level
    setMinting(level);
    const result = tx(writeContracts.GreatestLARP.requestMint(level, { value: levelInfo.price }), async update => {
      console.log("📡 Transaction Update:", update);
      // reset minting
      setMinting(0);
      if (update && (update.status === "confirmed" || update.status === 1)) {
        await refreshLevel();
        console.log(" 🍾 Transaction " + update.hash + " finished!");
        console.log(
          " ⛽️ " +
            update.gasUsed +
            "/" +
            (update.gasLimit || update.gas) +
            " @ " +
            parseFloat(update.gasPrice) / 1000000000 +
            " gwei",
        );
      }
    });
    console.log("awaiting metamask/web3 confirm result...", result);
    console.log(await result);
  };

  return (
    <div style={{ marginTop: 50 }}>
      <Button onClick={() => mintToken(level)} loading={minting === level}>
        Mint Token {level}
      </Button>

      {levelInfo.threshold && lastMinted[level - 1] && lastMinted[level - 1].gte(levelInfo.threshold) && (
        <Button style={{ marginLeft: 10 }} onClick={incrementLevel}>
          Next Level
        </Button>
      )}
    </div>
  );
}

export default Mint;
