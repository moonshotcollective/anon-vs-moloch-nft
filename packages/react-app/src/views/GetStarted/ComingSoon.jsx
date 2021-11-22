import React from "react";
import Countdown from "react-countdown";
import classnames from "classnames";
import { Button } from "../../themed-components";

function ComingSoon({ goToNextStep }) {
  const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    const largeTextClass = "text-7xl";

    return (
      <>
        <div className="flex flex-row items-end mt-14">
          {/* days */}
          <div className="flex flex-col items-center">
            <span className="text-gray-400">Days</span>
            <h2 className={classnames("mt-4 m-0 p-0", largeTextClass)}>{days}</h2>
          </div>
          <span className={classnames(largeTextClass, "mx-5")}>:</span>
          {/* hours */}
          <div className="flex flex-col items-center">
            <span className="text-gray-400">Hours</span>
            <h2 className={classnames("mt-4 m-0 p-0", largeTextClass)}>{hours}</h2>
          </div>
          <span className={classnames(largeTextClass, "mx-5")}>:</span>
          {/* minutes */}
          <div className="flex flex-col items-center">
            <span className="text-gray-400">Minutes</span>
            <h2 className={classnames("mt-4 m-0 p-0", largeTextClass)}>{minutes}</h2>
          </div>
          <span className={classnames(largeTextClass, "mx-5")}>:</span>
          {/* seconds */}
          <div className="flex flex-col items-center">
            <span className="text-gray-400">Seconds</span>
            <h2 className={classnames("mt-4 m-0 p-0", largeTextClass)}>{seconds}</h2>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-center">
          <Button disabled={!completed} onClick={goToNextStep}>
            Continue
          </Button>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="mb-8 flex flex-1 flex-col justify-center">
        <div className="max-full flex items-center justify-center flex-col">
          <h1 className="text-5xl mb-4 mt-20 font-normal text-green-header font-spacemono">Final fight coming soon</h1>

          <div>
            <Countdown date={1638820800000} renderer={countdownRenderer} />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default ComingSoon;
