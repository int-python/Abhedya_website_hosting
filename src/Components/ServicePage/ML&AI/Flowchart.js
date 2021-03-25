import React, { useEffect } from "react";
import "./flowchart.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Flowchart() {
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
                <p className="msgbox_one">Briefing</p>
                <div className="Mesage_box">
                  <p>
                    Abhedya's intelligent support, sales, and customer
                    engagement solutions allow leading enterprises to set up
                    world class customer support experiences rapidly at scales.
                  </p>
                  <span className="message_box_end"></span>
                </div>
              </div>
            </div>
            <div className="flowchart_pole start_pole"></div>
            <div data-aos="zoom-out-left">
              <div>
                <p className="msgbox_two ">Designing</p>
                <div className="Mesage_box_two">
                  <p>
                    AI designers help to ensure that we are developing data
                    collection systems that are safe, fair, ethical, and apply
                    to real user problems. These designers create frameworks and
                    guidelines where needed to ensure the safe and secure use of
                    AI.
                  </p>
                  <span className="message_box_endtwo"></span>
                </div>
              </div>
            </div>
          </section>
          <section className="flowchart">
            <div data-aos="zoom-out-right">
              <div>
                <p className="msgbox_one long_txt">
                  Production
                  <br />
                  Printing
                </p>
                <div className="Mesage_box">
                  <p>
                    AI systems help forecast when or if functional equipment
                    will fail so its maintenance and repair can be scheduled
                    before the failure occurs. Thanks to AI-powered predictive
                    maintenance, manufacturers can improve efficiency while
                    reducing the cost of machine failure.
                  </p>
                  <span className="message_box_end"></span>
                </div>
              </div>
            </div>
            <div className="flowchart_pole pole_end"></div>
            <div data-aos="zoom-out-left">
              <div>
                <p className="msgbox_two long_txt">Final ideas.</p>
                <div className="Mesage_box_two">
                  <p>
                    We can make Robots as smart as a human by using a cloud
                    brain.This will be achieved by cloud-connected robots,where
                    diverse models of robots share a brain hosted on a cloud
                    platform.
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
