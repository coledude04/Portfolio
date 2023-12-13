import React from 'react';
import * as CGIcons from 'react-icons/cg';

const PasDiv = (props) => {
    return (
        <div className="pasDiv">
            <a to="#" className="pasIcon">
                {props.icon}
            </a>
            <p className="pasText">{props.text}</p>
        </div>
    )
}

const AboutMe = () => {
    return (
        <div className="aboutMe">
            <h2 id="aboutMeTitle">
                About Me
            </h2>
            <div id="pasSec">
                <PasDiv icon={<CGIcons.CgTrophy />} text="Competition, whether it's with a team or alone, is a great motivator for me. I love to improve in everything I do and I try to be the best in all aspects of my life." />
                <PasDiv icon={<CGIcons.CgBandAid />} text="I am a passionate problem solver who loves to explore complex issues, and find an innovative, creative solution." />
                <PasDiv icon={<CGIcons.CgDollar />} text="Exploring and studying financial markets is my greatest interest. Using money as a way to make more money is an idea that perplexes me more than anything." />
            </div>
        </div>
    );
}
export default AboutMe;