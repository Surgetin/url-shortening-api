import React from "react";
import { heroContent } from '../constants';
import heroImage from '../images/illustration-working.svg';

const HeroSection = () => {
    return (
        <div className="hero_container">
            <div className="hero_section-left">
                <h1 className="hero_heading">{heroContent[0].content}</h1>
                <p className="hero_content">{heroContent[1].content}</p>
                <button className="primary-btn btn">{heroContent[2].content}</button>
            </div>
            <div className="hero_section-right">
                <img className="hero_image" src={heroImage} alt="illustration-working" />
            </div>
        </div>
    );
};

export default HeroSection;