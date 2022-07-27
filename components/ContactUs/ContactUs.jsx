import React, { useEffect } from "react";
import gsap from "gsap"
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";

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
              <label>Mobile:</label>
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
        <div className="map">
        <div className="map1">
    <div className="location">
      <div className="map-responsive">
     
        <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Makush%20Art%20gallery%20%7C%20Bole%20%7C%20%E1%88%9B%E1%8A%A9%E1%88%BD%20%E1%8A%A0%E1%88%AD%E1%89%B5%20%E1%8C%8B%E1%88%88%E1%88%AA%20%7C%20%E1%89%A6%E1%88%8C&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
      </div>
    </div>
  </div>
        </div>
      </div>
      <div className="footer">
        <p>All Rights Reserved. &copy; 2022 </p>
        <p>Web Design & Development by Versavvy Media PLC</p>
      </div>
    </div>
  );
}

export default ContactUs;
