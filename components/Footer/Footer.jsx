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
            <a href="IP">Intellectual Property </a>
            <a href="labor">Labor & Employment</a>
            <a href="corporate">Corporate & Finance </a>
            <a href="charity">Charity </a>
            <a href="ADR">Alternative Dispute Resolution (ADR)</a>
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
              <a href="tel:+251911051754">
                +251911051754</a>
              <br />
              <label>Office: </label>
            <a href="tel: +251118212012 "> +251118212012 </a>
            </p>
            <p>  <label>P.O.Box:  </label>
            <a href="tel:+251911051754">
              1985 code 1250, Addis Ababa, Ethiopia
            </a></p>
            <p>
              {/* Connect on LinkedIn  */}
            Located in Bole, Airport Road, Mega Building, 4th Floor, Room No.
              417
            </p>
            <div className="middle-links border-top">
          <h3>Social Media Links</h3>
        
        </div>
            <div className="footer-social-media">
              {/* <AiFillFacebook className="icon" /> */}
              <a href="https://www.linkedin.com/in/getnet-yawkal-mebratu-ba155268/">

<AiFillLinkedin  className="icon" />
</a>
<a href="https://twitter.com/Ethilawfirm?t=-TotZd6xca8vkuVS17i9hQ&s=03">

<AiFillTwitterSquare className="icon" />
</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-credit">
        <p>
        All Rights Reserved &copy; 2023 Getnet Yawkal Law Office{" "}
        </p>
        <p>Web Design & Development by Versavvy Media PLC</p>
      </div>
    </div>
  );
}

export default Footer;
