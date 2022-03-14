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
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                    standard dummy
                  </p>
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
                  <li>No. 9845, Atulya, Victory Nagar, Banglore - 562275</li>
                  <li className="call">
                    <a href="tel:9224-386238">9224-386238</a>
                  </li>
                  <li>
                    <a href="mailto:info@ccpvtltd.in">info@ccpvtltd.in</a>
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
              <p>© 2022 CC. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
