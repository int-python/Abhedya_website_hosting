import React from 'react'
import ServiceCard from './Card/ServiceCard'
import './Services.css'


function Services() {
    return (
        <div className="Services">
            <p className="Services__heading">Our Services</p>
            <div id="carouselExampleFade" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="Service__serviceCard">
                        <ServiceCard 
                        ServiceName="Grapic Design"
                        ServiceDetail="Graphic design is a craft where professionals create visual content to communicate messages. At Abhedya, by applying visual hierarchy and....."
                        ServiceImage="https://bestdevlist.com/wp-content/uploads/2019/02/Graphic-_Design-400x200.jpg"
                        ServicePageLink="/ServicePage/GraphicDesignPage"
                        />
                        <ServiceCard 
                        ServiceName="ML & AI"
                        ServiceDetail="Abhedya is the leading end-to-end enterprise AI platform that automates and accelerates every step of your path from data to value Artifi....."
                        ServiceImage="https://softei.com/wp-content/uploads/2020/02/Arm_10-02-2020-400x200-c-default.jpg"
                        ServicePageLink="/ServicePage/ML&AIPage"
                        />
                        <ServiceCard 
                        ServiceName="Cybersecurity"
                        ServiceDetail="We ensure that your application is free from security bugs that could potentially damage your business and put your data at risk....."
                        ServiceImage="https://i.pinimg.com/474x/53/7c/e4/537ce444ca00676f55cdcbe9671d6688.jpg"
                        ServicePageLink="/ServicePage/CyberSecurityPage"
                        />
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="Service__serviceCard">
                        <ServiceCard 
                        ServiceName="Web Development"
                        ServiceDetail="Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, wo....."
                        ServiceImage="https://industryarmymarketing.com/wp-content/uploads/2018/08/wd1-400x200.jpg"
                        ServicePageLink="/ServicePage/WebDevelopmentPage"
                        />
                        <ServiceCard 
                        ServiceName="App Development"
                        ServiceDetail="App development is the process of creating apps that run on any mobile platform: Android and iOS The app design is created according to the ....."
                        ServiceImage="https://assets.entrepreneur.com/content/3x2/2000/20190612193425-GettyImages-1066987316-crop.jpeg?auto=webp&quality=95&crop=2:1&width=400"
                        ServicePageLink="/ServicePage/AppDevelopPage"
                        />
                        <ServiceCard 
                        ServiceName="Trainings/Workshops"
                        ServiceDetail="We have started specialized training on below mentioned courses which would spread awareness and need of Developement and cyber security. Ap....."
                        ServiceImage="https://assets.entrepreneur.com/content/3x2/2000/20180829214301-GettyImages-993560700.jpeg?auto=webp&quality=95&crop=2:1&width=400"
                        ServicePageLink="/ServicePage/Trainings&Workshops"
                        />
                    </div>
                </div>
                
              </div>
              <button class="carousel-control-prev pre__button" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next next__button" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
        </div>
    )
}

export default Services
