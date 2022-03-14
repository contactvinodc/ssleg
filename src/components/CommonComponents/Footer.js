import React from "react";
import Image from "next/image";
export default function Footer(props) {
  return (
    <footer>
      <div className="vector-bg"></div>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-widget">
              <div className="f-logo">
                <Image src="/images/f-logo.svg" width='161px' height='37px' alt="ss legacy" />
                <p>SS LEGACY ENGINEERS PRIVATE LIMITED is an upgraded formation of K. S. Engineering Company, with ISO 9001:2015 & ISO 45001:2018 certification.</p>               
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget left65">
                <h3>Explore</h3>
                <ul className="footer-menu">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="tools-and-equipment.html">Equipments</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h3>Our Address</h3>
                <ul className="f-address">
                  <li>No. 1735, Darshana, PRASHANTH 
                                        NAGAR, T DASARAHALLI, 
                                        BANGALORE - 560057</li>
                  <li className="call">
                    <a href="tel:9224-386238">9224-386238</a>
                  </li>
                  <li>
                    <a href="mailto:info@sslegacy.in">info@sslegacy.in</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h3>Follow Us</h3>
                <div className="f-icons">
                  <a href="" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="" target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="" target="_blank">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
                <div className="partners">
                  <h4>Banking Partners</h4>
                  <ul>
                    <li>
                      <Image src="/images/uco-Bank.svg" width="116" height="30px"/>
                    </li>
                    <li>
                      <Image src="/images/federal-bank.svg" width="116" height="30px"/>
                    </li>
                    <li>
                      <Image src="/images/sbi-Bank.svg" width="116" height="30px"/>
                    </li>
                    <li>
                      <Image src="/images/icici-bank.svg" width="116" height="30px"/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 copyright-txt">
              <p>© 2022 SS Legacy. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
