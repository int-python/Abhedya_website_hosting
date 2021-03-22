import React from "react";
import "./Author.css";

function Author(props) {

    return(
        <>
            <section className="author_img_container">
                <div>
                    <img className="author_img" src={props.author_img} alt="author image"/>
                </div>

                <div>
                    <span className="author_name">  {props.authorName} </span>
                </div>
            </section>
        </>
)

}

export default Author;