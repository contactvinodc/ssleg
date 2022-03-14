import React from "react";
import Link from "next/link";


export default function Header(props) {
  return (
    <header class="clearHeader">
      <div class="top-sec">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="top-link">
                <p>
                  <a href="tel:9224368138">
                    <img src="images/call.svg" alt="" />
                    Call Us : 8114-369139
                  </a>
                </p>
              </div>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
              <div class="top-media">
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
              <div class="mail">
                <a href="mailto:info@ccpvtltd.in">Email : info@ccpvtltd.in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="menu">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="/">
              <img src="images/logo.jpg" alt="Funtravelz" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/company">
                    Company
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/services">
                    Services
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link  dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Projects
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="/projects">
                        Completed Projects
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/projects">
                        Ongoing Projects
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/projects">
                        Operations and Maintenance
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/tools-and-equipment">
                    Equipments
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/gallery">
                    Gallery
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/careers">
                    Careers
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact">
                    Contact Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link quote" href="/get-a-quote">
                    <span>Get a Quote</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
