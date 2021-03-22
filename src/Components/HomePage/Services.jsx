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
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                    </div>
                </div>
                {/* <div class="carousel-item">
                  <img src="https://cdn.wallpapersafari.com/4/6/wsGBdn.jpg" class="d-block w-100" alt="..."/>
                </div> */}
                <div class="carousel-item">
                    <div className="Service__serviceCard">
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
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
