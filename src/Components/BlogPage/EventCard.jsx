import React from "react";
import "./EventCard.css";
import event from './images/event.jpeg';
import event_link from './images/event_link.PNG';

function EventCard () {
    return (
        <>
            <section className="event_card_container ">
                <img className="event_img" src={event} alt="image"/>
                <a href="#">
                    <img className="event_registration_link" src={event_link} alt="event_registration_link"/>
                </a>
                {/* <a className="event_registor_button" href="#">REGISTOR NOW</a> */}
            </section>
        </>
    );
}
export default EventCard;