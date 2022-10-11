import React, { useEffect } from "react";
import { gsap } from "gsap";
// import './home/Home.scss'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


function AboutSection({ aboutActiveSlide }) {
  useEffect(() => {
    gsap.to(".active-slide", { duration: 1.5, left: "0%", ease: "power2.out" });
    gsap.to(".remove-slide", { duration: 1.5, left: "-95%", ease: "power2.out" });
  });

  return (
  
    <div className={`
    about-section slide-background ${aboutActiveSlide ? 'active-slide'  : 'remove-slide'}`}>
       
      <div className="about-wrapper">
        <h3>Who We Are</h3>
        <div className="about-main">
          <p>
            Getnet Yawkal Law Office is a leading commercial law office in
            Ethiopia providing practical, strategically sound and result
            oriented first rate legal services for local and international
            clients.<br/>
            
            <span className="highlight">
              We take Integrity, accountability, accessibility and timely
              delivery of our quality legal services as our core value of
              establishment.
            </span>
            <br/>We value our client’s time and always strive in exceeding
            their expectations.<br /><br />
                        We depend on our nimbleness to understand your case and provide a profound and tailor made solution to it, but we also maintain close associations with select local counsel to be called upon when needed. <br /><br />
                        With extensive expertise in intellectual property, employment and labor, corporate and finance,  tax, charity and Alternative Dispute Resolution laws of Ethiopia, Getnet Yawkal Law Office offers a strong, sound, and cost effective legal guidance in resolving your cases professionally and looks forward to being your strategic partner and principal legal advisor in Ethiopia.

          </p>
          <div className="image-section">
            <div className="image">
            <img className='who-we-are-image' src={'logo_new.svg'} alt='' ></img>

            </div>
          </div>
          
        </div>
        <div className="select-link1">
        <a href="whoweare">
          See more in Who We Are<ChevronRightIcon className="arrow" />
        </a>
      </div>
      </div>
    </div>
  );
}

export default AboutSection;
