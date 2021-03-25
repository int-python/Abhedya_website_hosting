import React, { useEffect } from "react";
import "./flowchart.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Flowchart() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="show_hideone">
        <div className="flowcontainer">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <div className="heading">
              <h3>
                How Does We <br />
                Work...
              </h3>
            </div>
          </div>

          <section className="flowchart">
            <div data-aos="zoom-out-right">
              <div>
                <p className="msgbox_one">PLANNING</p>
                <div className="Mesage_box">
                  <p>
                    First we will gather sufficient information about the
                    business, then we will create sitemaps and wireframes. A
                    sitemap is made with the information collected in the first
                    stage. A wireframe provides a visual description of a site
                    and also decides the other functions and features. This
                    function includes login, email subscription, admin, live
                    chat, and so much more.
                  </p>
                  <span className="message_box_end"></span>
                </div>
              </div>
            </div>
            <div className="flowchart_pole start_pole"></div>
            <div data-aos="zoom-out-left">
              <div>
                <p className="msgbox_two ">DESIGNING</p>
                <div className="Mesage_box_two">
                  <p>
                    Your App design is a key part of the success of your online
                    business. The app design is created according to the target
                    audience. Other things to keep in mind are a theme, colour
                    contract, where to place text, images, videos, etc. The
                    design layout will structure your page in a systematic
                    manner so that it would look appealing.
                  </p>
                  <span className="message_box_endtwo"></span>
                </div>
              </div>
            </div>
          </section>
          <section className="flowchart">
            <div data-aos="zoom-out-right">
              <div>
                <p className="msgbox_one long_txt">DEVELOPMENT</p>
                <div className="Mesage_box">
                  <p>
                    In this stage, the design of your app is now under
                    developers. An App developer will use codes on the site to
                    make it function and run smoothly. It is the most crucial
                    step in development as the graphic design stage comes to
                    life. Most of the time, the landing or main page is created
                    first, and then all other web pages are added, as per the
                    site hierarchy created as mentioned in the sitemap.
                  </p>
                  <span className="message_box_end"></span>
                </div>
              </div>
            </div>
            <div className="flowchart_pole pole_end"></div>
            <div data-aos="zoom-out-left">
              <div>
                <p className="msgbox_two long_txt">TESTING</p>
                <div className="Mesage_box_two">
                  <p>
                    It is another routine part of the App development process.
                    Every page and links and forms are tested before launching
                    the site to make sure nothing is broken. In this stage, your
                    app is tested for several things including- • App speed •
                    Functional tesing • Multiple screen tests
                  </p>
                  <span className="message_box_endtwo"></span>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <section className="flowchart">
          <div>
            <p className="msgbox_one long_txt">
              Final Ideas <br /> & Art Work
            </p>
            <div className="Mesage_box">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                neque libero officiis ab quos delectus pariatur eaque animi illo
                nesciunt, excepturi iste sunt dolores molestiae accusamus alias
                in. Nemo, assumenda.
              </p>
              <span className="message_box_end"></span>
            </div>
          </div>

          <div className="flowchart_pole pole_end"></div>

          <div>
            <p className="msgbox_two">Production Printing</p>
            <div className="Mesage_box_two">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                neque libero officiis ab quos delectus pariatur eaque animi illo
                nesciunt, excepturi iste sunt dolores molestiae accusamus alias
                in. Nemo, assumenda.
              </p>
              <span className="message_box_endtwo "></span>
            </div>
          </div>
        </section> */}
      </div>
      <div className="show_hide">
        <div
          className="flowechart_two_container"
          style={{
            display: "flex",
          }}
        >
          <div className="pole2"> </div>
          <div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
            >
              <div className="heading">
                <h3>
                  How Does We <br />
                  Work...
                </h3>
              </div>
            </div>

            <div>
              <div data-aos="zoom-out-left">
                <div>
                  <p className="msgbox_two">Briefing</p>
                  <div className="Mesage_box_two">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione neque libero officiis ab quos delectus pariatur
                      eaque animi illo nesciunt, excepturi iste sunt dolores
                      molestiae accusamus alias in. Nemo, assumenda.
                    </p>
                    <span className="message_box_endtwo"></span>
                  </div>
                </div>
              </div>

              <div></div>
              <div data-aos="zoom-out-left">
                <div>
                  <p className="msgbox_two">Designing</p>
                  <div className="Mesage_box_two">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione neque libero officiis ab quos delectus pariatur
                      eaque animi illo nesciunt, excepturi iste sunt dolores
                      molestiae accusamus alias in. Nemo, assumenda.
                    </p>
                    <span className="message_box_endtwo"></span>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-out-left">
                <div>
                  <p className="msgbox_two long_txt">
                    {" "}
                    Final Ideas <br /> & Art Work
                  </p>
                  <div className="Mesage_box_two">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione neque libero officiis ab quos delectus pariatur
                      eaque animi illo nesciunt, excepturi iste sunt dolores
                      molestiae accusamus alias in. Nemo, assumenda.
                    </p>
                    <span className="message_box_endtwo"></span>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-out-left">
                <div>
                  <p className="msgbox_two long_txt">
                    Production <br />
                    Printing
                  </p>
                  <div className="Mesage_box_two">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione neque libero officiis ab quos delectus pariatur
                      eaque animi illo nesciunt, excepturi iste sunt dolores
                      molestiae accusamus alias in. Nemo, assumenda.
                    </p>
                    <span className="message_box_endtwo"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// message_box_endtwo
