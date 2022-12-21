import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

const WhoWeAre = () => {
  const [isShadow, setIsShadow] = useState(false);

  const changeNavbar = () => {
    console.log("scrolling");
    if (window.scrollY >= 80) {
      setIsShadow(true);
    } else {
      setIsShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
  }, []);

  return (
    <div className="about-wrapper">
      <Head>
        <title>Getnet Law Office | Who We Are</title>
      </Head>
      <Header isDark={false} isShadow={isShadow}></Header>
      <div className="about-main1">
        <div className="text">
          <h1>Who We Are</h1>
          <p>
            Getnet Yawkal Law Office is a leading commercial law office in
            Ethiopia, providing practical, strategic, and process-and
            result-oriented legal services to local and international clients.
            <br />
            <br />
            <span className="highlight">
              {" "}
              We take integrity, accountability, accessibility, and timely
              delivery of our quality legal services as the core values of our
              establishment.
            </span>{" "}
            <br></br>
            <br></br>
            We value our clients’ time and always strive to exceed their
            expectations. <br />
            <br />
            We depend on our nimbleness to understand your case and provide a
            profound and tailor-made solution to it, but we also maintain close
            associations with select local counsel to be called upon when
            needed. <br />
            <br />
            With extensive expertise in intellectual property, employment and
            labor, corporate and finance, tax, charity, and alternative dispute
            resolution laws of Ethiopia, Getnet Yawkal Law Office offers strong,
            sound, and cost-effective legal guidance in resolving your cases
            professionally and looks forward to being your strategic partner and
            principal legal advisor in Ethiopia
          </p>
        </div>
        <div className="image-wrapper">
          <img className="who-we-are-image2" src={"logo_new.svg"} alt=""></img>
        </div>
      </div>
      <div className="next-page-links">
        <Link href="/practicearea">
          <div className="">
            <h1>practice area</h1>
            <img className="rightarrow" src={"/rightArrow.svg"} alt=""></img>
          </div>
        </Link>
        <Link href="principalattroney">
          <div className="">
            <h1>principal Attorney</h1>
            <img className="rightarrow" src={"/rightArrow.svg"} alt=""></img>
          </div>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default WhoWeAre;
