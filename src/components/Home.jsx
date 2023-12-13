import React from 'react';
import * as CGIcons from 'react-icons/cg';

const Home = () => {
    return(
        <>
        <p id="navigator">This is here so that the nav menu can direct the user to the top!</p>
        <div className="homeSection">
            <p id="introText">
                <span>Hello</span>, my name is Cole and you've reached my website. Here, you can find my projects and information about me.
            </p>
            <a to="#" id="downArrow" onClick={() => document.getElementById("aboutMeTitle").scrollIntoView({behavior: 'smooth'})}>
                <CGIcons.CgArrowLongDown />
            </a>
        </div>
        </>
    )
}
export default Home;