import React from "react";

export default function ServiceSection(props) {
  return (
    <section class="about-company">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="hm-about-img">
              <div
                class="about-img1"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <img src="/images/about1.jpg" alt="" />
              </div>
              <div class="play">
                <a href="">
                  <img src="images/play-circle.svg" alt="" /> See the video
                </a>
              </div>
              <div
                class="about-img2"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <img src="images/about2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="col-lg-8" data-aos="fade-up" data-aos-duration="800">
            <div class="about-head">
              <h1>ABOUT CC</h1>
              <h2>We Build for Your Comfort</h2>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              <span id="dots">...</span>
            </p>
            <div id="more">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>
            <button onclick="myFunction()" id="myBtn">
              <span>Read more</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
