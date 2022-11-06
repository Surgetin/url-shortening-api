import React, { useState, createContext  } from "react";
import { InputSectionText } from '../constants';
import isURL from 'validator/lib/isURL';

const ShortedLinkContext = createContext('');

const InputSection = () => {
    const [shortLink, setShortLink] = useState("")
    const [shortedLink, setShortedLink] = useState("")
    //const [originalLink, setOriginalLink] = useState("")
    const [isError, setIsError] = useState(false);
    
    const BASE_URL = "https://api.shrtco.de/v2/shorten?url="

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!shortLink || !isURL(shortLink)) {
            return setIsError(current => !current)
        }

        const handleFetchData = async () => {
            const response = await fetch(`${BASE_URL}${shortLink}`);
            const data = await response.json();
            console.log(data.result)
            setShortedLink(data.result.short_link)            
            //setOriginalLink(data.result.original_link)            
        }

        setShortLink("")
        setIsError(false)
        handleFetchData()
    }

    

    return (
        <div className="input_container" onSubmit={handleSubmit}>
            <form className="form_container">
                <input type="text" className={isError ? 'input_error' : ''} value={shortLink} onChange={(e) => setShortLink(e.target.value)} placeholder={InputSectionText[0].content}/>
                <button className="btn submit_btn" type="submit">{InputSectionText[1].content}</button>
            </form>
            <div className={isError ? 'input_error-message active' : 'input_error-message'}>Please enter a valid link</div>
            <ShortedLinkContext.Provider value={shortedLink}>
                
            </ShortedLinkContext.Provider>
        </div>
    );
};

export default InputSection;
