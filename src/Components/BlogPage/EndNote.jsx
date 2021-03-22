import React from "react";
import "./End_note.css";

function EndNote() {
   return (
    <>
        <section className="wellcome_notes_container">
            <div>
                <figure className="earth_container">
                   <video src="./earth.mp4" autoPlay="true"></video>
                   <figcaption className="earth_txt"> FEEL SAFE </figcaption>
                </figure>
            </div>
            <div>
                <h2 className="wellcome_note_heading"> WELCOME TO ABHEDYA !! </h2>
                <h3 className="wellcome_note"> THE WORLD, <br/> WHERE YOU CAN FEEL <br/> <span> SAFE! </span> </h3>
            </div>
        </section>
    </>
   )
}

export default EndNote;