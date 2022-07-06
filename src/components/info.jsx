import React from 'react';
function Info() {
    return ( 
        <div className="flex w-full mt-12 items-center justify-center h-[14em] bg-blue-600">
          <div className="w-2/12 items-center flex flex-col">
            <h3 className="text-2xl text-white">500+</h3>
            <p className="text-lg text-white">Amazing tour</p>
          </div>
          <div className="w-2/12 items-center flex flex-col">
            <h3 className="text-2xl text-white">12+</h3>
            <p className="text-lg text-white">Years Experience</p>
          </div>
          <div className="w-2/12 items-center flex flex-col">
            <h3 className="text-2xl text-white">300+</h3>
            <p className="text-lg text-white">New Destinations</p>
          </div>
        </div>
     );
}

export default Info;