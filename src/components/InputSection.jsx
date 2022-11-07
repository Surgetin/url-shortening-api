import React, {useEffect} from "react";
import { InputSectionText } from '../constants';

const InputSection = ({isError, shortLink, shortedLink, setShortedLink, setShortLink, originalLink, setOriginalLink, handleSubmit}) => {

    useEffect(() => {
        const originalLink = JSON.parse(localStorage.getItem("originalLink"));
        const shortedLinks = JSON.parse(localStorage.getItem("shortedLinks"));
        if (originalLink) setShortedLink(originalLink);
        if (shortedLinks) setOriginalLink(shortedLinks);
    }, []);
      
    useEffect(() => {
        if(shortedLink?.length) { 
            localStorage.setItem("shortedLinks", JSON.stringify(shortedLink));
            localStorage.setItem("originalLink", JSON.stringify(originalLink));
        }
    }, [shortedLink]);

    return (
        <div className="input_container" onSubmit={handleSubmit}>
            <form className="form_container">
                <input type="text" className={isError ? 'input_error' : ''} value={shortLink} onChange={(e) => setShortLink(e.target.value)} placeholder={InputSectionText[0].content}/>
                <div className={isError ? 'input_error-message active' : 'input_error-message'}>Please enter a valid link</div>
                <button className="btn submit_btn" type="submit">{InputSectionText[1].content}</button>
            </form>
        </div>
    );
};

export default InputSection;
