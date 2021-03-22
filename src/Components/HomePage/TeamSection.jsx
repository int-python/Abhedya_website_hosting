import React from 'react'
import TeamSectionCard from './Card/TeamSectionCard'
import './TeamSection.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function TeamSection() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <div className="TeamSection">
            <p className="TeamSection__heading">Our Expert<br />Team.</p>
            <div className="TeamSection__slider">
                <Slider {...settings}>
                    <div className="TeamSection__sliderCard">
                        <TeamSectionCard />
                    </div>
                    <div className="TeamSection__sliderCard">
                        <TeamSectionCard />
                    </div>
                    <div className="TeamSection__sliderCard">
                        <TeamSectionCard />
                    </div>
                    <div className="TeamSection__sliderCard">
                        <TeamSectionCard />
                    </div>
                    <div className="TeamSection__sliderCard">
                        <TeamSectionCard />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default TeamSection
