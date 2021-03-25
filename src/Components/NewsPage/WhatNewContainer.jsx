import React from "react";
import "./WhatNewContainer.css";
import WhatNewsCard from "./WhatNewsCard";
import SwipeableTextMobileStepper from "./sliderimg";

function WhatNewContainer() {
  return (
    <>
      <h2 className="whats_new_heading"> WHATS' NEW </h2>

      <section className="what_new_container">
        <div className="what_new_img_container">
          <div className="slider_item_container whats_new_Img">
            <div className="slide_item">
              <figure className="slide_img_container">
                <img
                  className="slider_image what_new_img_size"
                  src="https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940npm"
                />
              </figure>
              <figcaption>
                <button className="slider_button"> SPORTS </button>
                <br />
                <strong className="slider_caption">
                  Harbour amid a Slowen down in singe
                </strong>
              </figcaption>
            </div>
          </div>
        </div>

        <div className="">
          <WhatNewsCard
            whatNewsImage="https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            WhatNewsButton="FASHION"
            WhatNewsHeading="Ratcliffe to be Director of nation talent Trump ignored"
            WhatNewsDate="digiQoles  Jan 10, 2021"
          />
          <WhatNewsCard
            whatNewsImage="https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            WhatNewsButton="FASHION"
            WhatNewsHeading="Ratcliffe to be Director of nation talent Trump ignored"
            WhatNewsDate="digiQoles  Jan 10, 2021"
          />
          <WhatNewsCard
            whatNewsImage="https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            WhatNewsButton="FASHION"
            WhatNewsHeading="Ratcliffe to be Director of nation talent Trump ignored"
            WhatNewsDate="digiQoles  Jan 10, 2021"
          />
          <WhatNewsCard
            whatNewsImage="https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            WhatNewsButton="FASHION"
            WhatNewsHeading="Ratcliffe to be Director of nation talent Trump ignored"
            WhatNewsDate="digiQoles  Jan 10, 2021"
          />
        </div>

        <div className="what_new_container_marge" id="show_hide">
          <div className="social_icon_container">
            <div className="social_icon">
              <div className="facebook_icon">
                <i className="fab fa-facebook-f apsc-facebook"></i>
              </div>

              <div className="social_icon_data">
                <strong>
                  <a href="#">FACEBOOK</a>
                </strong>
                <h6>8467 FOLLWOERS</h6>
              </div>
            </div>

            <div className="social_icon">
              <div className="twitter_icon">
                <i className="fab fa-twitter apsc-twitter"></i>
              </div>

              <div className="social_icon_data">
                <strong>
                  <a href="#">TWITTER</a>
                </strong>
                <h6>8467 FOLLWOERS</h6>
              </div>
            </div>

            <div className="social_icon">
              <div className="instagram_icon">
                <i className="apsc-instagram fab fa-instagram"></i>
              </div>

              <div className="social_icon_data">
                <strong>
                  <a href="#">INSTAGRAM</a>
                </strong>
                <h6>8467 FOLLWOERS</h6>
              </div>
            </div>

            <div className="social_icon">
              <div className="youtube_icon">
                <i className="apsc-youtube fab fa-youtube"></i>
              </div>

              <div className="social_icon_data">
                <strong>
                  <a href="#">YOUTUBE</a>
                </strong>
                <h6>8467 FOLLWOERS</h6>
              </div>
            </div>
          </div>
          <div className="what_new_container_img_single_card">
            <h2 className="whats_new_heading_trending"> TRENDING NEWS </h2>
            <SwipeableTextMobileStepper />
          </div>
        </div>
      </section>

      <div className="what_new_container_marge" id="show_hide2">
        <div className="social_icon_container">
          <div className="social_icon">
            <div className="facebook_icon">
              <i className="fab fa-facebook-f apsc-facebook"></i>
            </div>

            <div className="social_icon_data">
              <strong>
                <a href="#">FACEBOOK</a>
              </strong>
              <h6>8467 FOLLWOERS</h6>
            </div>
          </div>

          <div className="social_icon">
            <div className="twitter_icon">
              <i className="fab fa-twitter apsc-twitter"></i>
            </div>

            <div className="social_icon_data">
              <strong>
                <a href="#">TWITTER</a>
              </strong>
              <h6>8467 FOLLWOERS</h6>
            </div>
          </div>

          <div className="social_icon">
            <div className="instagram_icon">
              <i className="apsc-instagram fab fa-instagram"></i>
            </div>

            <div className="social_icon_data">
              <strong>
                <a href="#">INSTAGRAM</a>
              </strong>
              <h6>8467 FOLLWOERS</h6>
            </div>
          </div>

          <div className="social_icon">
            <div className="youtube_icon">
              <i className="apsc-youtube fab fa-youtube"></i>
            </div>

            <div className="social_icon_data">
              <strong>
                <a href="#">YOUTUBE</a>
              </strong>
              <h6>8467 FOLLWOERS</h6>
            </div>
          </div>

            <h1  className="follow_us_heading"> 
                Follow <br/>
                Us On <br/>
                Social Media!
            </h1>

        </div>


        <div className="what_new_container_img_single_card">
          <h2 className="whats_new_heading_trending"> TRENDING NEWS </h2>
          <SwipeableTextMobileStepper />
        </div>
      </div>
    </>
  );
}
export default WhatNewContainer;
