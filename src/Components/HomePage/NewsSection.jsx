import React from 'react'
import './NewsSection.css'


function NewsSection() {
    return (
        <div className="NewsSection">
            <p className="NewsSection__heading">News And <br /> Events.</p>
            <div className="NewsSection__news">
                <p className="NewsSection__newsListItem">printing and typesetting  industry. Lorem Ipsum has been the indus-<br/>try’s  standard dummy text ever since the 1500s, when an  unknown <br/>printer took a  galley. <hr /></p>
                <p className="NewsSection__newsListItem">printing and typesetting  industry. Lorem Ipsum has been the indus-<br/>try’s  standard dummy text ever since the 1500s, when an  unknown <br/>printer took a  galley. <hr /></p>
                <p className="NewsSection__newsListItem">printing and typesetting  industry. Lorem Ipsum has been the indus-<br/>try’s  standard dummy text ever since the 1500s, when an  unknown <br/>printer took a  galley. <hr /></p>
                <p className="NewsSection__newsListItem">printing and typesetting  industry. Lorem Ipsum has been the indus-<br/>try’s  standard dummy text ever since the 1500s, when an  unknown <br/>printer took a  galley. <hr /></p>
            </div>
            <a href="/NewsPage" className="NewsSectionMoreButton">More..</a>
        </div>
    )
}

export default NewsSection
