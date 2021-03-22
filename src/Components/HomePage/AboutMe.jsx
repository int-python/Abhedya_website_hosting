import React from 'react'
import Particles from 'react-particles-js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutMe.css'


function AboutMe() {

    AOS.init();

    return (
        <div className="AboutMe">
            {/* <Particles
                className="AboutMe__partical"
                height="350px"
                params={{
	                "particles": {
	                    "number": {
	                        "value": 100,
	                        
	                    },
                        "color": {
                            "value": "#ffffff"
                        },
	                    "line_linked": {
	                        "enable": true,
	                        "opacity": 0.02
	                    },
	                    "move": {
	                        "direction": "right",
	                        "speed": 0.05
	                    },
	                    "size": {
	                        "value": 2,
	                    },
	                    "opacity": {
	                        "anim": {
	                            "enable": true,
	                            "speed": 1,
	                            "opacity_min": 0.05
	                        }
	                    }
	                },
	                "interactivity": {
	                    "events": {
	                        "onhover": {
	                            "enable": true,
	                            "mode": "grab"
	                        }
	                    },
	                },
	                "retina_detect": true
	            }} 
            /> */}
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
            {/* <Particles 
                className="AboutMe__partical"

                height="350px"
                params={{
                    "particles": {
                        "number": {
                            "value": 100
                        },
                        "size": {
                            "value": 3
                        },
                        "color": {
                          "value": "#FFFFFF"
                        },
                        "line_linked": {
	                        "enable": true,
	                        "opacity": 0.02
	                    },
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "grab"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            }

                        }
                    }
                }} 
                /> */}
            <p className="AboutMe__tagLine">
                Better Services <br />And Tools <br />That Boost Up <br />Your Business.
            </p>
            <div className="AboutMe__section">
                <p className="AboutMe__sectionTitle">About <br />Me.</p>
                <p data-aos="fade-right" data-aos-duration="1500" className="AboutMe__sectionDetail">Lorem  Ipsumis  simply  dummy  text  of  the printing  and  typesetting industry.  Lorem Ipsum  has  been  the  industry's  standard  dummy  text  ever  since  the  1500s,  when  an unknown printer took a galley of type and scrambled it to make a type specimen book. It has  survived  not  only  five  centuries,  but  also  the  leap  into  electronic typesetting, remaining  essentially  unchanged.  It  was  popularised  in  the  1960s  with  the  release  of Letraset  sheets  containing  Lorem  Ipsum  passages,  and  more  recently  with  desktop publishing software like Aldus PageMaker including sions of Lorem Ipsum.</p>
            </div>
        </div>
    )
}

export default AboutMe
