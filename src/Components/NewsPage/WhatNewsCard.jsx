import React from "react";
import "./WhatsNewsCard.css"

function WhatNewsCard(props) {
    return (
        <>
            <section className="what_news_card_container">

                
                <div className= "what_news_img_container">
                
                   <figure><img className="what_news_image" src={props.whatNewsImage} /></figure>
               </div>  
            
                    

                <div className="what_news_card_data_section">
                    <button className="what_news_button"> {props.WhatNewsButton} </button>
                    <h4 className="what_news_heading"> {props.WhatNewsHeading} </h4>
                    <h6 className="what_news_date"> {props.WhatNewsDate} </h6>
                    
                </div>


                
            </section>
        </>
    )
}

export default WhatNewsCard;