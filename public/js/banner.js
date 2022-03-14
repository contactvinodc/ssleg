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
  if ($('#datepicker').length) {
    $('#datepicker').datepicker();
  };
  
})(jQuery);