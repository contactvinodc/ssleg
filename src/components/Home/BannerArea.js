import React from "react";

// Banner area
export default function BannerArea(props) {
  return (
    <section class="banner-section">
      <section class="main-slider">
        <div
          class="swiper-container thm-swiper__slider"
          data-swiper-options='{"slidesPerView": 1, "loop": true,
        "effect": "fade",
        "pagination": {
            "el": "#main-slider-pagination",
            "type": "bullets",
            "clickable": true
          },
        "navigation": {
            "nextEl": ".main-slider-button-next",
            "prevEl": ".main-slider-button-prev",
            "clickable": true
        },
        "autoplay": {
            "delay": 5000
        }}'
        >
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div
                class="image-layer"
                style={{backgroundImage: `url(/images/main-slider-0-1.jpg)`}}
              ></div>
              <div class="image-layer-overlay"></div>
              <div class="container">
                <div class="swiper-slide-inner">
                  <div class="row">
                    <div class="col-xl-12">
                      <h2>
                        We are <span>Always</span>
                        <br />
                        Ready to services
                      </h2>
                      <p>
                        Commercial<span></span>Domestic<span></span>Industrial
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div
                class="image-layer"
                style={{backgroundImage: `url(/images/main-slider-1-1.jpg)`}}
              ></div>
              <div class="image-layer-overlay"></div>
              <div class="container">
                <div class="swiper-slide-inner">
                  <div class="row">
                    <div class="col-xl-12">
                      <h2>
                        We are <span>Always</span>
                        <br />
                        Ready to services
                      </h2>
                      <p>
                        Commercial<span></span>Domestic<span></span>Industrial
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="main-slider-nav">
            <div class="main-slider-button-prev">
              <span class="icon-right-arrow"></span>
            </div>
            <div class="main-slider-button-next">
              <span class="icon-right-arrow"></span>{" "}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
