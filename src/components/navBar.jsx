import React from "react";
import { ImPacman } from "react-icons/im";
function NavBar() {
  return (
    <div id="nav" className="flex h-[5em] justify-around ">
      <div id="logo" className="w-4/12 justify-center items-center font-bold flex">
        <ImPacman className="text-blue-500 text-4xl " />
        <h1 className="text-4xl text-blue-500">Travelo</h1>
      </div>
      <div id="links" className="w-4/12 justify-center">
        <ul className="list-none flex items-center h-full justify-around">
            <li className="hover:border-b-2 border-blue-400  cursor-pointer transition-all delay-200">Home</li>
            <li className="hover:border-b-2 border-blue-400 cursor-pointer transition-all delay-200">Destinations</li>
            <li className="hover:border-b-2 border-blue-400 cursor-pointer transition-all delay-200">Gallery</li>
            <li className="hover:border-b-2 border-blue-400 cursor-pointer transition-all delay-200">Contacts</li>
        </ul>
      </div>
      <div id="login" className="w-4/12 h-full items-center justify-center flex">
        <button className="w-2/12 h-10">Login</button>
        <button className="bg-blue-500 h-10  border-gray-100 w-2/12 text-white rounded-md">Register</button>
      </div>
    </div>
  );
}

export default NavBar;
