import React from "react";
import { heroContent } from '../constants';

const BoostSection = () => {
    return (
        <div className="boost_section-container">
            <h1 className="boost_section-heading">Boost your links today</h1>
            <button className="primary-btn btn">{heroContent[2].content}</button>
        </div>
    );
};

export default BoostSection;