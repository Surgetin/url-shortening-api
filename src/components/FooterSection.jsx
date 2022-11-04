import React from "react";
import { heroContent } from '../constants';

const footerSection = () => {
    return (
        <div className="footer_section-container">
            <div className="wrapper">
                <h1 className="boost_section-heading">Boost your links today</h1>
                <button className="primary-btn btn">{heroContent[2].content}</button>
            </div>
        </div>
    );
};

export default footerSection;