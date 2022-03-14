import React, { useEffect } from "react";
import BannerArea from "./BannerArea";
import Management from "./Management";
import CompanyHistory from "./CompanyHistory";
import Mission from "./Mission";
import PartnerCompanies from "./PartnerCompanies";
import ServiceSection from "./ServiceSection";
import Skills from "./Skills";
import Milestone from "./Milestone";
import WebApp from "../WebApp";

import { CompanyHead } from "../MetaTags/Head";

export default function Company(props) {
  return (
    <WebApp>
      <CompanyHead></CompanyHead>
      <BannerArea></BannerArea>
      <ServiceSection></ServiceSection>
      <CompanyHistory></CompanyHistory>
      <Skills></Skills>
      <Mission></Mission>
      <Management></Management>
      <PartnerCompanies></PartnerCompanies>
      <Milestone></Milestone>
    </WebApp>
  );
}
