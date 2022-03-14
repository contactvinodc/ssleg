import React, { useEffect } from "react";

import Header from "../CommonComponents/Header";
import Footer from "../CommonComponents/Footer";

export default function WebApp(props) {
  useEffect(() => {
    const script3 = document.createElement("script");
    script3.src = "/js/swiper.min.js";
    script3.async = true;

    const script4 = document.createElement("script");
    script4.src = "/js/aos.js";
    script4.async = true;

    const script5 = document.createElement("script");
    script5.src = "/js/banner.js";
    script5.async = true;

    const script6 = document.createElement("script");
    script6.src = "/js/owl.carousel.min.js";
    script6.async = true;

    const script7 = document.createElement("script");
    script7.src = "/js/nav.js";
    script7.async = true;

    const script8 = document.createElement("script");
    script8.src = "/js/jquery.fancybox.min.js";
    script8.async = true;

    const script9 = document.createElement("script");
    script9.src = "/js/home.js";
    script9.async = true;

    const script10 = document.createElement("script");
    script10.src = "/js/custom.js";
    script10.async = true;

    document.body.appendChild(script3);
    document.body.appendChild(script4);
    document.body.appendChild(script5);
    document.body.appendChild(script6);
    document.body.appendChild(script7);

    document.body.appendChild(script8);
    document.body.appendChild(script9);
    document.body.appendChild(script10);
  }, []);

  return (
    <div>
      <Header></Header>
      {props.children}
      <Footer></Footer>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>


{
    /*
      <script type="text/javascript" src="/js/owl.carousel.min.js"></script>
      <script src="/js/swiper.min.js"></script>
      <script src="/js/aos.js"></script>
      <script type="text/javascript" src="/js/banner.js"></script>
      <script type="text/javascript" src="/js/nav.js"></script>
      <script src="/js/jquery.fancybox.min.js"></script>
      <script src="/js/home.js"></script>
      <script src="/js/custom.js"></script>
      */

}
    </div>
  );
}
