import react from "react";
import Particles from "./Particles";
import LatestBlog from "./LatestBlog";
import BlogsContainer from "./BlogsContainer";
import Subscribe from "./Subscribe";

function Blog() {
   return(
    <div style={{overflow:"hidden"}}>
        <Particles/>
        <LatestBlog/>
        {/* <BlogsContainer/> */}
        <Subscribe/>
    </div>
   )

}

export default Blog;