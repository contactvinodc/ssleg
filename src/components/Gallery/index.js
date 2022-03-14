import React from "react";

import WebApp from "../WebApp";
import { GalleryHead } from "../MetaTags/Head";
import BannerArea from "./BannerArea";
import ServiceSection from "./ServiceSection";

export default function Gallery(props) {
  return (
    <WebApp>
      <GalleryHead></GalleryHead>
      <BannerArea></BannerArea>
      <ServiceSection></ServiceSection>
    </WebApp>
  );
}
