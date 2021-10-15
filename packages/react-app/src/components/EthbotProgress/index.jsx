import { Col, Row } from "antd";
import React from "react";
import fundingbot1 from "../../assets/ProgressBar/fundingbot-1.png";
import fundingbot2 from "../../assets/ProgressBar/fundingbot-2.png";
import fundingbot3 from "../../assets/ProgressBar/fundingbot-3.png";
import fundingbot4 from "../../assets/ProgressBar/fundingbot-4.png";
import fundingbot5 from "../../assets/ProgressBar/fundingbot-5.png";
import fundingprogress1 from "../../assets/ProgressBar/progressbar1.svg";
import fundingprogress2 from "../../assets/ProgressBar/progressbar2.svg";
import fundingprogress3 from "../../assets/ProgressBar/progressbar3.svg";
import fundingprogress4 from "../../assets/ProgressBar/progressbar4.svg";
import fundingprogress5 from "../../assets/ProgressBar/progressbar5.svg";
import "./EthbotProgress.css";

const fundingBot = [fundingbot1, fundingbot2, fundingbot3, fundingbot4, fundingbot5];

const fundingProgress = [fundingprogress1, fundingprogress2, fundingprogress3, fundingprogress4, fundingprogress5];

const index = ({ progress }) => {
  const currentFundingBot = fundingBot[progress] || fundingbot5;
  const currentFundingProgress = fundingProgress[progress] || fundingprogress1;

  return (
    <section className="bg-green-light-green h-auto w-full">
      <Row className="container min-w-full">
        <Col flex={5}>
          <div className="-mb-40 -mt-40 infront h-auto p-14">
            <img src={currentFundingBot} alt="progress bot" />
          </div>
          <img src={currentFundingProgress} alt="bot" className="p-2 w-full mt-20" />
        </Col>
        <Col flex={1}>
          <h1 className="justify-self-center progress-title wrap mt-4 sm:ml-10">Get the latest Edition</h1>
          <div className="flex">
            <p className="inline-flex progress-subtext py-2 px-6">Lorem Ipsum</p>
            <div className=" ml-2 flex ">
              <button
                onClick={() => {
                  window.location =
                    "https://store.gitcoin.co/collections/comics/products/ethereum-vs-moloch-comic-book-2-digital-edition";
                }}
                class="inline-flex text-white bg-green-teal h-12 border-0 py-2 px-6 rounded text-lg font-spacemono"
              >
                Join now
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default index;
