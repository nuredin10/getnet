import React from "react";
// import { ReactComponent as Intellectual} from '../asset/intellectual-icon.svg'
import { AiFillFacebook } from "react-icons/ai";
// import Intellectual from "../asset/intellectual-icon.svg"
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Background from '../asset/background.svg'


function PracticeArea() {
  return (
    <div className="practice-area" >
      <h2 className="practice-title">Practice Area</h2>
      <div className="practice-wrapper">
        <div className="practice">
          <div className="title">
            {/* <img src='../asset'></img> */}
            <AiFillFacebook className="icon" />
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
            <AiFillFacebook className="icon" />
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
            <AiFillFacebook className="icon" />
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
            <AiFillFacebook className="icon" />
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
      <div className="link">
        <a>
          See more in Our Practice Areas <ChevronRightIcon className="arrow" />
        </a>
      </div>
    </div>
  );
}

export default PracticeArea;
