import React from 'react';
import Companies from '../components/companies';
import Destinations from '../components/Destinations';
import Info from '../components/info';
import Intro from '../components/intro';
import NavBar from '../components/navBar';
import PopularDestinations from '../components/popularDestinations';
function Home() {
    return ( 
        <React.Fragment>
            <div className="flex h-full justify-around w-full flex-col">
                <NavBar />
                <Intro />
                <Companies />
                <Destinations />
                <Info />
                <PopularDestinations />
            </div>
        </React.Fragment>
     );
}

export default Home;