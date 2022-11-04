import React from "react";

const testimonialCards = ({header, content, img}) => {
    return (
        <div className="testimonial_cards">
            <h1 className="testimonial_cards-heading">{header}</h1>
            <p className="testimonial_cards-content">{content}</p>
            <img className="testimonial_cards-icons" src={img} alt="illustration icon" />
        </div>
    );
};

export default testimonialCards;