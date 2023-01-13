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
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content=" Getnet Yawkal Law Office is a leading commercial law office in Ethiopia, providing practical, strategical and process- and result-oriented legal services to local and international clients."
        ></meta>
        <meta property="og:title" content="Getnet Yawkal Law Office" />
        <meta property="og:site_name" content="Getnet Yawkal" />

        <meta property="og:url" content="https://getnetyawkal.com/" />
        <meta property="og:site_name" content="Getnet Yawkal Law Office" />
        <meta
          name="keywords"
          content="Legal firm in Ethiopia,Websites of law firms in Ethiopia,Affordable lawyers in Ethiopia,Affordable legal services in Ethiopia,Attorney legal service in Ethiopia,Find a lawyer in Ethiopia,Find a lawyer in Addis Ababa,International law firm in Ethiopia,Ethiopian Investment Commission,Investment incentives in Ethiopia,Ethiopian,Investment Legal Regime,National Bank of  Ethiopia,Business law in Ethiopia,The best business lawyers in Ethiopia,Top business lawyers in Ethiopia,Business attorney in Ethiopia,contract lawyer in Ethiopia,Legal Due Diligence in Ethiopia,Due-diligence preparation in Ethiopia
          Investment advisor in Ethiopia,Investment advisory firm in Ethiopia,Company registration in Ethiopia,Foreign exchange laws of Ethiopia,Investment laws of Ethiopia,Mergers and Acquisitions lawyer in Ethiopia,Commercial lawyer in Ethiopia,Corporate lawyer in Ethiopia,corporate law firm in Addis Ababa,Business lawyer in Ethiopia,The best tax attorneys in Ethiopia,Tax lawyer in Ethiopia,Tax law firm in Ethiopia,financial legal services in Ethiopia,bankruptcy lawyers in Ethiopia,Corporate & Finance lawyer in Ethiopia,business licenses in Ethiopia,Investment permit in Ethiopia,Real estate lawyer in Ethiopia
          mining lawyer in Ethiopia,Commercial representative in Ethiopia,Liaison office in Ethiopia,Fintech lawyer in Ethiopia,Fintech legal services in Ethiopia,Ethiopian Intellectual Property Office,Ethiopian Intellectual Property Authority,Intellectual property lawyer in Ethiopia
          intellectual property in Ethiopia,Intellectual property legal services in Addis Ababa,Trademark Registration and Protection Law of Ethiopia,Branding in Ethiopia
          ,franchise lawyer,Franchise law of Ethiopia,Trademark infringement in Ethiopia,Trademark Agent in Ethiopia
          Trademark Agent,Trademark renewal,License in Ethiopia
         , Trademark examiner in Ethiopia, patent examiner in Ethiopia,IP lawyer in Ethiopia,Leading intellectual property attorneys in Ethiopia,leading trademark attorneys in Ethiopia,Top trademark lawyer in Ethiopia,Trademark attorney in Ethiopia,Trademark registration in Ethiopia,
          Intellectual property law firm in Addis Ababa,Patent attorneys in Ethiopia,
          ,trade secret in Ethiopia,Competition lawyer in Ethiopia,Brand development advice in Ethiopia,Intellectual property lawyer near me,WIPO in Ethiopia,Patent prosecution in Ethiopia,Trademark search in Ethiopia,Charity lawyer in Ethiopia,Nonprofit and charity law in Ethiopia,Charitable and societies law of Ethiopia,Non profit organizations lawyer in Ethiopia,Non governmental organization law of Ethiopia,Charity lawyer near me,Labor and Employment in Ethiopia,Expatriates in Ethiopia,Employment lawyer in Ethiopia,Labor and employment law in Ethiopia,Labor lawyer in Addis Ababa,Labor attorney in Ethiopia,Employment contract,Immigration lawyer in Ethiopia,Workers' compensation lawyer,The best employment lawyer in Ethiopia,The best employment lawyer in Addis Ababa,Top employment lawyer in near me,Alternative Dispute Resolution in Ethiopia,Alternative Dispute Resolution Law of Ethiopia,ADR in Ethiopia,Arbitration in Ethiopia,Arbitration lawyer in Ethiopia,ADR law firm in Ethiopia,Arbitration service in Ethiopia,Arbitrator in Addis Ababa,ADR lawyer near me
          "
        />
        <meta property="og:site_name" content="Getnet Yawkal" />
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
