import React from "react";
function Guide({ img,name, rating, alt }) {
  return (
    <div className="flex flex-col shadow-2xl  min-w-[20em] justify-between  border-white rounded-md">
      <div className="h-5/6">
        <img src={img} alt={alt} className="w-full object-cover hover:opacity-80 h-full" />
      </div>
      <div className="w-full flex justify-between">
        <p className="font-extrabold">{name}</p>
        {rating}
        </div>
    </div>
  );
}

export default Guide;
