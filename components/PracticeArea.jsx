import React,{useEffect} from "react";
import {gsap} from "gsap";
// import { ReactComponent as Intellectual} from '../asset/intellectual-icon.svg'
import { AiFillFacebook } from "react-icons/ai";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


function PracticeArea({practiceActiveSlide}) {
  useEffect(() => {
    gsap.to(".practiceAreaActive-slide", { duration: 1.5, right: "0%" });
    gsap.to(".practiceAreaRemove-slide", { duration: 1.5, right: "-95%" });
  });
  
  return (
    <div className={`
    practice-area slide-background1 ${practiceActiveSlide ? 'practiceAreaActive-slide' : 'practiceAreaRemove-slide'}`}>
      <h2 className="practice-title">Practice Area</h2>
      <div className="practice-wrapper">
        <div className="practice">
          <div className="title">
            <img src={'/intellectual-icon.svg'} alt=''></img>
            {/* <AiFillFacebook className="icon" /> */}
            <h3>Intellectual Proprieties</h3>
          </div>
          <p>
            Founded by the former Trademark and Industrial Design Examiner of
            the Ethiopian Intellectual Property Authority “EIPA”, Getnet Yawkal
            Law office, offers the legal skills and expertise, training and
            hands-on EIPA ....
          </p>
        </div>
        <div className="practice">
          <div className="title">
            <img src={'/labor-icon.svg'} className="icon" alt=''></img>
            {/* <AiFillFacebook className="icon" /> */}
            <h3>Labor & Employment</h3>
          </div>
          <p>
            With the coming of many investors and expatriates in to Ethiopia,
            and with the issuance of different laws to regulate the employee and
            employee relationship and immigration issues, the need for best law
            firms....
          </p>
        </div>
        <div className="practice">
          <div className="title">
            <img src={'/charity-icon.svg'} alt=''></img>
            {/* <AiFillFacebook className="icon" /> */}
            <h3>Charity</h3>
          </div>
          <p>
            The booming economy, luring incentive packages, infrastructural
            developments, abandoned and inexpensive labor, the large population
            number the country has are some of the many factors why investors
            ....{" "}
          </p>
        </div>
        <div className="practice">
          <div className="title">
            <img src={'corporate.svg'} alt=''></img>
            {/* <AiFillFacebook className="icon" /> */}
            <h3>Corporate and Finance</h3>
          </div>
          <p>
            The charitable and civil societies law is a multifaceted and
            specialized one, We understand your challenges and want to help meet
            your goals. We value your time and give utmost consideration for
            each case.{" "}
          </p>
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
