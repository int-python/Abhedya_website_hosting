import React from "react";
import "./Subscribe.css"

function Subscribe() {
  return(
    <>
      <section className="subscribe_blogs_container">
        <div data-aos="flip-left">
          <h2  className="subscribe_txt">
            Subscribe <br/> to get notification on latest blogs!!
          </h2>
        </div>

        <div>
         <div data-aos="zoom-in" className="subscribe_inputs">
            <input type="text" name="name" id="name" placeholder="Enter Your Name" />
            <input type="email" name="email" id="email" placeholder=" Enter Email Here"/>
            <input type="submit" id="submit" value="subscribe"/>
         </div>
        </div>
      </section>
    </>
  )
}

export default Subscribe;