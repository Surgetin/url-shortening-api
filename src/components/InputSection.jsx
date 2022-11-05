import React, { useState } from "react";
import { InputSectionText } from '../constants';

const InputSection = () => {
    const [shortLink, setShortLink] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!shortLink) {
            return console.log("empty")
        }

        
    }

    

    return (
        <div className="input_container" onSubmit={handleSubmit}>
            <form action="" className="form_container">
                <input type="text" value={shortLink} onChange={(e) => setShortLink(e.target.value)} placeholder={InputSectionText[0].content}/>
                <button className="btn submit_btn" type="submit">{InputSectionText[1].content}</button>
            </form>
        </div>
    );
};

export default InputSection;
