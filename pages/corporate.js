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
        <title>Getnet Law Office | Practice Area</title>
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
          ,trade secret in Ethiopia,Competition lawyer in Ethiopia,Brand development advice in Ethiopia,Intellectual property lawyer near me,WIPO in Ethiopia,Patent prosecution in Ethiopia,Trademark search in Ethiopia,Charity lawyer in Ethiopia,Nonprofit and charity law in Ethiopia,Charitable and societies law of Ethiopia,Non profit organizations lawyer in Ethiopia,Non governmental organization law of Ethiopia,Charity lawyer near me,Labor and Employment in Ethiopia,Expatriates in Ethiopia,Employment lawyer in Ethiopia,Labor and employment law in Ethiopia,Labor lawyer in Addis Ababa,Labor attorney in Ethiopia,Employment contract,Immigration lawyer in Ethiopia,Workers&apos; compensation lawyer,The best employment lawyer in Ethiopia,The best employment lawyer in Addis Ababa,Top employment lawyer in near me,Alternative Dispute Resolution in Ethiopia,Alternative Dispute Resolution Law of Ethiopia,ADR in Ethiopia,Arbitration in Ethiopia,Arbitration lawyer in Ethiopia,ADR law firm in Ethiopia,Arbitration service in Ethiopia,Arbitrator in Addis Ababa,ADR lawyer near me
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
                <img className="popup-icon" src="/corporate.svg" alt=""></img>
                <h1>CORPORATE & FINANCE</h1>
              </div>

              <p>
                {" "}
                The booming economy, enticing incentive packages,
                infrastructural developments, an abandoned and inexpensive labor
                force, and the country&apos;s large population are just a few of the
                many reasons why investors are choosing Ethiopia as their ideal
                investment destination.
              </p>
              <p>
                For years, Getnet Yawkal Law Office has helped foreign investors
                and international law firms by rendering sound legal advice,
                preparing due diligence reports, processing mergers and
                acquisitions of target companies, facilitating licensing and
                registrations and preparing various legal documents in
                accordance with clients’ business strategies.
              </p>

              <p>
                Our knowledgeable and resourceful resources in commercial,
                competition, tax, finance, and foreign exchange laws of Ethiopia
                have helped our clients to update themselves from time to time
                and keep up with the dynamic changes the corporate and finance
                sectors have introduced over the years.
              </p>
              <p>
                With extensive experience in rendering sound legal advice,
                drafting quality legal documents, and representing clients’
                interests, we strive to provide you with proper legal guidance
                with the goal of putting you in the most advantageous position
                possible.
              </p>
              <p>
                <span className="moto">
                  We offer excellent corporate and financial legal services and
                  endeavor to add unparalleled value to your business
                  strategies.
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
                  <li>
                    Drafting institutional documents, i.e., Memorandum and
                    Articles of Association
                  </li>
                  <li>Incorporating subsidiary companies</li>
                  <li>Registering business organizations</li>
                  <li>
                    Registering commercial representative/ liaison offices
                  </li>
                  <li>Registering holding companies</li>
                  <li>
                    Registering branch offices of foreign business organization
                    incorporated abroad
                  </li>
                  <li>
                    Registering branch offices of foreign chambers of commerce
                  </li>
                  <li>Drafting and reviewing share purchase agreements</li>
                  <li>Drafting and registering a franchise agreement</li>
                  <li>Drafting and reviewing “promise of sale” agreements</li>
                  <li>Registering project offices</li>
                  <li>
                    Drafting and reviewing technology transfer agreements (TTA)
                  </li>
                  <li>Drafting and reviewing security documents</li>
                  <li>Drafting and reviewing loan agreements</li>
                  <li>
                    Drafting and reviewing investment and shareholders’
                    agreements
                  </li>
                  <li>Preparing due diligence reports</li>
                  <li>
                    Processing a target company&apos;s merger and acquisition, as
                    well as the sale or acquisition of shares and takeovers
                  </li>
                  <li>
                    Assisting with the issuance of investment permits,
                    commercial registration certificates, and business licenses
                  </li>
                  <li>
                    Advising on retention and utilization of export earnings and
                    inward remittances
                  </li>
                  <li>Advising on local and foreign currency holding laws</li>
                  <li>Advising on foreigners salary remittances laws</li>
                  <li>Advising on foreign exchange laws</li>
                  <li>
                    Advising on the legal and regulatory framework of financial
                    institutions
                  </li>
                  <li>Advising on double taxation and investment treaties</li>
                  <li>Preparing legal and regulatory compliance checklists</li>
                  <li>
                    Authenticating and filing legal documents sourced from
                    abroad
                  </li>
                  <li>Negotiating</li>
                  <li>Representation/ Litigation</li>
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
      <Footer></Footer>
    </div>
  );
};

export default PracticeArea;
