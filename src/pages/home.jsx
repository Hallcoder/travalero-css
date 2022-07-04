import React from 'react';
import Companies from '../components/companies';
import Destinations from '../components/Destinations';
import Intro from '../components/intro';
import NavBar from '../components/navBar';
function Home() {
    return ( 
        <React.Fragment>
            <div className="flex h-full justify-around w-full flex-col">
                <NavBar />
                <Intro />
                <Companies />
                <Destinations />
            </div>
        </React.Fragment>
     );
}

export default Home;