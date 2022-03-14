import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/logo/logo.jpg" />

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/aos.css" />
        <link rel="stylesheet" href="/css/swiper.min.css" />
        <link rel="stylesheet" href="/css/owl.carousel.css" />
        <link rel="stylesheet" href="/css/icons/style.css" />
        <link rel="stylesheet" href="/css/jquery.fancybox.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" async></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js" async></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" async></script>

        <script src="/js/owl.carousel.min.js" async></script>
        <script src="/js/swiper.min.js" async></script>
        <script src="/js/aos.js" async></script>
        <script src="/js/nav.js" async></script>
        <script src="/js/jquery.fancybox.min.js" async></script>
        <script src="/js/home.js" async></script>
        <script src="/js/custom.js" async></script>
      </body>
    </Html>
  );
}
