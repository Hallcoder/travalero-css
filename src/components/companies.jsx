import React from "react";
import Microsoft from "../images/microsoft.png";
import Google from "../images/google.png";
import Netflix from "../images/netflix.png";
import PayPal from "../images/paypal.png";
function Companies() {
  return (
    <div className="w-9/12 flex m-auto mt-[4em] justify-around items-center">
      <div className="w-4/12">
        <img className="w-10/12 h-[10em]" src={Google} alt="" />
      </div>
      <div className="w-4/12">
        <img className="w-10/12 h-[10em]" src={Microsoft} alt="" />
      </div>
      <div className="w-3/12">
        <img className="w-10/12 h-[10em]" src={PayPal} alt="" />
      </div>
      <div className="w-3/12">
        <img className="w-10/12 h-[10em]" src={Netflix} alt="" />
      </div>
    </div>
  );
}

export default Companies;
