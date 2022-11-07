import React, {useEffect} from "react";
import { InputSectionText } from '../constants';

const InputSection = (props) => {

    useEffect(() => {
        const originalLink = JSON.parse(localStorage.getItem("originalLink"));
        const shortedLinks = JSON.parse(localStorage.getItem("shortedLinks"));
        if (originalLink) props.setShortedLink(originalLink);
        if (shortedLinks) props.setOriginalLink(shortedLinks);
    }, []);
      
    useEffect(() => {
        if(props.shortedLink?.length) { 
            localStorage.setItem("shortedLinks", JSON.stringify(props.shortedLink));
            localStorage.setItem("originalLink", JSON.stringify(props.originalLink));
        }
    }, [props.shortedLink]);

    return (
        <div className="input_container" onSubmit={props.handleSubmit}>
            <form className="form_container">
                <input type="text" className={props.isError ? 'input_error' : ''} value={props.shortLink} onChange={(e) => props.setShortLink(e.target.value)} placeholder={InputSectionText[0].content}/>
                <div className={props.isError ? 'input_error-message active' : 'input_error-message'}>Please enter a valid link</div>
                <button className="btn submit_btn" type="submit">{InputSectionText[1].content}</button>
            </form>
        </div>
    );
};

export default InputSection;
