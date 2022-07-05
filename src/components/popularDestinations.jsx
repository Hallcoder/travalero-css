import React from 'react';
import Header from './common/header';
function PopularDestinations() {
    return ( 
        <div>
            <Header link={"View More"} title={"Explore Popular Destinations"}/>
            <div className="GRID w-10/12  m-auto">
             <div className="gridDivs bg-blue-200"></div>
             <div className="gridDivs bg-red-200"></div>
             <div className="gridDivs bg-green-200"></div>
             <div className="gridDivs bg-yellow-200"></div>
            </div>
        </div>
     );
}

export default PopularDestinations;