import React from 'react'
import TestimonialsCard from './Card/TestimonialsCard'
import './Testimonials.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Testimonials() {

    AOS.init();

    return (
        <div className="Testimonials">
            <p className="Testimonials__heading">Testimonials.</p>
            <div className="Testimonials__top">
                <div data-aos="fade-down-right"><TestimonialsCard /></div>
                <div data-aos="fade-down-left"><TestimonialsCard /></div>
            </div>
            <div className="Testimonials__bottom">
            <div data-aos="fade-up-right"><TestimonialsCard /></div>
            <div data-aos="fade-up-left"><TestimonialsCard /></div>
            </div>
        </div>
    )
}

export default Testimonials
