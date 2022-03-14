import React from "react";

export default function ServiceSection(props) {
  return (
    <section className="about-company">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="hm-about-img">
              <div
                className="about-img1"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <img src="/images/about1.jpg" alt="" />
              </div>
              <div className="play">
                <a href="">
                  <img src="images/play-circle.svg" alt="" /> See the video
                </a>
              </div>
              <div
                className="about-img2"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <img src="images/about2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-8" data-aos="fade-up" data-aos-duration="800">
            <div className="about-head">
              <h1>ABOUT CC</h1>
              <h2>We Build for Your Comfort</h2>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              <span id="dots">...</span>
            </p>
            <div id="more">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
              </p>
            </div>
            <button onClick="myFunction()" id="myBtn">
              <span>Read more</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
