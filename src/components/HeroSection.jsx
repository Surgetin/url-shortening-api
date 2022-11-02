import React from "react";
import { heroContent } from '../constants';
import heroImage from '../images/illustration-working.svg';


const heroSection = () => {

    return (
        <div className="hero_container">
            <div className="hero_section-left">
                <h1 className="hero_heading">{heroContent[0].title}</h1>
                <p className="hero_content">{heroContent[1].title}</p>
                <button className="primary-btn btn">{heroContent[2].title}</button>
            </div>
            <div className="hero_section-right">
                <img className="hero_image" src={heroImage} alt="illustration-working" />
            </div>
        </div>
    );
};

export default heroSection;