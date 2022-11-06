import React from "react";
import { InputSectionText } from '../constants';

const InputSection = ({isError, shortLink, setShortLink, handleSubmit}) => {
    return (
        <div className="input_container" onSubmit={handleSubmit}>
            <form className="form_container">
                <input type="text" className={isError ? 'input_error' : ''} value={shortLink} onChange={(e) => setShortLink(e.target.value)} placeholder={InputSectionText[0].content}/>
                <button className="btn submit_btn" type="submit">{InputSectionText[1].content}</button>
            </form>
            <div className={isError ? 'input_error-message active' : 'input_error-message'}>Please enter a valid link</div>
        </div>
    );
};

export default InputSection;
