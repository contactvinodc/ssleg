import React from "react";
import Link from "next/link";
import styles from './css/Header.module.css';
import Image from "next/image";


export default function Header(props) {

  return (
    <header className="clearHeader">

      <style>
        {
          `
          header .top-sec .top-link p a {
            display: flex;
            grid-gap: 10px;
          }
          
          .nav-item {
            display: flex;
            align-items: center;
          }


          .nav-item a {
            display:block;
            margin: 0px;
            font-weight: 400;
            color: #787780;
            padding: 30px 15px;
            font-size: 16px;
            -webkit-transition: 0.3s all ease-in-out;
            transition: 0.3s all ease-in-out;
          }

          .nav-item .quote {
            margin: 0px !important;
          }
          `
        }
      </style>
      <div className="top-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="top-link">
                <p>
                  <a href="tel:9224368138">
                    <Image src="/images/call.svg" alt="" width="17" height="17"/>
                    Call Us : 8114-369139
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
              <div className="top-media">
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
              <div className="mail">
                <a href="mailto:info@ccpvtltd.in">Email : info@ccpvtltd.in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <Link className="navbar-brand" href="/">
              <Image src="/images/logo.svg" alt="Funtravelz" width="147.5" height="41.5"/>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className={`${styles.navlink} nav-link`} href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`${styles.navlink} nav-link`} href="/company" >
                    Company
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services">
                    Services
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link  dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Projects
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/projects">
                        Completed Projects
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/projects">
                        Ongoing Projects
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/projects">
                        Operations and Maintenance
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/tools-and-equipment">
                    Equipments
                  </a>
                </li>
                <li className="nav-item">
                  <Link className={`${styles.navlink} nav-link`} href="/gallery" >
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/careers">
                    Careers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link quote" href="/get-a-quote">
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
