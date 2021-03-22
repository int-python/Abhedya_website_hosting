import React from 'react'
import './ContactUsSection.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function ContactUsSection() {
    return (
        <div className="ContactUsSection">
            <div className="ContactUsSection__left">
                <p className="ContactUsSection__leftHeading">Contact Us</p>
                <p className="ContactUsSection__leftAddress">Company Add., 123-456-7890<br />Mon – Fri: 9:00 am – 8:00 pm,<br />Sat – Sun: 9:00 am – 10 pm</p>
                <a href="mailto:" className="ContactUsSection__leftMail">contacts@abhedya.in</a><br />
                <a href="" className="ContactUsSection__leftFbIcon"><FaFacebookF /></a>
                <a href="" className="ContactUsSection__leftIgIcon"><FaInstagram /></a>
                <a href="" className="ContactUsSection__leftTwIcon"><FaTwitter /></a>
                <a href="" className="ContactUsSection__leftLiIcon"><FaLinkedinIn /></a>
            </div>
            <div className="ContactUsSection__right">
                <input type="text" className="ContactUsSection__rightName" placeholder="Name" /><br/>
                <input type="text" className="ContactUsSection__rightMail" placeholder="Email" /><br/>
                <textarea cols="30" rows="4" className="ContactUsSection__rightMessage" placeholder="Message" /><br />
                <button className="ContactUsSection__rightButton">Submit</button>
            </div>
        </div>
    )
}

export default ContactUsSection