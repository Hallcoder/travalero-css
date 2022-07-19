import React from 'react';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
function Header({title,divRef,link}) {
    const handleNext = () => {
     divRef.current.style.scrollBehavior = 'smooth';
     divRef.current.scrollLeft += 750;
    }
    const handleBack = () => {
     divRef.current.scrollLeft -= 650;
    }
    return ( 
        <div className="flex w-10/12 m-auto items-center justify-between mt-[7em]">
        <h1 id='headerHeading' className="text-3xl w-11/12 font-semibold">{title}</h1>
          {!link &&  <div className=" nextAndBack flex justify-around w-1/12">
                <AiOutlineLeft onClick={handleBack} className="left text-2xl border-2 opacity-40 border-black" />
                <AiOutlineRight onClick={handleNext} className="right text-2xl border-2 border-blue-500 text-blue-500 shadow-xl"/>
            </div> }
            <div>
                <a href="#" id='link' className="text-blue-500 underline">{link}</a>
            </div>
        </div>
     );
}

export default Header;