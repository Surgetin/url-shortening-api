import React from "react";

const testimonialCards = ({header, content}) => {

    return (
        <div className="testimonial_cards">
            <h1 className="testimonial_cards-heading">{header}</h1>
            <p className="testimonial_cards-content">{content}</p>
        </div>
    );
};

export default testimonialCards;