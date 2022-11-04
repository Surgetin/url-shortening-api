import React from "react";
import { InputSection } from '../constants';

const inputSection = () => {
    return (
        <div className="input_container">
            <input type="text" placeholder={InputSection[0].content}/>
            <button className="btn submit_btn" type="submit">{InputSection[1].content}</button>
        </div>
    );
};

export default inputSection;