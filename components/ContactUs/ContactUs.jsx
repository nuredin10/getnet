import React, { useEffect } from "react";
import gsap from "gsap"
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";

import Background from '../../asset/background.svg'
import CopyrightIcon from '@mui/icons-material/Copyright';
function ContactUs({ contactActiveSlide }) {
  useEffect(() => {
    gsap.to(".activeContact-slide", { duration: 1.5, bottom: "0%" });
    gsap.to(".removeContact-slide", { duration: 1.5, bottom: "-90%" });
  });
  return (
    <div className={`
    contact ${contactActiveSlide ? 'activeContact-slide' : 'removeContact-slide'}`}>
      <div className="contact-wrapper">
        <div className="title-info">
          <h1>contact us</h1>
          <div className="info">
            <p>
              <label>Email: </label>
              <a href="mailto: getnety@getnetyawkal.com">getnety@getnetyawkal.com</a>
            </p>
            <p>
              <label>Mobile: </label>
              <a href="tel:+251911051754">+251911051754</a>
            </p>
            <p>
              Connect on LinkedIn <br></br><br></br>Located in Bole Mega, Addis Ababa, Ethiopia
            </p>
            <div className="social-media">
              <AiFillFacebook className="icon" />
              <AiFillLinkedin className="icon" />
              <AiFillTwitterSquare className="icon" />
            </div>
          </div>
        </div>
        <div className="map"></div>
      </div>
      <div className="footer">
        <p>All Rights Reserved. <CopyrightIcon className="copyright" />2022 </p>
        <p>Web Design & Development by Versavvy Media PLC</p>
      </div>
    </div>
  );
}

export default ContactUs;
