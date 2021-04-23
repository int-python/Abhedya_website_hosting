import React from 'react'
import './ContactUsSection.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function ContactUsSection() {
    return (
        <div className="ContactUsSection">
            <div className="ContactUsSection__left">
                <p className="ContactUsSection__leftHeading">Contact Us</p>
                <p className="ContactUsSection__leftAddress">G-01, Shubh Mangal Appt,<br/> Jyoti Nagar, Girwa, Shobhagpura, <br/>Udaipur Udaipur RJ 313001 IN <br/><br/>Call-Us - +91 82786 77705<br />Mon – Fri: 9:00 am – 8:00 pm,<br />Sat – Sun: 9:00 am – 10 pm</p>
                <a href="mailto:" className="ContactUsSection__leftMail">info@abhedya.in</a><br />
                <a href="https://www.facebook.com/abhedyatech" className="ContactUsSection__leftFbIcon"><FaFacebookF /></a>
                <a href="https://www.instagram.com/abhedyatech/" className="ContactUsSection__leftIgIcon"><FaInstagram /></a>
                <a href="https://twitter.com/abhedyatech" className="ContactUsSection__leftTwIcon"><FaTwitter /></a>
                <a href="https://www.linkedin.com/company/abhedya-futuristic-solutions/?originalSubdomain=in" className="ContactUsSection__leftLiIcon"><FaLinkedinIn /></a>
            </div>
            <div className="ContactUsSection__right">
                <input type="text" className="ContactUsSection__rightName" placeholder="Name" /><br/>
                <input type="text" className="ContactUsSection__rightMail" placeholder="Email" /><br/>
                <textarea cols="30" rows="4" className="ContactUsSection__rightMessage" placeholder="Message" /><br />
                <button className="ContactUsSection__rightButton">Connect With Us</button>
            </div>
        </div>
    )
}

export default ContactUsSection
