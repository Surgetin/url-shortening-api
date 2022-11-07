import React from "react";

const ShortedLinks = ({originalLink, shortedLink, copied, setCopied}) => {

    const handleCopy = () => {
        navigator.clipboard.writeText(shortedLink);
        setCopied(!copied)
    };

    const handleDelete = () => {
        localStorage.removeItem('originalLink')
        localStorage.removeItem('shortedLinks')
    };

    return (
        <div className="shortedlink_container">
            <p className="original_link">{originalLink}</p>
            <div className="shortedlink_wrapper">
                <p className="shorted_link">{shortedLink}</p>
                <div className="button_container">
                    <button type="submit" onClick={handleCopy} className={copied ? "copied_link-btn btn" : "copy_link-btn btn"}>{copied ? "Copied!" : "Copy"}</button>
                    <button onClick={handleDelete} className="delete_btn"><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </div>
    );
};

export default ShortedLinks;