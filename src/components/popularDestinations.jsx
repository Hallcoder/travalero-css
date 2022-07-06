import React from 'react';
import Header from './common/header';
import dubai from "../images/dubai.jpg";
import rwanda from "../images/rwanda.jpg"
import istanbul from "../images/istanbul.jpg"
import toronto from "../images/rwanda.jpg"
function PopularDestinations() {
    return ( 
        <div>
            <Header link={"View More"} title={"Explore Popular Destinations"}/>
            <div className="GRID w-10/12 m-auto">
             <div className="gridDivs">
                    <img className="object-fill h-full w-full" src={toronto} alt="" />
             </div>
             <div className="gridDivs">
   <img className="object-cover h-full w-full" src={dubai} alt="" />
             </div>
             <div className="gridDivs ">
   <img className="object-cover h-full w-full" src={rwanda} alt="" />
             </div>
             <div className="gridDiv">
   <img className="object-cover h-full w-full" src={istanbul} alt="" />
             </div>
            </div>
        </div>
     );
}

export default PopularDestinations;