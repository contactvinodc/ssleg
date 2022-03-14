import React from "react";

export default function Skills(props) {
  return (
    <section class="skills-sec">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="skill-txt">
              <div class="about-head">
                <h1>OUR SKILLS</h1>
                <h2 style={{textTransform: 'uppercase'}}>
                  The efficiency of our company
                </h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div
                class="skill-progress"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <label>Company machinery</label>
                <div class="progress">
                  <div class="progress-bar" style={{width: '95%'}}>
                    95%
                  </div>
                </div>
                <label>Qualified engineer</label>
                <div class="progress">
                  <div class="progress-bar" style={{width: '90%'}}>
                    90%
                  </div>
                </div>
                <label>Client satisfaction</label>
                <div class="progress">
                  <div class="progress-bar" style={{width: '100%'}}>
                    100%
                  </div>
                </div>
                <label>Construction design</label>
                <div class="progress">
                  <div class="progress-bar" style={{width:'95%'}}>
                    95%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="skill-img">
              <img src="images/skill.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
