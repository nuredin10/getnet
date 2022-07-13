import React, { useEffect } from "react";
import { gsap } from "gsap";
// import './home/Home.scss'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


function AboutSection({ aboutActiveSlide }) {
  useEffect(() => {
    gsap.to(".active-slide", { duration: 1.5, left: "0%"});
    gsap.to(".remove-slide", { duration: 1.5, left: "-90%"});
  });

  return (
    <div className={`
    about-section ${aboutActiveSlide ? 'active-slide' : 'remove-slide'}`}>
      <div className="about-wrapper">
        <h3>Who We Are</h3>
        <div className="about-main">
          <p>
            Getnet Yawkal Law Office is a leading commercial law office in
            Ethiopia providing practical, strategically sound and result
            oriented first rate legal services for local and international
            clients.
            <br></br>
            <span className="highlight">
              We take Integrity, accountability, accessibility and timely
              delivery of our quality legal services as our core value of
              establishment.
            </span>
            <br></br> We value our client’s time and always strive in exceeding
            their expectations.

          </p>
          <div className="image-section">
            <div className="image"></div>
          </div>
          
        </div>
        <div className='link'>
        <a>See more in Our Practice Areas <ChevronRightIcon className="arrow"/></a>
      </div>
      </div>
    </div>
  );
}

export default AboutSection;
