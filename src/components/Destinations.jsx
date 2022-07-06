import React, { useRef } from 'react';
import Destination from './Destination';
import Dubai from '../images/dubai.jpg';
import Toronto from '../images/toronto.jpg';
import Istanbul from '../images/istanbul.jpg';
import Rwanda from '../images/rwanda.jpg';
import Header from './common/header';
import Rating from './rating';
function Destinations() {
    let divRef = useRef();
    return ( 
        <div className="flex flex-col  w-screen m-auto">
        <div><Header divRef={divRef} title={"Top Destinations"}/></div>  
        <div ref={divRef} className="flex h-[60vh]  flex-nowrap gap-4  OverFlow m-auto w-10/12 max-w-screen">
            <Destination  price={"$400.00"} rating={<Rating />} img={Dubai} place={"Dubai, Doha City"} />
            <Destination  price={"$400.00"} rating={<Rating />} img={Toronto} place={"Canada, Toronto Mountains  "}/>
            <Destination  price={"$400.00"} rating={<Rating />} img={Istanbul} place={"Turkey, Istanbul City"}/>
            <Destination  price={"$400.00"} rating={<Rating />} img={Rwanda} place={"Rwanda, Kigali Clean  City"} />
            <Destination  price={"$400.00"} rating={<Rating />} img={Toronto} place={"Canada, Toronto Mountains  "}/>
            <Destination  price={"$400.00"} rating={<Rating />} img={Rwanda} place={"Rwanda, Kigali Clean  City"} />
            <Destination  price={"$400.00"} rating={<Rating />} img={Istanbul} place={"Turkey, Istanbul City"}/>
            <Destination  price={"$400.00"} rating={<Rating />} img={Rwanda} place={"Rwanda, Kigali Clean  City"} />
        </div> 
        </div>
     );
}

export default Destinations;