import React from "react";
import Image from "next/image";
export default function PartnerCompanies(props) {
  return (
    <section className="partner-companies">
      <div className="container">
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
            <h6>Partner Companies</h6>
            <div className="partners1 owl-theme">
              <div className="item">
                <div className="partner-sec">
                  <Image src="/images/partner-1.jpg" alt="" width="217" height="70"/>
                </div>
              </div>
              <div className="item">
                <div className="partner-sec">
                  <Image src="/images/partner-2.jpg" alt="" width="217" height="70"/>
                </div>
              </div>
              <div className="item">
                <div className="partner-sec">
                  <Image src="/images/partner-3.jpg" alt="" width="217" height="70"/>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
