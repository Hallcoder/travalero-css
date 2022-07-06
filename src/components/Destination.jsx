import React from 'react';
function Destination({place,rating,price,img}) {
    return (  
        <div className="flex flex-col shadow-xl  min-w-[20em] justify-between w- border-2 border-white rounded-md">
            <div><img src={img} alt="" className="w-full shadow-xl object-cover rounded-sm h-[20em]" /></div>
            <div className="flex justify-between items-center">
                <h3 className=" w-9/12 font-semibold">{place}</h3>
                <span>{rating}</span>
            </div>
            <div className="w-full flex items-center justify-between ">
                <h3 className="font-semibold">{price}</h3>
                <button className="text-white rounded-md h-12 w-4/12 bg-blue-500">Details</button>
            </div>
        </div>
    );
}

export default Destination;