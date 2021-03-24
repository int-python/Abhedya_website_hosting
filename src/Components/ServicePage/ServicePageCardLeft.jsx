import React from 'react'
import './ServicePageCardLeft.css'

function ServicePageCardLeft({ServiceName, ServiceDetail, ServiceImage, ServicePageLink }) {
    return (
        <div className="ServicePageCardLeft">
            <div className="ServicePageCardLeft__left">
                <img 
                className="ServicePageCardLeft__leftImage"
                src={ServiceImage} 
                alt="" />
            </div>
            <div className="ServicePageCardLeft__right">
                <p className="ServicePageCardLeft__rightHeading">{ServiceName}</p>
                <p className="ServicePageCardLeft__rightDetail">{ServiceDetail}</p>
                <a href={ServicePageLink}>
                    <button className="ServicePageCardLeft__rightButton">Learn More</button>
                </a>
            </div>
        </div>
    )
}

export default ServicePageCardLeft
