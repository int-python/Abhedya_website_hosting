import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Latest_blog.css"
import "./Slider.css";
import BlogCard from "./BlogsCard";
import SwipeableTextMobileStepper from "./Slider";
import "./Slider"

function LatestBlog() {

    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 800,
          easing: "ease-in-sine",
        //   delay: 100,
        });
        AOS.refresh();
      }, []);

    return (
        <>
            <section className="latest_blogs_container">
                
                <div className="wellcome_note" data-aos="flip-left">
                    <div>
                        <h1> We are happy! <br/> to see you <br/> in  <br/> our Blogs section </h1>
                    </div>
                </div>
                
                <div data-aos="zoom-in-up">
                    <div>
                        <div className="slider_container">
                            <h1 className="latest_blog_heading"> Latest Bolg! </h1>
                            <SwipeableTextMobileStepper className="blog_slider"/>
                        </div>

                        <div className="latest_blogs_card_section">
                            <BlogCard
                                imgsrc="https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                BlogHeading = "Dummy Heading"
                                blogPreview = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nesciunt perspiciatis, reprehenderit delectus enim accusantium quaerat"
                                blogAuthor =    "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                authorName ="Dummy Name"
                                publishDate = "11/3/2021"
                            />

                            <BlogCard
                                imgsrc="https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                BlogHeading = "Dummy Heading"
                                blogPreview = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nesciunt perspiciatis, reprehenderit delectus enim accusantium quaerat"
                                blogAuthor = "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                authorName ="Dummy Name"
                                publishDate = "11/3/2021"
                            />
                        </div>
                    </div>
                </div>

               
            </section>
        </>
    )
}

export default LatestBlog;