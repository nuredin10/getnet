import React, { useState,useEffect } from "react";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillTwitterSquare} from "react-icons/ai";

function Header({isDark, isShadow}) {
  const headerNav = [
    {
      dispay: "who we are",
      path: "whoweare",
    },
    {
      dispay: "practice area",
      path: "practicearea",
    },
    {
      dispay: "Principal Attorney",
      path: "principalattroney",
    },
    {
      dispay: "contact us",
      path: "contactus",
    },
  ];

  const [isActive, setIsActive] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const navSlide = () => {
    setIsActive(!isActive);
    setToggle(!toggle);
  };

  


  return (
    <div className={`header ${isDark ? 'dark-header' : 'white-header'} ${isShadow ? 'shadow-header' : ''}`}>
      <nav className="navbar">
        <a className="logo-wrapper" href="/">
          {/* <h4 className="logo">LOGO</h4> */}
          <img src={`${isDark ? 'white-logo.svg' : 'logo_new.svg'}`} alt="logo" className="logo"></img>
        </a>
        <ul className={`nav-links ${isActive === true ? "nav-active" : ""}`}>
          <div className="links">
            {headerNav.map((e, i) => (
              <li key={i}>
                
                <a className={`${isDark ? 'white-link' : 'dark-link'}`} href={e.path}>{e.dispay}</a>
              </li>
            ))}
          </div>
          <div className="social-media-mobile">
            <AiFillFacebook className="icon" />
            <AiFillLinkedin className="icon" />
            <AiFillTwitterSquare className="icon" />
          </div>
        </ul>
        <div className={`social-media ${isDark ? 'white-social-media' : 'dark-social-media'}`}>
            <AiFillFacebook className="icon" />
            <AiFillLinkedin className="icon" />
            <AiFillTwitterSquare className="icon" />
        </div>
        <div className={`burger ${toggle ? "toggle" : ""}`} onClick={navSlide}>
          <div className="line1"></div>
          {/* <div className="line2"></div> */}
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
