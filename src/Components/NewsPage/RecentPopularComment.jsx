import React from "react";
import "./RecentPopularComment.css";
import CommentCard from "./CommentCard";

function RecentPopularComment() {
  return (
    <>
      <section>

        <h2 className="recent_popular_comment_heading">RECENT POPULAR COMMENT</h2>

        <div>
            <CommentCard
                commentImg= "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                commentHeading= "FASHION"
                commentText= "Ratcliffe to be Director of nation talent"
                commentDate= "digiQoles  Jan 10, 2021"
            />
            <CommentCard
                commentImg= "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                commentHeading= "FASHION"
                commentText= "Ratcliffe to be Director of nation talent"
                commentDate= "digiQoles Jan 10, 2021"
            />
            <CommentCard
                commentImg= "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                commentHeading= "FASHION"
                commentText= "Ratcliffe to be Director of nation talent"
                commentDate= "digiQoles Jan 10, 2021"
            />
            {/* <CommentCard
                commentImg= "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                commentHeading= "FASHION"
                commentText= "Ratcliffe to be Director of nation talent"
                commentDate= "digiQoles Jan 10, 2021"
            />
            <CommentCard
                commentImg= "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                commentHeading= "FASHION"
                commentText= "Ratcliffe to be Director of nation talent"
                commentDate= "digiQoles Jan 10, 2021"
            /> */}
        </div>
        
      </section>
    </>
  );
}

export default RecentPopularComment;
