import React from 'react'
import ServiceCard from './Card/ServiceCard'
import './Services.css'


function Services() {
    return (
        <div className="Services">
            <p className="Services__heading">Our Better <br />Services And Tools.</p>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="Service__serviceCard">
                        <ServiceCard 
                        ServiceName="Grapic"
                        ServiceDetail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        ServiceImage="https://bestdevlist.com/wp-content/uploads/2019/02/Graphic-_Design-400x200.jpg"
                        ServicePageLink="/ServicePage/GraphicDesignPage"
                        />
                        <ServiceCard 
                        ServiceName="ML & AI"
                        ServiceDetail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        ServiceImage="https://softei.com/wp-content/uploads/2020/02/Arm_10-02-2020-400x200-c-default.jpg"
                        ServicePageLink="/ServicePage/ML&AIPage"
                        />
                        <ServiceCard 
                        ServiceName="Cybersecurity"
                        ServiceDetail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        ServiceImage="https://i.pinimg.com/474x/53/7c/e4/537ce444ca00676f55cdcbe9671d6688.jpg"
                        ServicePageLink="/ServicePage/CyberSecurityPage"
                        />
                    </div>
                </div>
                {/* <div class="carousel-item">
                  <img src="https://cdn.wallpapersafari.com/4/6/wsGBdn.jpg" class="d-block w-100" alt="..."/>
                </div> */}
                <div class="carousel-item">
                    <div className="Service__serviceCard">
                        <ServiceCard 
                        ServiceName="Web Development"
                        ServiceDetail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        ServiceImage="https://industryarmymarketing.com/wp-content/uploads/2018/08/wd1-400x200.jpg"
                        ServicePageLink="/ServicePage/WebDevelopmentPage"
                        />
                        <ServiceCard 
                        ServiceName="App Development"
                        ServiceDetail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        ServiceImage="https://assets.entrepreneur.com/content/3x2/2000/20190612193425-GettyImages-1066987316-crop.jpeg?auto=webp&quality=95&crop=2:1&width=400"
                        ServicePageLink="/ServicePage/AppDevelopPage"
                        />
                        <ServiceCard 
                        ServiceName="Others"
                        ServiceDetail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        ServiceImage="https://assets.entrepreneur.com/content/3x2/2000/20180829214301-GettyImages-993560700.jpeg?auto=webp&quality=95&crop=2:1&width=400"
                        ServicePageLink="/ServicePage/OtherPage"
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
