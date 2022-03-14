import React from "react";

export default function Footer(props) {
  return (
    <footer>
      <div class="vector-bg"></div>
      <div class="main-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="footer-widget">
                <div class="f-logo">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="footer-widget left65">
                <h3>Explore</h3>
                <ul class="footer-menu">
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
            <div class="col-lg-3">
              <div class="footer-widget">
                <h3>Our Address</h3>
                <ul class="f-address">
                  <li>No. 9845, Atulya, Victory Nagar, Banglore - 562275</li>
                  <li class="call">
                    <a href="tel:9224-386238">9224-386238</a>
                  </li>
                  <li>
                    <a href="mailto:info@ccpvtltd.in">info@ccpvtltd.in</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="footer-widget">
                <h3>Follow Us</h3>
                <div class="f-icons">
                  <a href="" target="_blank">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="" target="_blank">
                    <i class="fa fa-linkedin"></i>
                  </a>
                  <a href="" target="_blank">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a href="" target="_blank">
                    <i class="fa fa-twitter"></i>
                  </a>
                </div>
                <div class="partners">
                  <h4>Banking Partners</h4>
                  <ul>
                    <li>
                      <img src="images/uco-Bank.svg" />
                    </li>
                    <li>
                      <img src="images/federal-bank.svg" />
                    </li>
                    <li>
                      <img src="images/sbi-Bank.svg" />
                    </li>
                    <li>
                      <img src="images/icici-bank.svg" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 copyright-txt">
              <p>© 2022 CC. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
