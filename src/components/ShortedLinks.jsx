import React, {useContext} from "react";

const ShortedLinks = () => {
    const shortedLink = useContext(shortedLink);

    return (
        <div className="shortedlink_container">
            <p className="original_link">{shortedLink}</p>
            <div className="shortedlink_wrapper">
                <p className="shorted_link">{shortedLink}</p>
                <button className="copy_link-btn btn">Copy</button>
            </div>
        </div>
    );
};

export default ShortedLinks;