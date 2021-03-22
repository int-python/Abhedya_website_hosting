import react from "react";
import Particles from "./Particles";
import LatestBlog from "./LatestBlog";
import BlogsContainer from "./BlogsContainer";
import Subscribe from "./Subscribe";

function Blog() {
   return(
    <>
        <Particles/>
        <LatestBlog/>
        <BlogsContainer/>
        <Subscribe/>
    </>
   )

}

export default Blog;