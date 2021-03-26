import React from 'react'
import './Footer.css'
import { SiConfluence } from 'react-icons/si';
import { Link } from "react-router-dom";



function Footer() {
    return (
        <div className="Footer">
            <div className="Footer__containt">
                <div className="Footer__containt1">
                    <Link to="/" className="Footer__containt1Logo">
                        <a><SiConfluence /> Abhedya</a>
                    </Link>
                    <a href="/ServicePage" className="Footer__containt1Item">Terms Of Services</a>
                    <a href="/Privacy_Policy" className="Footer__containt1Item">Privacy Policy</a>
                    {/* <a href="#" className="Footer__containt1Item">Deal Registration</a> */}
                </div>
                <div className="Footer__containt2">
                    <a href="/ServicePage" className="Footer__containt2Title">Services</a>
                    {/* <a href="#" className="Footer__containt2Item">Safe</a> */}
                    <a href="#" className="Footer__containt2Item">People</a>
                    <a href="/Privacy_Policy" className="Footer__containt2Item">Policy</a>
                    <a href="/ServicePage" className="Footer__containt2Item">Technology</a>
                    {/* <a href="#" className="Footer__containt2Item">CSP</a> */}
                    {/* <a href="#" className="Footer__containt2Item">Third Party</a> */}
                </div>
                <div className="Footer__containt3">
                    <a href="#" className="Footer__containt3Title">Company</a>
                    <a href="#" className="Footer__containt3Item">About Us</a>
                    {/* <a href="#" className="Footer__containt3Item">Customers</a> */}
                    {/* <a href="#" className="Footer__containt3Item">Career</a> */}
                    {/* <a href="#" className="Footer__containt3Item">Channels</a> */}
                    <a href="/NewsPage" className="Footer__containt3Item">News</a>
                    {/* <a href="#" className="Footer__containt3Item">Press Release</a> */}
                </div>
                <div className="Footer__containt4">
                    <a href="#" className="Footer__containt4Title">Resources</a>
                    {/* <a href="#" className="Footer__containt4Item">Use Cases</a> */}
                    {/* <a href="#" className="Footer__containt4Item">Whitepapers</a> */}
                    {/* <a href="#" className="Footer__containt4Item">Videos</a> */}
                    {/* <a href="#" className="Footer__containt4Item">Free Tools</a> */}
                    {/* <a href="#" className="Footer__containt4Item">Posters</a> */}
                    <a href="/BlogPage" className="Footer__containt4Item">Blog</a>
                </div>
                {/* <div className="Footer__containt5">
                    <a href="#" className="Footer__containt5Title">Contact Us</a>
                </div> */}
            </div>
        </div>
    )
}

export default Footer
