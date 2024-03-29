import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
const PracticeArea = () => {
  const [selectedContent, setSelectedContent] = useState({});

  useEffect(() => {
    console.log(selectedContent.services);
  }, [selectedContent]);
  const [isShadow, setIsShadow] = useState(false);

  const changeNavbar = () => {
    console.log("scrolling");
    if (window.scrollY >= 10) {
      setIsShadow(true);
    } else {
      setIsShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
  }, []);

  // console.log(isOpen)
  return (
    <div className="practice-page">
      <Head>
        <title>Getnet Yawkal Law Office | ADR</title>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content=" Getnet Yawkal Law Office is a leading commercial law office in Ethiopia, providing practical, strategical and process- and result-oriented legal services to local and international clients."
        ></meta>
        <meta property="og:title" content="Getnet Yawkal Law Office" />
        <meta property="og:site_name" content="Getnet Yawkal" />

        <meta property="og:url" content="https://getnetyawkal.com/" />
        <meta property="og:site_name" content="Getnet Yawkal Law Office" />
        <meta
          name="keywords"
          content="Legal firm in Ethiopia,Websites of law firms in Ethiopia,Affordable lawyers in Ethiopia,Affordable legal services in Ethiopia,Attorney legal service in Ethiopia,Find a lawyer in Ethiopia,Find a lawyer in Addis Ababa,International law firm in Ethiopia,Ethiopian Investment Commission,Investment incentives in Ethiopia,Ethiopian,Investment Legal Regime,National Bank of  Ethiopia,Business law in Ethiopia,The best business lawyers in Ethiopia,Top business lawyers in Ethiopia,Business attorney in Ethiopia,contract lawyer in Ethiopia,Legal Due Diligence in Ethiopia,Due-diligence preparation in Ethiopia
          Investment advisor in Ethiopia,Investment advisory firm in Ethiopia,Company registration in Ethiopia,Foreign exchange laws of Ethiopia,Investment laws of Ethiopia,Mergers and Acquisitions lawyer in Ethiopia,Commercial lawyer in Ethiopia,Corporate lawyer in Ethiopia,corporate law firm in Addis Ababa,Business lawyer in Ethiopia,The best tax attorneys in Ethiopia,Tax lawyer in Ethiopia,Tax law firm in Ethiopia,financial legal services in Ethiopia,bankruptcy lawyers in Ethiopia,Corporate & Finance lawyer in Ethiopia,business licenses in Ethiopia,Investment permit in Ethiopia,Real estate lawyer in Ethiopia
          mining lawyer in Ethiopia,Commercial representative in Ethiopia,Liaison office in Ethiopia,Fintech lawyer in Ethiopia,Fintech legal services in Ethiopia,Ethiopian Intellectual Property Office,Ethiopian Intellectual Property Authority,Intellectual property lawyer in Ethiopia
          intellectual property in Ethiopia,Intellectual property legal services in Addis Ababa,Trademark Registration and Protection Law of Ethiopia,Branding in Ethiopia
          ,franchise lawyer,Franchise law of Ethiopia,Trademark infringement in Ethiopia,Trademark Agent in Ethiopia
          Trademark Agent,Trademark renewal,License in Ethiopia
         , Trademark examiner in Ethiopia, patent examiner in Ethiopia,IP lawyer in Ethiopia,Leading intellectual property attorneys in Ethiopia,leading trademark attorneys in Ethiopia,Top trademark lawyer in Ethiopia,Trademark attorney in Ethiopia,Trademark registration in Ethiopia,
          Intellectual property law firm in Addis Ababa,Patent attorneys in Ethiopia,
          ,trade secret in Ethiopia,Competition lawyer in Ethiopia,Brand development advice in Ethiopia,Intellectual property lawyer near me,WIPO in Ethiopia,Patent prosecution in Ethiopia,Trademark search in Ethiopia,Charity lawyer in Ethiopia,Nonprofit and charity law in Ethiopia,Charitable and societies law of Ethiopia,Non profit organizations lawyer in Ethiopia,Non governmental organization law of Ethiopia,Charity lawyer near me,Labor and Employment in Ethiopia,Expatriates in Ethiopia,Employment lawyer in Ethiopia,Labor and employment law in Ethiopia,Labor lawyer in Addis Ababa,Labor attorney in Ethiopia,Employment contract,Immigration lawyer in Ethiopia,Workers' compensation lawyer,The best employment lawyer in Ethiopia,The best employment lawyer in Addis Ababa,Top employment lawyer in near me,Alternative Dispute Resolution in Ethiopia,Alternative Dispute Resolution Law of Ethiopia,ADR in Ethiopia,Arbitration in Ethiopia,Arbitration lawyer in Ethiopia,ADR law firm in Ethiopia,Arbitration service in Ethiopia,Arbitrator in Addis Ababa,ADR lawyer near me
          "
        />
        <meta property="og:site_name" content="Getnet Yawkal" />
      </Head>
      <Header isDark={false} isShadow={isShadow}></Header>

      <div className="practice-wrapper">
        <div className="popup-wrapper">
          <div className="popup-main">
            <div className="popup-text">
              <div className="popup-title">
                <img
                  className="popup-icon"
                  src="/charity-icon.svg"
                  alt=""
                ></img>
                <h1>ALTERNATIVE DISPUTE RESOLUTION (ADR)</h1>
              </div>

              <p>
                {" "}
                Getnet Yawkal Law Office assists clients by providing expert
                reports on domestic laws and sound and refined legal advice on
                Ethiopian arbitration laws, including but not limited to, new
                treaties signed and other existing laws that substantially
                affect the process of litigation and enforcement of awards.
              </p>
              <p>
                We prepare and vet commercial documents in line with the
                relevant laws related to dispute settlement and represent
                clients to safeguard their interests before arbitration
                tribunals. We are also known to assist clients by providing
                expert reports on domestic laws.
              </p>

              <p>
                We aspire to remain a hot commodity in the ADR industry, and for
                that, we commit ourselves to helping you find the best possible
                way out by drafting quality legal documents, rendering prudent
                legal advice, assisting you in negotiation processes, and
                representing you before arbitration tribunals.
              </p>

              <p>
                <span className="moto">
                  We maintain a full-service ADR capability and possess a grit
                  mindset to address conflict at any stage and go all the way to
                  the end.
                </span>{" "}
              </p>
            </div>
            <div className="popup-service">
              <div className="three-line">
                <img className="decor" src={"three.svg"} alt=""></img>
              </div>
              <h1>Some of Our Services</h1>
              <div className="services">
                <ul>
                  <li>Drafting and vetting documents</li>
                  <li>Negotiating</li>
                  <li>
                    Prepare legal advice, a legal opinion, and a legal
                    memorandum
                  </li>
                  <li>Preparing expert reports on domestic laws</li>
                  <li>Execution of arbitral awards</li>
                  <li>
                    Filing of an application for interim measures before the
                    courts
                  </li>
                  <li>Perform an early case assessment</li>
                  <li>Review claims</li>
                  <li>Representation</li>
                </ul>
              </div>
            </div>

            <a href="/practicearea">
              <div className="popup-goback">
                <img src="/back.svg" alt=""></img>
                <p>BACK TO PRACTICE AREA</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeArea;
