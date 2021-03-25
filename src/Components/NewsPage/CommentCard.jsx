import React from "react";
import "./CommentCard.css";

function CommentCard (props) {
    return (
        <>
           <section className="comment_card_container">
              <div>
              <div className= "comment_img_container">

                 <span>1</span>
                 <figure>
                 <img className="comment_img" src={props.commentImg} /></figure>
                 </div>  
                
              </div>
      

              <div className="comment_data">
     
                 <a href="#"> {props.commentHeading}</a>
                 <h6> {props.commentText}</h6>
                 <span> {props.commentDate}</span>
            </div>
              
           </section>
        </>
    );
}
export default CommentCard;