import React from "react";

const inputSection = () => {
    
    return (
        <div className="input_container">
            <input type="text" placeholder="Shorten a link here..."/>
            <button className="btn submit_btn" type="submit">Shorten It!</button>
        </div>
    );
};

export default inputSection;