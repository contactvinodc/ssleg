import React from "react";
import Image from "next/image";
export default function Management(props) {
  return (
    <section className="managment-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
            <h4>CC</h4>
            <h5>MANAGEMENT</h5>
            <p>
              We have well qualified group of technocrats with 150 years
              cumulative work experience as promoters. They have wide exposure
              in various fields like steel, aluminium, uranium, Cement, Chemical
              plants etc. While our quality works leading to customer
              satisfaction also acts as promoter on various occasions.
            </p>
            <ul>
              <li>
                <div className="pic">
                  <Image src="/images/profile.png" alt="" width="154" height="154"/>
                </div>
                <div className="profile-txt">
                  <div className="profile-name">Sreedharan Kumaran</div>
                  <div className="profile-designation">Founder Director</div>
                </div>
              </li>
              <li>
                <div className="pic">
                  <Image src="/images/profile.png" alt="" width="154" height="154"/>
                </div>
                <div className="profile-txt">
                  <div className="profile-name">Sreejith Sreedharan</div>
                  <div className="profile-designation">Managing Director</div>
                </div>
              </li>
              <li>
                <div className="pic">
                  <Image src="/images/profile.png" alt="" width="154" height="154"/>
                </div>
                <div className="profile-txt">
                  <div className="profile-name">Shyam</div>
                  <div className="profile-designation">Director</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
