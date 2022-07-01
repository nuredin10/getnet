import React, { useEffect } from "react";
import { gsap } from "gsap";
// import './home/Home.scss'

function AboutSection({ aboutActiveSlide }) {
  useEffect(() => {
    gsap.to(".active-slide", { duration: 1.5, right: "0%" });
    gsap.to(".remove-slide", { duration: 1.5, right: "-90%" });
  });

  return (
    <div className="about">
      {/* <div className="about-wrapper">
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
            <br></br>
            We value our clients time and always strive in exceeding their
            expectations.
          </p>
          <div className="image-button">
            <div className="image"></div>
            <div className="button">
              <button>See More</button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default AboutSection;
