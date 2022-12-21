import React, { useEffect } from "react";
import gsap from "gsap";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


function Qualifications({ qualActiveSlide }) {
  useEffect(() => {
    gsap.to(".qualActiveSlide", { duration: 1.5, left: "0%" });
    gsap.to(".qualRemoveSlide", { duration: 1.5, left: "-95%" });
    // console.log(aboutActiveSlide)
  }, [qualActiveSlide]);
  return (
    <div
      className={`
        qualifications slide-background ${
          qualActiveSlide ? "qualActiveSlide" : "qualRemoveSlide"
        }`}
    >
      <div className="principal">
        <h2>Getnet Yawkal Mebratu</h2>
        <p>
        Getnet earned his LL.B degree from Bahir Dar University Faculty of Law in 2008. After his graduation, Getnet has worked for various governmental and non-governmental organizations, such as the Ethiopian Intellectual Property Authority (EIPA), Tadesse Kiros Law Office (TKLO), Mesfin Tafesse & Associates (MTA) and taught law courses at different university and university colleges in Ethiopia.
            <br />
            <br /> Getnet is one of the top-rated lawyers currently practicing in Ethiopia. As a professional lawyer, he has dealt with an array of very complicated cases, often involving very high profile international and national clients, which paved the way for him to establish himself as a key contact to develop, prepare, and review legal documents in accordance with clients’ commercial strategies.{" "}
            <br />
            <br />
            Throughout his career, Getnet has consistently exemplified integrity while maintaining quality and professionalism to provide first-rate legal services in Ethiopia, and his record is one of great responsibility, dedication, and solid achievements. <br />
       
        </p>
      </div>
      {/* <div className="qual">
        <h2>Qualifications </h2>
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
      </div> */}
      <div className="select-link2">
        <a href="principalattroney">
          See more in Principal Attorney<ChevronRightIcon className="arrow" />
        </a>
      </div>
    </div>
  );
}

export default Qualifications;
