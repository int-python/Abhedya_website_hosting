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
              src="https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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

        <div className="slider_item_container">
          <div className="slide_item">
          <figure className="slide_img_container">
            <img
              className="slider_image"
              src="https://hdfreewallpaper.net/wp-content/uploads/2019/03/tech-wallpaper-4k-download.png"
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

        <div className="slider_item_container">
          <div className="slide_item">
          <figure className="slide_img_container">
            <img
              className="slider_image"
              src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
      </section>
    </>
  );
}

export default NewsSlider;
