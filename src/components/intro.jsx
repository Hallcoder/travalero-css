import React from "react";
import { ImLocation, ImCalendar } from "react-icons/im";
import {BsPersonFill} from "react-icons/bs";
function Intro() {
  return (
    <div className="h-[39em] w-full m-auto  imageBack">
      <div className="w-full h-[25em] textOpacity ml-2  flex flex-col">
        <p className="learn text-6xl w-5/12 h-[4em] mt-[1em] text-white  font-extrabold">
          Learn New Things By
          <strong className="text-blue-500"> Traveling</strong> The World
        </p>
        <p id='travelText' className="text-2xl  w-5/12  text-gray-400">
          Let's travel the world with pleasure to know new and interesting
          things you can learn and you can
        </p>
      </div>
      <div className="whiteDiv bg-white h-[7em] mt-16 items-center flex justify-center  w-7/12 rounded-md ml-4">
        <div className="w-4/12 flex items-center justify-evenly">
          <ImLocation  className="icon text-gray-500 text-3xl"/>
          <div className="w-10/12">
              <h3 className="text-lg font-bold">Location</h3>
              <p>Inter your destinations</p>
          </div>
        </div>
        <div className="w-4/12 flex items-center justify-evenly">
          <ImCalendar className="icon text-gray-500 text-3xl"/>
          <div className="w-10/12">
              <h3 className="text-lg font-bold">Date</h3>
              <p>When will it start?</p>
          </div>
        </div>
        <div className="w-3/12 flex items-center justify-evenly">
          <BsPersonFill className="icon text-gray-500 text-3xl"/>
          <div className="w-10/12">
              <h3 className="text-lg font-bold">People</h3>
              <p>How many people?</p>
          </div>
        </div>
        <button className="bg-blue-500 text-white h-12 rounded-md mr-2 w-2/12">Book more</button>
      </div>
    </div>
  );
}

export default Intro;
