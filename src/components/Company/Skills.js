import React from "react";

export default function Skills(props) {
  return (
    <section className="skills-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="skill-txt">
              <div className="about-head">
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
                className="skill-progress"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <label>Company machinery</label>
                <div className="progress">
                  <div className="progress-bar" style={{width: '95%'}}>
                    95%
                  </div>
                </div>
                <label>Qualified engineer</label>
                <div className="progress">
                  <div className="progress-bar" style={{width: '90%'}}>
                    90%
                  </div>
                </div>
                <label>Client satisfaction</label>
                <div className="progress">
                  <div className="progress-bar" style={{width: '100%'}}>
                    100%
                  </div>
                </div>
                <label>Construction design</label>
                <div className="progress">
                  <div className="progress-bar" style={{width:'95%'}}>
                    95%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="skill-img">
              <img src="images/skill.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
