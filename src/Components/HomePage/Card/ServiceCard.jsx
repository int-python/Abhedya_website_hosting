import React from 'react'
import './ServiceCard.css'
import { Link } from "react-router-dom";


function ServiceCard({ServiceImage, ServiceName, ServiceDetail, ServicePageLink}) {
    return (
        <div className="ServiceCard">
            <img 
            className="ServiceCard__img"
            src={ServiceImage} 
            alt="" 
            />
            <p className="ServiceCard__serviceName">{ServiceName}</p>
            <p className="ServiceCard__serviceDetail">{ServiceDetail}</p>
            <a href={ServicePageLink}>
                <button className="ServiceCard__learnMore">Learn More</button>
            </a>
        </div>
    )
}

export default ServiceCard
