import React from 'react'
import './CeoSection.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


function CeoSection() {

    AOS.init();

    return (
        <div className="CeoSection">
            <div className="CeoSection__left">
                <div data-aos="fade-up">
                    <p className="CeoSection__leftTitle">
                        CEO
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                    <p className="CeoSection__leftText">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="150">
                    <p className="CeoSection__leftCompanyName">ABHEDYA PVT. LTD.</p>
                </div>
            </div>
            <div className="CeoSection__right">
                <img 
                className="CeoSection__rightImage"
                src="https://blog.abhedya.in/media/blog/WhatsApp_Image_2020-11-12_at_2.13.58_PM.jpeg" 
                alt="" />
            </div>
        </div>
    )
}

export default CeoSection
