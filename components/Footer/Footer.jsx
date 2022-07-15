import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Head from "next/head";
function Footer() {
  return (
    <div className="footer-wrapper">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="footer-main">
        <div className="links-wrapper">
          <div className="quick-links border-top">
            <h3>Quick Links</h3>
            <dv className="links">
              <a>Home</a>
              <a>Who We Are</a>
              <a>Practice Area</a>
              <a>Principal Attorney</a>
              <a>Contact Us</a>
            </dv>
          </div>
          <div className="footer-principal-attorney border-top">
            <h3>Principal Attorney</h3>
            <dv className="links">
              <a>Getnet Yawkal Mebratu</a>
              <a>Qualifications & Membership</a>
            </dv>
          </div>
        </div>
        <div className="middle-links border-top">
          <h3>Practice Area</h3>
          <div className="links">
            <a>Intellectual Proprieties </a>
            <a>Labor & Employment</a>
            <a>Corporate and Finance </a>
            <a>Charity </a>
            <a>Alternative Dispute Resolution </a>
          </div>
        </div>
        <div className="footer-info-wrapper">
          <h1>Contact Us</h1>
          <div className="footer-info">
            <p>
              <label>Email: </label>
              <a href="mailto: getnety@getnetyawkal.com">
                getnety@getnetyawkal.com
              </a>
            </p>
            <p>
              <label>Mobile: </label>
              <a href="tel:+251911051754">+251911051754</a>
            </p>
            <p>
              Connect on LinkedIn 
              <br></br>Located in Bole Mega, Addis Ababa, Ethiopia
            </p>
            <div className="footer-social-media">
              <AiFillFacebook className="icon" />
              <AiFillLinkedin className="icon" />
              <AiFillTwitterSquare className="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-credit">
        <p>
          All Rights Reserved. <CopyrightIcon className="copyright" />
          2022{" "}
        </p>
        <p>Web Design & Development by Versavvy Media PLC</p>
      </div>
    </div>
  );
}

export default Footer;
