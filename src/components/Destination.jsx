import React from 'react';
function Destination({place,rating,price,img}) {
    return (  
        <div className="h-[5em] flex flex-col min-w-[22em] w-3/12 border-2 border-white rounded-md">
            <div><img src={img} alt="" className="w-full rounded-sm h-[22em]" /></div>
            <div className="flex justify-between items-center">
                <h3 className=" w-9/12 font-semibold">{place}</h3>
                <span>{rating}</span>
            </div>
            <div className="w-full flex items-center justify-between ">
                <h3 className="font-semibold">{price}</h3>
                <button className="text-white h-12 w-4/12 bg-blue-500">Details</button>
            </div>
        </div>
    );
}

export default Destination;