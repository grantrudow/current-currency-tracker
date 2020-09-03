import React from 'react';
import currentLogo from './images/currentLogo.png';
import './Home.css';

const Home = () => {
    return (
        <div>
            <img className="logo" src={currentLogo} alt="Current logo"></img>
        </div>
    )
}

export default Home;