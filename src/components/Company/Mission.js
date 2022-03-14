import React from "react";

export default function Mission(props) {
  return (
    <section class="mission-sec">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="mission-sec-img">
              <img src="images/mission.jpg" alt="" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="vision-sec" data-aos="fade-up" data-aos-duration="1000">
              <div class="box-sec">
                <ul>
                  <li>
                    <div class="box-icon">
                      <img src="images/mission-img.svg" alt="" />
                    </div>
                    <div class="box-text">
                      <h4>Mission</h4>
                      <p>
                        To become the most respected industrial support service
                        provider in India, and have our operations spread across
                        the length and breadth of India.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="box-icon">
                      <img src="images/vision-img.svg" alt="" />
                    </div>
                    <div class="box-text">
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
