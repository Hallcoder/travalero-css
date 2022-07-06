import React from "react";
import guide1 from "../images/guide1.jpg";
import guide2 from "../images/guide2.jpg";
import guide3 from "../images/guide3.jpg";
import guide4 from "../images/guide4.jpg";
import guide5 from "../images/guide5.jpg";
import Guide from "./Guider";
import Rating from "./rating";
import Header from "./common/header";
import { useRef } from "react";
function TopGuiders() {
  let divRef = useRef();
  return (
    <div className="flex flex-col h-[60vh] justify-start w-screen  m-auto">
      <div className="w-full">
        <Header divRef={divRef} title={"Best Guide Of The Year"} />
      </div>
      <div
        ref={divRef}
        className="flex h-[50vh]  m-auto OverFlow gap-2 max-w-screen w-10/12 "
      >
        <Guide img={guide5} name="J.Cole" alt="guide5" rating={<Rating />} />
        <Guide img={guide2} name="N.Angel" alt="guide2" rating={<Rating />} />
        <Guide
          img={guide3}
          name="Y.Future JB"
          alt="guide3"
          rating={<Rating />}
        />
        <Guide
          img={guide4}
          name="Chris Maddock"
          alt="guide4"
          rating={<Rating />}
        />
        <Guide
          img={guide1}
          name="Cindy West"
          alt="guide1"
          rating={<Rating />}
        />
      </div>
    </div>
  );
}

export default TopGuiders;
