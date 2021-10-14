import React from "react";
import { Button } from "../../themed-components";
import PosterCover from "../../assets/mint/poster-cover.png";

function Read(props) {
  return (
    <>
      <div className="flex flex-1 flex-col  justify-center">
        <h1 className="text-4xl mb-10 font-normal text-green-header font-spacemono">Read Comic</h1>

        <div className="text-lg max-w-md mb-6">
          Sed vel erat id libero aliquam posuere ac id dui. Phasellus ac arcu vel justo venenatis auctor. Aliquam id
          ultrices sapien, a aliquam mauris. Morbi accumsan, lorem eu laoreet cursus, ex libero finibus justo, non
          blandit erat nisi vel libero.{" "}
        </div>

        <div>
          <Button>Read</Button>
          <Button className="ml-4">Continue Mission</Button>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <div className="h-full w-64 relative">
          <img src={PosterCover} alt="read the latest edition" />
          <div className="absolute top-0 h-full w-full bg-purple-overlay bg-opacity-70 flex flex-col justify-between items-center py-10">
            <div className="px-8">
              <p className="font-spacemono text-white text-xl">Read the latest edition</p>
              <p className="text-green-teal">Sed vel erat id libero aliquam posuere ac id dui. </p>
            </div>
            <div>
              <Button className="border-2 border-white bg-transparent text-white" transparent>
                Let's start
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Read;
