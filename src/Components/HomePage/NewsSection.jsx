import React from 'react'
import './NewsSection.css'


function NewsSection() {
    return (
        <div className="NewsSection">
            <p className="NewsSection__heading">News And <br /> Events.</p>
            <div className="NewsSection__news">
                <p className="NewsSection__newsListItem">Capture The Flag (CTF) - 2021 Let's Explore the Exciting World of Cyber Securiity<hr /></p>
                <p className="NewsSection__newsListItem">Abhedya is Event Patner in  this Capture The Flag (CTF) - 2021 this will help you to enhance your skills of Ethical Hacking<hr /></p>
                <p className="NewsSection__newsListItem">Capture The Flag will be held on March 27 2021, Saturday, 09:00 AM to 05:00 PM IST <a href="http://bit.ly/DCSCTF2021">Click to Apply</a><hr /></p>
            </div>
            <a href="/NewsPage" className="NewsSectionMoreButton">More..</a>
        </div>
    )
}

export default NewsSection
