import React from "react";
import "./BlogsCard.css";

function BlogCard(props) {
    return (
        <section  data-aos="flip-down" className="blog_card">

        <div>

            <div>
                <img className="blog_card_image" src={props.imgsrc} alt=""/>
            </div>

            <div className="Blogs_data">

                <h4 className="blog_heading"> {props.BlogHeading} </h4>
                <p className="blog_preview"> {props.blogPreview} </p>

                <div className="blogcard_author_section">

                    <div>
                        <img className="author_img_circle"  src={props.blogAuthor} alt=""/>    
                    </div>   

                    <div>
                        <h4 className="blogger_name"> {props.authorName} </h4>
                        <h6 className="blog_date"> {props.publishDate} </h6>
                        <a className="write_feedback_link" href="#"> Write feedback </a>
                    </div>
                </div>

            </div>

        </div>
    </section>
    )
}

export default BlogCard;