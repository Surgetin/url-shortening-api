import React from "react";
import { Testimonials } from '../constants';


const testimonials = () => {

    return (
        <div className="testimonial_container">
            <h1 className="testimonial_heading">{Testimonials[0].content}</h1>
            <p className="testimonial_content">{Testimonials[1].content}</p>
        </div>
    );
};

export default testimonials;