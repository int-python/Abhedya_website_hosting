import React from "react";
import "./ImgFlipCard.css";
import ImageFlipContainer from "./ImageFlipContainer";

function ImgFlipCard(props) {
  return (
    <>
      <div data-aos="flip_right">
        <div class="flip_card_container">
          <div class="flip_card_front">
            <img
              className="flip_img"
              src={props.flipImgsrc}
            />
          </div>
          <div class="flip_card_back">
            <h6> {props.flipImgHeading}</h6>
            <p>
              {props.flipImgText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ImgFlipCard;