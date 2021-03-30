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
        //   offset: 200,
        //   duration: 800,
        //   easing: "ease-in-sine",
        //   delay: 100,
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
                                authorName ="Allan Stanly"
                            />
                        </div>

                        <div>
                            <Author
                                author_img="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                authorName ="Chaitanya k "
                            />
                        </div>
                        
                        <div>
                        <Author
                            author_img="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            authorName ="Sanjib Mittal"
                        />
                        </div>
                        
                        <div>
                        <Author
                            author_img="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            authorName ="Vinay Kabde"
                        />
                        </div>
                        
                        <div>
                        <Author
                            author_img="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            authorName ="Mrs. Shilen"
                        />
                        </div>
                        
                        <div>
                        <Author
                            author_img="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            authorName ="Charisma Narayan"
                        />
                        </div>
                        
                        <div>
                        <Author
                            author_img="https://images.pexels.com/photos/2601620/pexels-photo-2601620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            authorName ="Shreedhara"
                        />
                        </div>

                        <div>
                        <Author
                            author_img="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            authorName ="Allen Stanly Jones"
                        />
                        </div>
                        

                    </div>
                </aside >
                
                <div  className="blogs_card_container">

                <BlogCard
                    imgsrc="https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    BlogHeading = "Looking Into Feature"
                    blogPreview = "The incredible velocity of the world’s industrial output has inspired ongoing advancements in operational technology Both digital transformation and "
                    blogAuthor="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    authorName ="Lalit kumar"
                    publishDate = "10/2/2021"
                />

                 <BlogCard
                    imgsrc="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    BlogHeading = "Public Cloud benifits"
                    blogPreview = "The total cloud computing market worldwide is expected to reach $623.3 billion by 2023. Much of this growth will go toward the public cloud ."
                    blogAuthor="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    authorName ="Sanjib Mittal"
                    publishDate = "9/2/2021"
                />

                 <BlogCard
                    imgsrc="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    BlogHeading = "4 Key Success"
                    blogPreview = "When B2B portals were launched, the focus was for business customers to place and track their orders easily, hence they were very transaction focused ."
                    blogAuthor="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    authorName ="Vinay Kavde"
                    publishDate = "14/2/2021"
                />

                 <BlogCard
                    imgsrc="https://images.pexels.com/photos/530024/pexels-photo-530024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=9400"
                    BlogHeading = "Hyper Scale Front End"
                    blogPreview = "Hyperscalers have taught us that rolling out innovative services for enriching customer experiences is a key differentiator and demanding customers  want a cloud like experienc. irrespective of scale. CIOs "
                    blogAuthor="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    authorName ="Mayur Shah"
                    publishDate = "1/3/2021"
                />

                 <BlogCard
                    imgsrc="https://images.pexels.com/photos/259006/pexels-photo-259006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    BlogHeading = "Powering Intelligence"
                    blogPreview = "The digital revolution is here, transforming every aspect of our lives—at home and in business. The rapid advancement of technology is compelling organizations to reimagine their businesses in myriad ways . "
                    blogAuthor="https://images.pexels.com/photos/2601620/pexels-photo-2601620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    authorName ="Shreedhara Padmanabhumi"
                    publishDate = "1/6/2021"
                />

                 <BlogCard
                    imgsrc="https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    BlogHeading = "Intelligence Approach"
                    blogPreview = "With ever-increasing demand for accurate and consistent data to power analytics, artificial intelligence (AI), and automation initiatives, organizations are quickly moving away . "
                    blogAuthor="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    authorName ="Charisma Narayan"
                    publishDate = "11/3/2021"
                />
                <button data-aos="flip-right" className="see_more_blogs"> More Blogs </button>
                </div>

            </section>


        </>
    )
}

export default BlogsContainer;