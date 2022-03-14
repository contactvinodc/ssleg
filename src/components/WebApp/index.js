import React from "react";

import Header from "../CommonComponents/Header";
import Footer from "../CommonComponents/Footer";

export default function WebApp(props) {
  return (
    <div>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </div>
  );
}
