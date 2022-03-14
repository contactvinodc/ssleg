import React, { useState, useEffect } from "react";
export default function ServiceSection(props) {
  useEffect(() => {
    function myFunction() {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("myBtn");
  
      if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "<span>Read more</span>"; 
      moreText.style.display = "none";
      } else {
      dots.style.display = "none";
      btnText.innerHTML = "<span>Read less</span>"; 
      moreText.style.display = "inline";
      }
  }
  }, []);

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
            <h1>ABOUT SS Legacy</h1>
                        <h2>We Build for Your Comfort</h2>
                    </div>
                    <p>SS LEGACY ENGINEERS PRIVATE LIMITED is an upgraded formation of K. S. Engineering Company, with ISO 9001:2015 & ISO 45001:2018 certification. KS Engineering has grown in past three decades from a humble beginning as labour contractor at HIL into a medium sized pvt ltd company specializing in fabrication & erection of piping and chemical plants, maintenance & operation facilitators in large plants. It started it base from simple fabrication and erection works at Renukoot to entire plant operation and maintenance in Lanjigarh. The turnover of the company increased to approx. 34 crore annually without much bank borrowings.</p>                   
                    <p>SS Legacy Engineers Pvt Ltd, has over the years earned a great reputation in various domains including operations & maintenance (O&M), industrial support service, technical and non-technical manpower provisioning, project commissioning, and materials supply<span id="dots">...</span></p>                    
                    <div id="more">
                        <p>The service that SS Legacy has rendered to its innumerable reputed clients is nothing less than exemplary. SS Legacy continues to provide exceptional service, and this continues to be their success mantra. The trust that clients share about SS Legacy’s uncompromising quality has been the number one reason that the company has grown by leaps and bounds. SS Legacy is thankful to their customers for their stupendous growth. SS Legacy takes great pride in its clientele, and the client list speaks for itself. Major industrial giants like Hindalco, Vedanta, Utkal Aluminium International Ltd, BALCO, are a few of SS Legacy’s reputed clientele.</p>
                        <p>SS Legacy will continue in its endeavor of rendering uncompromising service to its customers in the time to come, and that’s without doubt!</p>
                    </div>

            <button onClick={()=>myFunction()} id="myBtn">
              <span>Read more</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
