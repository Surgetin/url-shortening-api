import React from "react";
import TestimonialCards from './TestimonialCards'
import { Testimonial, TestimonialCardsTexts } from '../constants';
import brandImage from '../images/icon-brand-recognition.svg';
import detailedImage from '../images/icon-detailed-records.svg';
import fullyImage from '../images/icon-fully-customizable.svg';

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
                        img={brandImage}
                    />
                    <TestimonialCards 
                        header={TestimonialCardsTexts[1].header}
                        content={TestimonialCardsTexts[1].content}
                        img={detailedImage}
                    />
                    <TestimonialCards 
                        header={TestimonialCardsTexts[2].header}
                        content={TestimonialCardsTexts[2].content}
                        img={fullyImage}
                    />
                </div>
            </div>
        </div>
    );
};

export default testimonials;