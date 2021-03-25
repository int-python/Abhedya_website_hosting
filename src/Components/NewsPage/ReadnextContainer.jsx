import React from "react";
import MoreNews from "./MoreNews";
import RecentPopularComment from "./RecentPopularComment";
import "./ReadnextContainer.css";
import ImageFlipContainer from "./ImageFlipContainer";

function ReadnextContainer() {
  return (
    <>
      <section className="readnext_container">
        <div>
          <MoreNews />
        </div>

        <div>
             {/* <RecentPopularComment/> */}
             {/* <ImageFlipContainer/> */}
        </div>
      </section>
    </>
  );
}

export default ReadnextContainer;
