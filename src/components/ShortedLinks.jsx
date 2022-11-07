import React from "react";

const ShortedLinks = (props) => {

    const handleCopy = () => {
        navigator.clipboard.writeText(props.shortedLink);
        props.setCopied(!props.copied)
    };

    /* const handleDelete = () => {
        localStorage.removeItem('originalLink')
        localStorage.removeItem('shortedLinks')

    }; */

    return (
        <div className="shortedlink_container">
            <p className="original_link">{props.originalLink}</p>
            <div className="shortedlink_wrapper">
                <p className="shorted_link">{props.shortedLink}</p>
                <div className="button_container">
                    <button type="submit" onClick={handleCopy} className={props.copied ? "copied_link-btn btn" : "copy_link-btn btn"}>{props.copied ? "Copied!" : "Copy"}</button>
                    {/* <button onClick={handleDelete} className="delete_btn"><i className="fa-solid fa-trash"></i></button>
                 */}</div>
            </div>
        </div>
    );
};

export default ShortedLinks;