import React from "react";
import sunset from "../images/sunset.jpg";
import lake from "../images/lake.jpg";
import ocean from "../images/ocean.jpg";
import flowers from "../images/flowers.jpg";
import Header from "./common/header";
function Gallery() {
  return (
    <>
      <Header title={"Trip Gallery"} link='View More'/>
      <div className="gallery1">
        <img className="w-full  rounded-lg object-cover h-full" src={flowers} alt="" />
        <img className="w-full  rounded-lg object-cover h-full" src={ocean} alt="" />
      </div>
      <div className="gallery2">
        <img className="w-full  rounded-lg object-cover h-full" src={sunset} alt="" />
        <img className="w-full  rounded-lg object-cover h-full" src={lake} alt="" />
        <img className="w-full  rounded-lg object-cover h-full" src={ocean} alt="" />
      </div>
    </>
  );
}

export default Gallery;
