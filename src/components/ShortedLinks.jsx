import React from "react";

const ShortedLinks = ({originalLink, shortedLink, copied, setCopied}) => {

    const handleCopy = () => {
        navigator.clipboard.writeText(shortedLink);
        setCopied(!copied)
    };

    return (
        <div className="shortedlink_container">
            <p className="original_link">{originalLink}</p>
            <div className="shortedlink_wrapper">
                <p className="shorted_link">{shortedLink}</p>
                <button type="submit" onClick={handleCopy} className="copy_link-btn btn">{copied ? "Copied!" : "Copy"}</button>
            </div>
        </div>
    );
};

export default ShortedLinks;