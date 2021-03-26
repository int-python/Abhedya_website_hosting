import React from "react";
import "./EventCard.css";
import Event from '../../Assets/Event.jpg';
function EventCard () {
    return (
        <>
            <section className="event_card_container ">
                <img className="event_img" src={Event} alt="event image"/>
                <a className="event_registor_button" href="http://bit.ly/DCSCTF2021">REGISTOR NOW</a>
            </section>
        </>
    );
}
export default EventCard;