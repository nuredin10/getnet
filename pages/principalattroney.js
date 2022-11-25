import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Head from "next/head";
function PrincipalAttroney() {
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
    <div className="principal-wrapper">
      <Head>
        <title>Getnet Law Office | Principal Attorney</title>
      </Head>
      <Header isDark={false} isShadow={isShadow}></Header>
      <div className="principal-main">
        <div className="principal-front">
          <div className="principal-text-image">
            <div className="principal-text">
              <div className="text">
                <h3>Our Principal Attorney</h3>
                <p>Getnet Yawkal Mebratu</p>
              </div>
              <button>
                <a href="/contactus">Contact Us</a>
              </button>
            </div>
            <div className="principal-image">
              <img
                className="who-we-are-image1"
                src={"profile.png"}
                alt=""
              ></img>
            </div>
          </div>
        </div>
        <div className="principal-bottom-block">
          <p>Local Expertise, International Depth, Business Acumen</p>
        </div>
      </div>
      <div className="principal-text-wrapper">
        <div className="big-text-wrapper">
          <p>
            Getnet earned his LL.B degree from Bahir Dar University Faculty of
            Law in 2008. After his graduation Getnet has worked for various
            governmental and non-governmental organizations such as the
            Ethiopian Intellectual Property Authority(EIPA), Tadesse Kiros Law Office
            (TKLO), Mesfin Tafesse & Associates (MTA) and taught law courses at
            different University and University Colleges in Ethiopia.
            <br />
            <br /> Getnet is one of the top rated lawyers currently practicing
            in Ethiopia. As a Professional Lawyer, he has dealt with an array of
            very complicated cases often involving very high profile
            international and national clients, which paved the way for him to
            establish himself as a key contact to develop, prepare and review
            legal documents in accordance with clients’ commercial strategies.{" "}
            <br />
            <br />
            Throughout his career, Getnet has consistently exemplified integrity
            while maintaining quality and professionalism to provide first-rate
            legal services in Ethiopia, and his record is one of great
            responsibility, dedication, and solid achievements. <br />
            <br />
            Getnet is a very personable, goal-focused and versatile person
            accustomed to a fast-paced environment where deadlines are a
            priority and handling multiple jobs simultaneously is a requirement.
          </p>
        </div>
        <div className="all-quali ">
          <div className="golden">
            <div className="principal-qualification">
              <h3>Qualifications</h3>
              <div>
                <p>
                  Consultant and Attorney at Law-All Federal Courts Advocacy
                  License
                </p>
                <p>
                  Certified Intellectual Property Agent- Ethiopian Intellectual
                  Property Authority (EIPA)
                </p>
                <p>LL.B degree, Bahir Dar University Faculty of Law</p>
                <p>
                  Certificate in IP Law, World Intellectual Property
                  Organization(WIPO)
                </p>
                <p>
                  Certificate in IP Law, WIPO, Japan Patent Office (JPO) and
                  Kenya Industrial Property Institute (KIPI)
                </p>
                <p>
                  Certificate in IP Law, WIPO, Ethiopian Ministry of Science and
                  Technology and EIPA
                </p>
                <p>
                  Certificate in Arbitration Law, International Court of
                  Arbitration
                </p>
                <p>
                  Certificate in Court Annexed Mediation, Federal Supreme Court
                  of Ethiopia
                </p>
              </div>
            </div>
            <div className="principal-membership">
              <h3>Membership</h3>
              <div>
                <img
                  className="pra-img"
                  src={"Ethiopian-Lawyers-Association.jpg"}
                  alt=""
                ></img>
                {/* <p>Ethiopian Lawyers’ Association</p> */}
                <p>Ethiopian Federal Advocates’ Association</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default PrincipalAttroney;
