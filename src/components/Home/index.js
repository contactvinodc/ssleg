import React from "react";

import BannerArea from "./BannerArea";
import ServiceSection from "./ServiceSection";
import AboutSection from "./AboutSection";
import FacilitiesSection from "./FacilitiesSection";
import ProjectSection from "./ProjectSection";
import ClientsSections from "./ClientsSection";
import { HomeHead } from "../MetaTags/Head";
import WebApp from "../WebApp";

export default function Home(props) {
  return (
    <WebApp>
      <HomeHead></HomeHead>
      <BannerArea></BannerArea>
      <ServiceSection></ServiceSection>
      <AboutSection></AboutSection>
      <FacilitiesSection></FacilitiesSection>
      <ProjectSection></ProjectSection>
      <ClientsSections></ClientsSections>
    </WebApp>
  );
}
