import React, { useEffect } from "react";
import AOS from "aos";
import BlogCard from "./BlogsCard";
import "aos/dist/aos.css";
import "./BlogsContainer.css"
import { MdSearch } from "react-icons/md";
import Author from "./Author";

function BlogsContainer() {

    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
        });
        AOS.refresh();
      }, []);

    
    return (
        <>
            <section  className="blogs_container">

                <aside className="side_panel">
                    <section className="search_blog_container">
                        <div>
                            <input type="search" name="#" id="blog_search" placeholder=" Search Blogs Here!! "/> 
                        </div>
                        <div>
                            <MdSearch style={{color: "#e6ffe6", fontSize:"1.8rem", marginTop:"0.2rem", marginLeft :"-1.4rem" }}/>
                        </div>
                    </section>
                    <h4 className="filter_h4"> Filters </h4>
                    <button> Filter By Popularity </button>
                    <button> Filter By Date </button>
                    <button> Filter By Catagories </button>
                        <h4 className="filter_by_author_h4"> Filter By Author </h4>

                    <div className="blog_authors_filter">
                    
                        <div>
                            <Author
                                author_img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                authorName ="Mr. abc"
                            />
                        </div>

                        <div>
                            <Author
                                author_img="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                authorName ="Mrs. abc"
                            />
                        </div>
                        
                        <div>
                        <Author
                            author_img="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            authorName ="Mr. abc"
                        />
                        </div>
                        
                        <div>
                        <Author
                            author_img="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            authorName ="Mr. abc"
                        />
                        </div>
                        
                        <div>
                        <Author
                            author_img="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            authorName ="Mrs. abc"
                        />
                        </div>
                        
                        <div>
                        <Author
                            author_img="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            authorName ="Mr. abc"
                        />
                        </div>
                        
                        <div>
                        <Author
                            author_img="https://images.pexels.com/photos/2601620/pexels-photo-2601620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            authorName ="Mrs. abc"
                        />
                        </div>

                        <div>
                        <Author
                            author_img="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            authorName ="Mr. abc"
                        />
                        </div>
                        

                    </div>
                </aside >
                
                <div  className="blogs_card_container">

                <BlogCard
                    imgsrc="https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    BlogHeading = "Dummy Heading"
                    blogPreview = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nesciunt perspiciatis, reprehenderit delectus enim accusantium quaerat"
                    blogAuthor="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    authorName ="Dummy Name"
                    publishDate = "11/3/2021"
                />

                 <BlogCard
                    imgsrc="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    BlogHeading = "Dummy Heading"
                    blogPreview = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nesciunt perspiciatis, reprehenderit delectus enim accusantium quaerat"
                    blogAuthor="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    authorName ="Dummy Name"
                    publishDate = "11/3/2021"
                />

                 <BlogCard
                    imgsrc="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    BlogHeading = "Dummy Heading"
                    blogPreview = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nesciunt perspiciatis, reprehenderit delectus enim accusantium quaerat"
                    blogAuthor="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    authorName ="Dummy Name"
                    publishDate = "11/3/2021"
                />

                 <BlogCard
                    imgsrc="https://images.pexels.com/photos/530024/pexels-photo-530024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=9400"
                    BlogHeading = "Dummy Heading"
                    blogPreview = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nesciunt perspiciatis, reprehenderit delectus enim accusantium quaerat"
                    blogAuthor="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    authorName ="Dummy Name"
                    publishDate = "11/3/2021"
                />

                 <BlogCard
                    imgsrc="https://images.pexels.com/photos/259006/pexels-photo-259006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    BlogHeading = "Dummy Heading"
                    blogPreview = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nesciunt perspiciatis, reprehenderit delectus enim accusantium quaerat"
                    blogAuthor="https://images.pexels.com/photos/2601620/pexels-photo-2601620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    authorName ="Dummy Name"
                    publishDate = "11/3/2021"
                />

                 <BlogCard
                    imgsrc="https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    BlogHeading = "Dummy Heading"
                    blogPreview = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nesciunt perspiciatis, reprehenderit delectus enim accusantium quaerat"
                    blogAuthor="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    authorName ="Dummy Name"
                    publishDate = "11/3/2021"
                />
                <button data-aos="flip-right" className="see_more_blogs"> More Blogs </button>
                </div>

            </section>


        </>
    )
}

export default BlogsContainer;