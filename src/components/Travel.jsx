import React from 'react';
import travel from "../images/travel.jpg";
import {BsArrowBarRight} from "react-icons/bs"
function Travel() {
    return ( 
        <div className="flex w-10/12 mb-10 h-[60vh] shadow-xl rounded-lg m-auto mt-10">
            <div className="w-6/12 flex items-center flex-col justify-center h-full">
                <h1 className="text-4xl w-9/12 text-center font-extrabold">Travel to make memories all around the world</h1>
                <p className="text-lg mt-[2em]">Travel to make memories all around the world</p>
                <div className="flex h-12 justify-between items-center rounded-md w-9/12 border">
                    <input type="text" placeholder="Contact Number" className="w-10/12 indent-2 h-full focus:outline outline-gray-400" />
                    <BsArrowBarRight className="text-xl w-2/12 border-l-2  h-5/6 text-center text-blue-500" />
                </div>
            </div>
            <div className="w-6/12 h-full rounded-lg">
                <img src={travel} alt="travel" className="h-full rounded-sm" />
            </div>
        </div>
     );
}

export default Travel;