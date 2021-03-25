import React from 'react'
import GraphicDesignPage from './ServicePage/GraphicDesignPage/GraphicDesignPage'
import Particles from 'react-particles-js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ServicePage.css'
import ServicePageCardLeft from './ServicePage/ServicePageCardLeft';
import ServicePageCardRight from './ServicePage/ServicePageCardRight';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function ServicePage() {

    AOS.init({
        duration: 1000,
    });

    return (
        <div className="ServicePage">
            <div className="ServicePage__top">
                <Particles 
                    className="ServicePage__partical"
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
                <div className="ServicePage__topHead">
                    <p className="ServicePage__topHeading">Abhedya's Services</p>    
                    {/* <p className="ServicePage__topDetail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
                </div>
            </div>
            <div className="ServicePage__services">
                <p className="ServicePage__servicesHeading">Services We Offer</p>
                <div data-aos="fade-left">
                    <ServicePageCardLeft 
                    ServiceName="Grapic Design"
                    ServiceDetail="Graphic design is a craft where professionals create visual content to communicate messages. At Abhedya, by applying visual hierarchy and....."
                    ServiceImage="https://bestdevlist.com/wp-content/uploads/2019/02/Graphic-_Design-400x200.jpg"
                    ServicePageLink="/ServicePage/GraphicDesignPage"
                    />
                </div>
                <div data-aos="fade-right">
                    <ServicePageCardRight 
                    ServiceName="ML & AI"
                    ServiceDetail="Abhedya is the leading end-to-end enterprise AI platform that automates and accelerates every step of your path from data to value Artifi....."
                    ServiceImage="https://softei.com/wp-content/uploads/2020/02/Arm_10-02-2020-400x200-c-default.jpg"
                    ServicePageLink="/ServicePage/ML&AIPage"
                    />
                </div>
                <div data-aos="fade-left">
                    <ServicePageCardLeft 
                    ServiceName="Cybersecurity"
                    ServiceDetail="We ensure that your application is free from security bugs that could potentially damage your business and put your data at risk....."
                    ServiceImage="https://i.pinimg.com/474x/53/7c/e4/537ce444ca00676f55cdcbe9671d6688.jpg"
                    ServicePageLink="/ServicePage/CyberSecurityPage"
                    />
                </div>
                <div data-aos="fade-right">
                    <ServicePageCardRight 
                    ServiceName="Web Development"
                    ServiceDetail="Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, wo....."
                    ServiceImage="https://industryarmymarketing.com/wp-content/uploads/2018/08/wd1-400x200.jpg"
                    ServicePageLink="/ServicePage/WebDevelopmentPage"
                    />
                </div>
                <div data-aos="fade-left">
                    <ServicePageCardLeft 
                    ServiceName="App Development"
                    ServiceDetail="App development is the process of creating apps that run on any mobile platform: Android and iOS The app design is created according to the ....."
                    ServiceImage="https://assets.entrepreneur.com/content/3x2/2000/20190612193425-GettyImages-1066987316-crop.jpeg?auto=webp&quality=95&crop=2:1&width=400"
                    ServicePageLink="/ServicePage/AppDevelopPage"
                    />
                </div>
                <div data-aos="fade-right">
                    <ServicePageCardRight 
                    ServiceName="Trainings&Workshops"
                    ServiceDetail="We have started specialized training on below mentioned courses which would spread awareness and need of Developement and cyber security. Ap....."
                    ServiceImage="https://assets.entrepreneur.com/content/3x2/2000/20180829214301-GettyImages-993560700.jpeg?auto=webp&quality=95&crop=2:1&width=400"
                    ServicePageLink="/ServicePage/Trainings&Workshops"
                    />
                </div>
            </div>
        </div>
        
    )
}

export default ServicePage
