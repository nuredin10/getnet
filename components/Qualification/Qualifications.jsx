import React, { useEffect } from "react";
import gsap from "gsap";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


function Qualifications({ qualActiveSlide }) {
  useEffect(() => {
    gsap.to(".qualActiveSlide", { duration: 1.5, right: "0%" });
    gsap.to(".qualRemoveSlide", { duration: 1.5, right: "-95%" });
    // console.log(aboutActiveSlide)
  }, [qualActiveSlide]);
  return (
    <div
      className={`
        qualifications slide-background1 ${
          qualActiveSlide ? "qualActiveSlide" : "qualRemoveSlide"
        }`}
    >
      <div className="principal">
        <h2>Principal Attorney</h2>
        <p>
          Getnet earned his LL.B degree from Bahir Dar University Faculty of Law
          in 2008. After his graduation Getnet has worked for various
          governmental and non-governmental organizations such as the Ethiopian
          Intellectual Property Authority and taught law courses at different
          University and University Colleges in Ethiopia.
        </p>
      </div>
      <div className="qual">
        <h2>Principal Attorney </h2> <span>- qualifications</span>
        <div className="texts">
          <p>
          Consultant and Attorney at Law-All Federal Courts Advocacy License
          </p>
          <p>
          Certified Intellectual Property Agent- Ethiopian Intellectual Property Authority (EIPA)
          </p>
          <p>
          LL.B degree, Bahir Dar University Faculty of Law
          </p>
          <p>
          Certificate in IP Law, World Intellectual Property Organization(WIPO)
          </p>
          <p>
          Certificate in IP Law, WIPO, Japan Patent Office (JPO) and Kenya Industrial Property Institute (KIPI)
          </p>
        </div>
      </div>
      <div className="select-link">
        <a>
          See more in Principal Attorney<ChevronRightIcon className="arrow" />
        </a>
      </div>
    </div>
  );
}

export default Qualifications;
