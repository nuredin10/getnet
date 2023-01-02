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
              <a href="tel:+251911051754">+251911051754 </a>
            </p>
            <p>
              <label>Office:</label>
              <a href="tel:+251118212012"> +251118212012</a>
            </p>
            <p>
      Located in Bole, Airport Road, Mega Building, 4th Floor, Room No. 417    
            </p>
            <p>
   P.O.Box 1985 code 1250, Addis Ababa, Ethiopia<br></br>
            </p>
            <div className="social-media-mobile1">
          <a href="https://www.linkedin.com/in/getnet-yawkal-mebratu-ba155268/">

<AiFillLinkedin  className="icon" />
</a>
<a href="https://twitter.com/Ethilawfirm?t=-TotZd6xca8vkuVS17i9hQ&s=03">

<AiFillTwitterSquare className="icon" />
</a>
          </div>
            <div className="social-media1">
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
        <div className="map">
        <div className="map1">
    <div className="location">
      <div className="map-responsive">
     
        <iframe id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.69719849516!2d38.76796191533828!3d8.999985091919472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85d8e2c47c25%3A0x99aaf3ddb64f7560!2sGetnet%20Yawkal%20Law%20Office!5e0!3m2!1sen!2sru!4v1664980115029!5m2!1sen!2sru" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
      </div>
    </div>
  </div>
        </div>
      </div>
      <div className="footer">
        <p>All Rights Reserved @ 2023 Getnet Yawkal Law Office </p>
        <p>Web Design & Development by Versavvy Media PLC</p>
      </div>
    </div>
  );
}

export default ContactUs;
