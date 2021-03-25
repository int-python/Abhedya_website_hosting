import React from 'react'
import Particles from 'react-particles-js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutMe.css'


function AboutMe() {

    AOS.init();

    return (
        <div className="AboutMe">
            <Particles 
                className="AboutMe__partical"
                height="350px" 
                params={{
                    "particles": {
                        "number": {
                            "value": 80
                        },
                        "size": {
                            "value": 4
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            }
                            
                        }
                    }
                }}
                />
            <p className="AboutMe__tagLine">
                Imagination is Important<br/> At Abhedya <br/>We make your Imagination <br/>Possible
            </p>
            <div className="AboutMe__section">
                <p className="AboutMe__sectionTitle">About <br />Us.</p>
                <p data-aos="fade-right" data-aos-duration="1500" className="AboutMe__sectionDetail">Abhedya Futuristic solution is a It service based buisness where we are making your imagination possible. We work for your dream project. At abhedya we believe in your dreams and we will help you make them a reality. We provide variety of services for your dream projects . We build secure websites and mobile apps for your dream project. We believe in security so thats why we are providing a various range of cyber security that will make your organziations infrastruture more secure</p>
            </div>
        </div>
    )
}

export default AboutMe
