import React, { useState } from "react";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillTwitterSquare} from "react-icons/ai";

function Header() {
  const headerNav = [
    {
      dispay: "who we are",
      path: "/",
    },
    {
      dispay: "sector",
      path: "/",
    },
    {
      dispay: "practice area",
      path: "/",
    },
    {
      dispay: "contact us",
      path: "/",
    },
  ];

  const [isActive, setIsActive] = useState(false);
  const [toggle, setToggle] = useState(false);

  const navSlide = () => {
    setIsActive(!isActive);
    setToggle(!toggle);
  };

  // const changeNavbar = () => {
  //   console.log("scrolling")
  //   if (window.scrollY >= 80) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  // window.addEventListener("scroll", changeNavbar);

  return (
    <div className="header">
      <nav className="navbar">
        <a className="logo-wrapper" href="#home">
          <h4 className="logo">LOGO</h4>
        </a>

        <ul className={`nav-links ${isActive === true ? "nav-active" : ""}`}>
          <div className="links">
            {headerNav.map((e, i) => (
              <li key={i}>
                <a>{e.dispay}</a>
              </li>
            ))}
          </div>
          <div className="social-media-mobile">
            <AiFillFacebook className="icon" />
            <AiFillLinkedin className="icon" />
            <AiFillTwitterSquare className="icon" />
          </div>
        </ul>
        <div className="social-media">
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
