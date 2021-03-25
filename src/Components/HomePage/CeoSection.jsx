import React from 'react'
import './CeoSection.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CeoImage from '../../Assets/CeoImage.jpg'


function CeoSection() {

    AOS.init();

    return (
        <div className="CeoSection">
            <div className="CeoSection__left">
                <div data-aos="fade-up">
                    <p className="CeoSection__leftTitle">
                        YASH KUMAR GUPTA (CEO)
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                    <p className="CeoSection__leftText">
                        Responsibility has always been a strong, guiding value at Power Corporation. Naturally, we take very seriously And our responsibility is to Provide Excellence in Everything Every Service We Provide. 
                        We are focused on creating Innovative and Positive designs
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="150">
                    <p className="CeoSection__leftCompanyName">ABHEDYA FUTURISTIC SOLUTIONS PRIVATE LIMITED</p>
                </div>
            </div>
            <div className="CeoSection__right">
                <img 
                className="CeoSection__rightImage"
                src={CeoImage} 
                alt="" 
                />
            </div>
        </div>
    )
}

export default CeoSection
