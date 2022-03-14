import React from "react";

export default function ServiceSection(props) {
  return (
    <section class="gallery-area">
      <div class="container">
        <div class="row">
          <div class="text-center btn-style">
            <button class="btn btn-default filter-button" data-filter="all">
              All
            </button>
            <button class="btn btn-default filter-button" data-filter="onam">
              Onam
            </button>
            <button class="btn btn-default filter-button" data-filter="vishu">
              Vishu
            </button>
            <button class="btn btn-default filter-button" data-filter="newyear">
              New Year
            </button>
          </div>
        </div>
        <div class="row">
          <div class="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter onam">
            <div class="gallery-img" data-aos="fade-up" data-aos-duration="100">
              <a
                href="images/gallery1.jpg"
                data-fancybox="images"
                data-caption="Gallery"
              >
                <img src="images/gallery1.jpg" alt="" />
                <div class="zoom">
                  <img src="images/zoom.svg" alt="" />
                </div>
              </a>
            </div>
          </div>
          <div class="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter onam">
            <div class="gallery-img" data-aos="fade-up" data-aos-duration="200">
              <a
                href="images/gallery2.jpg"
                data-fancybox="images"
                data-caption="Gallery"
              >
                <img src="images/gallery2.jpg" alt="" />
                <div class="zoom">
                  <img src="images/zoom.svg" alt="" />
                </div>
              </a>
            </div>
          </div>
          <div class="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter onam">
            <div class="gallery-img" data-aos="fade-up" data-aos-duration="300">
              <a
                href="images/gallery3.jpg"
                data-fancybox="images"
                data-caption="Gallery"
              >
                <img src="images/gallery3.jpg" alt="" />
                <div class="zoom">
                  <img src="images/zoom.svg" alt="" />
                </div>
              </a>
            </div>
          </div>
          <div class="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter vishu">
            <div class="gallery-img" data-aos="fade-up" data-aos-duration="400">
              <a
                href="images/gallery4.jpg"
                data-fancybox="images"
                data-caption="Gallery"
              >
                <img src="images/gallery4.jpg" alt="" />
                <div class="zoom">
                  <img src="images/zoom.svg" alt="" />
                </div>
              </a>
            </div>
          </div>
          <div class="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter vishu">
            <div class="gallery-img" data-aos="fade-up" data-aos-duration="500">
              <a
                href="images/gallery5.jpg"
                data-fancybox="images"
                data-caption="Gallery"
              >
                <img src="images/gallery5.jpg" alt="" />
                <div class="zoom">
                  <img src="images/zoom.svg" alt="" />
                </div>
              </a>
            </div>
          </div>
          <div class="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter newyear">
            <div class="gallery-img" data-aos="fade-up" data-aos-duration="600">
              <a
                href="images/gallery6.jpg"
                data-fancybox="images"
                data-caption="Gallery"
              >
                <img src="images/gallery6.jpg" alt="" />
                <div class="zoom">
                  <img src="images/zoom.svg" alt="" />
                </div>
              </a>
            </div>
          </div>
          <div class="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter newyear">
            <div class="gallery-img" data-aos="fade-up" data-aos-duration="700">
              <a
                href="images/gallery7.jpg"
                data-fancybox="images"
                data-caption="Gallery"
              >
                <img src="images/gallery7.jpg" alt="" />
                <div class="zoom">
                  <img src="images/zoom.svg" alt="" />
                </div>
              </a>
            </div>
          </div>
          <div class="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter newyear">
            <div class="gallery-img" data-aos="fade-up" data-aos-duration="800">
              <a
                href="images/gallery8.jpg"
                data-fancybox="images"
                data-caption="Gallery"
              >
                <img src="images/gallery8.jpg" alt="" />
                <div class="zoom">
                  <img src="images/zoom.svg" alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
