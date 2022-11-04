import React from "react";
import TestimonialCards from './TestimonialCards'
import { Testimonial, TestimonialCardsTexts } from '../constants';



const testimonials = () => {

    return (
        <div className="testimonial_container">
            <div className="testimonial_wrapper">
                <h1 className="testimonial_heading">{Testimonial[0].content}</h1>
                <p className="testimonial_content">{Testimonial[1].content}</p>
                <div className="tesimonials_cards-container">
                    <TestimonialCards 
                        header={TestimonialCardsTexts[0].header} 
                        content={TestimonialCardsTexts[0].content}
                    />
                    <TestimonialCards 
                        header={TestimonialCardsTexts[1].header}
                        content={TestimonialCardsTexts[1].content}
                    />
                    <TestimonialCards 
                        header={TestimonialCardsTexts[2].header}
                        content={TestimonialCardsTexts[2].content}
                    />
                </div>
            </div>
        </div>
    );
};

export default testimonials;