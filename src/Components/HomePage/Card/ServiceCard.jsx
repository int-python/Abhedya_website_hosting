import React from 'react'
import './ServiceCard.css'
import { Link } from "react-router-dom";


function ServiceCard() {
    return (
        <div className="ServiceCard">
            <img 
            className="ServiceCard__img"
            src="https://www.bergerpaints.com/blog/wp-content/uploads/2020/07/Booking-through-mobile-app-150x150.png" 
            alt="" 
            />
            <p className="ServiceCard__serviceName">Graphic Design</p>
            <p className="ServiceCard__serviceDetail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <button className="ServiceCard__learnMore">Learn More</button>
        </div>
    )
}

export default ServiceCard
