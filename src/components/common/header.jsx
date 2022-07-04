import React from 'react';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
function Header({title,divRef}) {
    const handleNext = () => {
    // Array.from(divRef.current)[0].style.scrollBehavior = "smooth";
     console.log(divRef.current);
     divRef.current.scrollLeft += 100;
    }
    const handleBack = () => {
        console.log(divRef);
     divRef.current.scrollLeft -= 100;
    }
    return ( 
        <div className="flex w-10/12 m-auto justify-between mt-[7em]">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <div className="flex justify-around  w-1/12">
                <AiOutlineLeft onClick={handleBack} className="text-2xl border-2 opacity-40 border-black" />
                <AiOutlineRight onClick={handleNext} className="text-2xl border-2 border-blue-500 text-blue-500 shadow-xl"/>
            </div>
        </div>
     );
}

export default Header;