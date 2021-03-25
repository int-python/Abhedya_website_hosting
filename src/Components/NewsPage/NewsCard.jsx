import React from "react";
import "./NewsCard.css"

function NewsCard(props) {
    return (
        <>
            <section className="news_card_container">

                
                <div className= "news_img_container">
                
                   <figure><img className="news_image" src={props.newsimage} /></figure>
               </div>  
            
                    

                <div className="news_card_data_section">
                    <button className="news_button"> {props.newsbutton} </button>
                    <h4 className="news_heading"> {props.newsheading} </h4>
                    <h6 className="news_date"> {props.newsdate} </h6>
                    <p className="news_preview"> {props.newspreview} </p>
                    <a className="news_link" href={props.newslink}>Read more</a>

                </div>

                
            </section>
        </>
    )
}

export default NewsCard;