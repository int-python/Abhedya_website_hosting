import React from "react";
import "./NewsSlider.css";

function NewsSlider() {
  return (
    <>
      <section className="slider_grid_container">
        <div className="slider_item_container">
          <div className="slide_item">
          <figure className="slide_img_container">
            <img
              className="slider_image"
              src="https://i.gadgets360cdn.com/large/realme_8_pro_image_gadgets_360_1616679592263.jpg?downsize=950:*&output-quality=80&output-format=webp"
            />
            </figure>
            <figcaption>
              <button className="slider_button"> TECH </button>
              <br />
              <strong className="slider_caption">
              Realme 8-Series 5G Variants Launch in India ‘Soon’
              </strong>
            </figcaption>
          </div>
        </div>

        <div className="slider_item_container">
          <div className="slide_item">
          <figure className="slide_img_container">
            <img
              className="slider_image"
              src="https://d1vwxdpzbgdqj.cloudfront.net/assets/iit-madras/iit-madras-cover-3558cf291a05032922ecb5c9ea3897f6a63d9477eef4f2634cae78cda89f81ac.png"
              />
              </figure>
            <figcaption>
              <button className="slider_button"> STUDY </button>
              <br />
              <strong className="slider_caption">
                    Master Cloud, IoT from IIT Madras & Great Learning
              </strong>
            </figcaption>
          </div>
        </div>

        <div className="slider_item_container">
          <div className="slide_item">
          <figure className="slide_img_container">
            <img
              className="slider_image"
              src="https://i.gadgets360cdn.com/large/oneweb_roscosmos_1616663642031.jpg?downsize=950:*&output-quality=80&output-format=webp"
              />
              </figure>
            <figcaption>
              <button className="slider_button"> TECH </button>
              <br />
              <strong className="slider_caption">
                   Russia Launches 36 UK Tel. and Internet Satellites
              </strong>
            </figcaption>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsSlider;
