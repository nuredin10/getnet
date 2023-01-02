import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import Head from "next/head";

function Contactus() {
  const [isDark, setIsDark] = useState(true);
  const [isBurgerDark, setIsBurgerDark] = useState(true);

  const changeNavbar = () => {
    console.log("scrolling");
    if (window.scrollY >= 80) {
      setIsDark(false);
      setIsBurgerDark(false);
    } else {
      setIsBurgerDark(true);
      setIsDark(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
  }, []);

  return (
    <div className="contact-page-wrapper">
      <Head>
        <title>Getnet Yawkal Law Office | Contact Us</title>
      </Head>
      <Header isDark={isDark} isBurgerDark={isBurgerDark}></Header>
      <div className="contact-main">
        <div className="contact-form">
          <h1>Contact Form</h1>
          <p className="intstruction">
            Fill out the form below inorder to reach out to us
          </p>
          <div className="form">
            <p>First Name</p>
            <input type="text"></input>
            <p>Phone Number</p>
            <input type="text"></input>
            <p>Email Address</p>
            <input type="text"></input>
            <p>City/Address</p>
            <input type="text"></input>
            <p>Write Message</p>
            <input className="textArea" type="TextArea"></input>
          </div>
          <input className="submit" type="submit" text="Submit"></input>
        </div>
        <div className="contact-address">
          <div className="single">
            <p>Email</p>
            <a href="mailto: getnety@getnetyawkal.com">
              getnety@getnetyawkal.com
            </a>
          </div>
          <div className="single">
            <p>Physical Location</p>
            <a>
              Located in Bole, Airport Road, Mega Building, 4th Floor, Room No.
              417
            </a>
          </div>
          <div className="single">
            <p>P.O.Box</p>
            <a href="tel:+251911051754">
              1985 code 1250, Addis Ababa, Ethiopia
            </a>
          </div>
          <div className="single">
            <p>Mobile</p>
            <a href="tel:+251911051754">+2519 11 05 17 54</a>
            <br />
            <p>Office</p>
            <a href="tel: +251118212012 "> +251118212012 </a>
          </div>
          <div className="single">
            <p>Social Media Links</p>
            <div className="social-media">
              {/* <AiFillFacebook className="icon" /> */}
              <a href="https://www.linkedin.com/in/getnet-yawkal-mebratu-ba155268/">
                <AiFillLinkedin className="icon" />
              </a>
              <a href="https://twitter.com/Ethilawfirm?t=-TotZd6xca8vkuVS17i9hQ&s=03">
                <AiFillTwitterSquare className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="map-section">
        <div className="map1">
          <div className="location">
            <div className="map-responsive1">
              <iframe
                id="gmap_canvas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.69719849516!2d38.76796191533828!3d8.999985091919472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85d8e2c47c25%3A0x99aaf3ddb64f7560!2sGetnet%20Yawkal%20Law%20Office!5e0!3m2!1sen!2sru!4v1664980115029!5m2!1sen!2sru"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Contactus;
