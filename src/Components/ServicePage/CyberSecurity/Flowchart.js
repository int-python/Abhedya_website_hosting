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
                <p className="msgbox_one long_txt">
                  Vulnerability
                  <br /> Assesment.
                </p>
                <div className="Mesage_box">
                  <p>
                    Vulnerability Assessment services are a series of tests
                    performed on a system to identify the vulnerability of the
                    system. This is a Security Assessment conducted to
                    understand the vulnerabilities and by this process the
                    vulnerabilities are identified and exposed to the security
                    experts who in turn are able to quantify and prioritise such
                    vulnerabilities.
                  </p>
                  <span className="message_box_end"></span>
                </div>
              </div>
            </div>
            <div className="flowchart_pole start_pole"></div>
            <div data-aos="zoom-out-left">
              <div>
                <p className="msgbox_two long_txt ">
                  Mobile <br />
                  Application{" "}
                </p>
                <div className="Mesage_box_two">
                  <p>
                    Mobile applications are becoming more and more prevalent
                    with Android and iOS smart phones dominating the market.
                    Businesses are extending their IT services to mobile
                    applications. It is important to ensure that these
                    applications do not open any new vulnerabilities to the
                    business, such as leakage of confidential data outside the
                    organization.
                  </p>
                  <span className="message_box_endtwo"></span>
                </div>
              </div>
            </div>
          </section>
          <section className="flowchart">
            <div data-aos="zoom-out-right">
              <div>
                <p className="msgbox_one long_txt">Web pentesting</p>
                <div className="Mesage_box">
                  <p>
                    Web Application VAPT is security testing methods for
                    security holes or vulnerabilities in web applications and
                    corporate websites.Due to these vulnerabilities,websites are
                    left open for exploitation.Unlike the other penetration
                    testings,it also evaluates the risk that is related to a
                    third-party app.
                  </p>
                  <span className="message_box_end"></span>
                </div>
              </div>
            </div>
            <div className="flowchart_pole "></div>
            <div data-aos="zoom-out-left">
              <div>
                <p className="msgbox_two long_txt">
                  Network <br /> Pentesting
                </p>
                <div className="Mesage_box_two">
                  <p>
                    Network Security Testing aims to map all the network
                    devices, finding out loopholes from those various devices
                    including servers, end user systems, wireless devices and
                    exploiting those loopholes in an ethical way so that one can
                    know about how is there infrastructure is designed.
                  </p>
                  <span className="message_box_endtwo"></span>
                </div>
              </div>
            </div>
          </section>
          <section className="flowchart">
            <div data-aos="zoom-out-right">
              <div>
                <p className="msgbox_one long_txt">Security Training</p>
                <div className="Mesage_box">
                  <p>
                    Cyber Security Training is specially designed for the
                    beginners who would like to build career into the field of
                    Information Security. This course comprises of all the
                    subdomains of Cyber Security which would help an individual
                    to take future decisions regarding the selection of core
                    domain of interest.
                  </p>
                  <span className="message_box_end"></span>
                </div>
              </div>
            </div>
            <div className="flowchart_pole pole_end"></div>
            <div data-aos="zoom-out-left">
              <div>
                <p className="msgbox_two long_txt">Cyber Crime..</p>
                <div className="Mesage_box_two">
                  <p>
                    Have you been a victim of data theft or any other kind of
                    cyber-crime? We can help – our team of skilled skip tracers
                    and computer forensics experts can help gather evidence,
                    identify the point of entry, patch loopholes to prevent
                    future intrusions and possibly even trace the attack back to
                    the perpetrators.In the event of a data breach.
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
