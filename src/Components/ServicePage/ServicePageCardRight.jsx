import React from 'react'
import './ServicePageCardRight.css'

function ServicePageCardRight({ServiceName, ServiceDetail, ServiceImage, ServicePageLink }) {
    return (
        <div className="ServicePageCardRight">
            <div className="ServicePageCardRight__left">
                <p className="ServicePageCardRight__leftHeading">{ServiceName}</p>
                <p className="ServicePageCardRight__leftDetail">{ServiceDetail}</p>
                <a href={ServicePageLink}>
                    <button className="ServicePageCardRight__leftButton">Learn More</button>
                </a>
            </div>
            <div className="ServicePageCardRight__right">
                <img 
                className="ServicePageCardRight__rightImage"
                src={ServiceImage} 
                alt="" 
                />
            </div>
        </div>
    )
}

export default ServicePageCardRight
