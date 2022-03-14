import React from "react";
import Image from "next/image";
export default function Mission(props) {
  return (
    <section className="mission-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="mission-sec-img">
              <img src="/images/mission.jpg" alt=""/>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="vision-sec" data-aos="fade-up" data-aos-duration="1000">
              <div className="box-sec">
                <ul>
                  <li>
                    <div className="box-icon">
                      <Image src="/images/mission-img.svg" alt="" height="90" width="90"/>
                    </div>
                    <div className="box-text">
                      <h4>Mission</h4>
                      <p>
                        To become the most respected industrial support service
                        provider in India, and have our operations spread across
                        the length and breadth of India.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="box-icon">
                      <Image src="/images/vision-img.svg" alt="" height="90" width="90"/>
                    </div>
                    <div className="box-text">
                      <h4>Vision</h4>
                      <p>
                        To continue serving customers to the very best of our
                        abilities, by ensuring that tasks are completed on time,
                        after ample planning and coordination.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
