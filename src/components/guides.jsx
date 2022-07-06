import React from 'react';
import guide1 from "../images/guide1.jpg";
import guide2 from "../images/guide2.jpg";
import guide3 from "../images/guide3.jpg";
import guide4 from "../images/guide4.jpg";
import guide5 from "../images/guide5.jpg";
import Guide from './Guider';
import Rating from './rating';
function Guides() {
    return ( 
        <div className="flex gap-2 m-auto">
            <Guide img={guide1} name="J.Cole" alt="guide1" rating={<Rating />} />
            <Guide img={guide2} name="N.Angel" alt="guide2" rating={<Rating />} />
            <Guide img={guide3} name="Y.Future JB" alt="guide3" rating={<Rating />} />
            <Guide img={guide3} name="Chris Maddock" alt="guide4" rating={<Rating />} />
            <Guide img={guide4} name="Cindy West" alt="guide5" rating={<Rating />} />
        </div>
     );
}

export default Guides;