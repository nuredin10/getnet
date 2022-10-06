import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Head from "next/head";
function Footer() {
  return (
    <div className="footer-wrapper">
      
      <div className="footer-main">
        <div className="links-wrapper">
          <div className="quick-links border-top">
            <h3>Quick Links</h3>
            <dv className="links">
              <a href="/">Home</a>
              <a href="whoweare">Who We Are</a>
              <a href="practicearea">Practice Area</a>
              <a href="principalattroney">Principal Attorney</a>
              <a href="contactus">Contact Us</a>
            </dv>
          </div>
          <div className="footer-principal-attorney border-top">
            <h3>Principal Attorney</h3>
            <dv className="links">
              <a href="principalattroney">Getnet Yawkal Mebratu</a>
              <a href="principalattroney">Qualifications & Membership</a>
            </dv>
          </div>
        </div>
        <div className="middle-links border-top">
          <h3>Practice Area</h3>
          <div className="links">
            <a href="practicearea">Intellectual Proprieties </a>
            <a href="practicearea">Labor & Employment</a>
            <a href="practicearea">Corporate and Finance </a>
            <a href="practicearea">Charity </a>
            <a href="practicearea">Alternative Dispute Resolution </a>
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
            <div className="middle-links border-top">
          <h3>Social Media Links</h3>
        
        </div>
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
          All Rights Reserved.&copy; 
          2022{" "}
        </p>
        <p>Web Design & Development by Versavvy Media PLC</p>
      </div>
    </div>
  );
}

export default Footer;
