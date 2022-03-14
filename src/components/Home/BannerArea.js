import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
// Banner area

export default function BannerArea(props) {
  useEffect(() => {
    (function ($) {
      "use strict";

      function thmSwiperInit() {
        // swiper slider
        const swiperElm = document.querySelectorAll(".thm-swiper__slider");
        swiperElm.forEach(function (swiperelm) {
          const swiperOptions = JSON.parse(swiperelm.dataset.swiperOptions);
          let thmSwiperSlider = new Swiper(swiperelm, swiperOptions);
        });
      }
      // window load event

      thmSwiperInit();

      if ($("#datepicker").length) {
        $("#datepicker").datepicker();
      }
    })(jQuery);
  }, []);

  const initTrans = () => {
    (function ($) {
      "use strict";

      function thmSwiperInit() {
        // swiper slider
        const swiperElm = document.querySelectorAll(".thm-swiper__slider");
        swiperElm.forEach(function (swiperelm) {
          const swiperOptions = JSON.parse(swiperelm.dataset.swiperOptions);
          let thmSwiperSlider = new Swiper(swiperelm, swiperOptions);
        });
      }
      // window load event

      $(window).on("load", function () {
        thmSwiperInit();
      });
      if ($("#datepicker").length) {
        $("#datepicker").datepicker();
      }
    })(jQuery);
  };

  return (
    <section className="banner-section">
      <section className="main-slider">
        <div
          className="swiper-container thm-swiper__slider"
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
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage: `url(/images/main-slider-0-1.jpg)`,
                }}
              ></div>
              <div className="image-layer-overlay"></div>
              <div className="container">
                <div className="swiper-slide-inner">
                  <div className="row">
                    <div className="col-xl-12">
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
            <div className="swiper-slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage: `url(/images/main-slider-1-1.jpg)`,
                }}
              ></div>
              <div className="image-layer-overlay"></div>
              <div className="container">
                <div className="swiper-slide-inner">
                  <div className="row">
                    <div className="col-xl-12">
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

          <div className="main-slider-nav">
            <div className="main-slider-button-prev">
              <span className="icon-right-arrow"></span>
            </div>
            <div className="main-slider-button-next">
              <span className="icon-right-arrow"></span>{" "}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
