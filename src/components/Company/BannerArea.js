import React from "react";
// banner area
export default function BannerArea(props) {
  return (
    <section
      className="inner-banner"
      style={{backgroundImage: `url(images/about-banner.png)`}}
    >
      <div className="container">
        <h1 data-aos="fade-up" data-aos-duration="800">
          About Company
        </h1>
        <p data-aos="fade-up" data-aos-duration="900">
          <a href="index.html">Home</a> About Company
        </p>
      </div>
    </section>
  );
}
