import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Latest_blog.css"
import "./Slider.css";
import BlogCard from "./BlogsCard";
import SwipeableTextMobileStepper from "./Slider";
import EventCard from "./EventCard";
import "./Slider";

function LatestBlog() {

    useEffect(() => {
        AOS.init({
        //   offset: 200,
        //   duration: 800,
        //   easing: "ease-in-sine",
        //   delay: 100,
        });
        AOS.refresh();
      }, []);

    return (
        <>
            <section className="latest_blogs_container">
                
                <div className="wellcome_note" data-aos="flip-left">
                    <div>
                        <h1 className="we_are_happy_heading"> We are happy! <br/> to see you <br/> in  <br/> our Blogs section </h1>
                        <div className="event_card_holder">
                            <EventCard/>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div>
                        <div className="slider_container">
                            <h1 className="latest_blog_heading"> Latest Blog! </h1>
                            <SwipeableTextMobileStepper className="blog_slider"/>
                        </div>

                        {/* <div className="latest_blogs_card_section">
                            <BlogCard
                                imgsrc="https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                BlogHeading = "Steps for partnership"
                                blogPreview = "Collaboration is essential in a world led by a constant quest for innovation. Large enterprises and startups need each other to survive and thrive in this rapidly changing digital landscape . "
                                blogAuthor =    "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                authorName ="Chaitanya K Naga"
                                publishDate = "2/3/2021"
                            />

                            <BlogCard
                                imgsrc="https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                BlogHeading = "Cyber Thread Hunting"
                                blogPreview = "Cybersecurity in a multi-cloud environment has become more challenging than ever. Cloud-native technologies have added to the prevailing complexities ."
                                blogAuthor = "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                authorName ="Allen Stunly Jones"
                                publishDate = "8/3/2021"
                            />
                        </div> */}
                    </div>
                </div>

               
            </section>
        </>
    )
}

export default LatestBlog;