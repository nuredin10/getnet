import React, { useState,useEffect } from "react";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillTwitterSquare} from "react-icons/ai";
import Link from 'next/link'

function Header({isDark, isShadow}) {
  const headerNav = [
    {
      dispay: "Home",
      path: '/'
    },
    {
      dispay: "Who We Are",
      path: "whoweare",
    },
    {
      dispay: "Practice Area",
      path: "practicearea",
    },
    {
      dispay: "Principal Attorney",
      path: "principalattroney",
    },
    {
      dispay: "Contact Us",
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
        <a className="logo-wrapper" id="textbox" href="/">
          {/* <h4 className="logo">LOGO</h4> */}
          <img src={`${isDark ? 'white-logo.svg' : 'logo_new.svg'}`} alt="logo" className="logo"></img>
        </a>
        <ul className={`nav-links ${isActive === true ? "nav-active" : ""}`}>
          <div className="links">
            {headerNav.map((e, i) => (
              <li key={i}>
                
                <a className={`${isDark ? 'white-link' : 'brown-link'}`} href={e.path}>{e.dispay}</a>
              </li>
            ))}
          </div>
          <div className="social-media-mobile">
          <a href="https://www.linkedin.com/in/getnet-yawkal-mebratu-ba155268/">

<AiFillLinkedin  className="icon" />
</a>
<a href="https://twitter.com/Ethilawfirm?t=-TotZd6xca8vkuVS17i9hQ&s=03">

<AiFillTwitterSquare className="icon" />
</a>
          </div>
        </ul>
        <div className={`social-media ${isDark ? 'white-social-media' : 'dark-social-media'}`}>
          <a href="https://www.linkedin.com/in/getnet-yawkal-mebratu-ba155268/">

            <AiFillLinkedin  className="icon" />
          </a>
          <a href="https://twitter.com/Ethilawfirm?t=-TotZd6xca8vkuVS17i9hQ&s=03">

            <AiFillTwitterSquare className="icon" />
          </a>
        </div>
        <div className={`burger ${toggle ? "toggle" : ""} ${isDark ? "dark-burger" : "white-burger"}`} onClick={navSlide}>
          <div className="line1"></div>
          {/* <div className="line2"></div> */}
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
