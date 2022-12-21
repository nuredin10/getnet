import React, { useEffect } from "react";
import { gsap } from "gsap";
// import { ReactComponent as Intellectual} from '../asset/intellectual-icon.svg'
import { AiFillFacebook } from "react-icons/ai";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function PracticeArea({ practiceActiveSlide }) {
  useEffect(() => {
    gsap.to(".practiceAreaActive-slide", { duration: 1.5, right: "0%" });
    gsap.to(".practiceAreaRemove-slide", { duration: 1.5, right: "-95%" });
  });

  return (
    <div
      className={`
    practice-area slide-background1 ${
      practiceActiveSlide
        ? "practiceAreaActive-slide"
        : "practiceAreaRemove-slide"
    }`}
    >
      <h2 className="practice-title">Practice Area</h2>
      <div className="practice-wrapper">
        <div className="practice">
          <a href="/practicearea" >
            <div className="title">
              <img src={"/intellectual-icon.svg"} alt=""></img>
              {/* <AiFillFacebook className="icon" /> */}
              <h3>Intellectual Proprieties</h3>
            </div>
            <p>
            Getnet Yawkal Law Office provides top-notch intellectual property services covering the entire spectrum of IP rights in Ethiopia...
            </p>
          </a>
        </div>
        <div className="practice">
          <a href="/practicearea" >
            <div className="title">
              <img src={"/labor-icon.svg"} className="icon" alt=""></img>
              {/* <AiFillFacebook className="icon" /> */}
              <h3>Labor & Employment</h3>
            </div>
            <p>
            We understand your challenges related to employment and immigration issues and give utmost consideration to each of your cases...
            </p>
          </a>
        </div>
     
        <div className="practice">
          <a href="/practicearea" >
            <div className="title">
              <img src={"corporate.svg"} alt=""></img>
              {/* <AiFillFacebook className="icon" /> */}
              <h3>Corporate & Finance</h3>
            </div>
            <p>

            We provide blue-ribbon corporate and financial legal services and strive to add unmatched value to your business strategies...{" "}
            </p>
          </a>
        </div>
        <div className="practice">
          <a href="/practicearea" >
            <div className="title">
              <img src={"/adr.svg"} alt=""></img>
              {/* <AiFillFacebook className="icon" /> */}
              <h3>Charity</h3>
            </div>
            <p>
            The charities and civil societies law is specialized, multi-faceted legislation that requires expertise...
            {" "}
            </p>
          </a>
        </div>
        <div className="practice">
          <a href="/practicearea" >
            <div className="title">
              <img src={"/charity-icon.svg"} alt=""></img>
              {/* <AiFillFacebook className="icon" /> */}
              <h3>Alternative Dispute Resolution (ADR) </h3>
            </div>
            <p>

            We maintain a full-service ADR capability and have the tenacity to address conflict at any stage and see it through...{" "}
            </p>
          </a>
        </div>
      </div>
      <div className="select-link">
        <a href="practicearea">
          See more in Our Practice Areas <ChevronRightIcon className="arrow" />
        </a>
      </div>
    </div>
  );
}

export default PracticeArea;
