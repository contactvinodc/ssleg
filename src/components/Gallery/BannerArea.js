import React from "react";

// banner area

export default function BannerArea(props) {
  return (
    <section
      class="inner-banner"
      style={{backgroundImage: `url(/images/about-banner.png)`}}
    >
      <div class="container">
        <h1 data-aos="fade-up" data-aos-duration="800">
          Gallery
        </h1>
        <p data-aos="fade-up" data-aos-duration="900">
          <a href="index.html">Home</a> Gallery
        </p>
      </div>
    </section>
  );
}
