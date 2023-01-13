import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import { IoMdClose } from "react-icons/io";
const PracticeArea = () => {
  const [selectedContent, setSelectedContent] = useState({});
  const popUpOnClickHandler = (e, data) => {
    setSelectedContent((selectedContent) => e);
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    console.log(selectedContent.services);
  }, [selectedContent]);

  const practiceContent = [
    {
      title: "Intellectual Property",
      text: "Getnet Yawkal Law Office provides top-notch intellectual property services covering the entire spectrum of IP rights in Ethiopia...",
      desc: " Getnet Yawkal Law Office provides blue-ribbon Intellectual Property services covering the entire spectrum of IP rights in Ethiopia.",
      desc1:
        "Founded by the former Trademark and Industrial Design Examiner of the Ethiopian Intellectual Property Authority (EIPA), Getnet Yawkal Law Office, offers the legal skills and expertise, training, and hands-on EIPA experience of its principal attorney to assist you in registering and protecting your intellectual property in Ethiopia.",
      desc2:
        "Through the years we have engaged ourselves in the IP industry, we have become a reliable partner for local clients as well as well-known international IP firms and foreign-based businesses that wish to register and enforce intellectual property rights in Ethiopia.",
      desc3:
        "We give  great value to the creation of the mind and understand your business and IP needs. ",
      desc4:
        "We use a very cost-effective and client-focused service and propose fixed fees for our exceptional services, which we only charge when we add real value to your IP needs.   ",
      desc5:
        "Providing tailor-made solutions that exceed clients’ expectations intertwined with a swift reply to clients’ request is the bedrock of our IP practice.",

      services: [
        "Trademark availability search",
        "Brand development advice",
        "Filing trademark, patent, industrial design, and utility model applications, including claiming priority rights",
        "Amending applications and/or registrations",
        "Filing and processing licensing and/or assignment of rights",
        "Negotiating, vetting, or drafting license, assignment or franchise agreements",
        "Representing clients before the EIPA tribunal and/or competent federal courts",
        "Handling prosecution, maintenance, and enforcement of active registrations",
        "Handling cancellation and/or invalidation cases",
        "Handling infringement cases",
        "Reply to office actions or oppositions",
        "Conduct due diligence on the IP portfolio of a targeted company dealing with mergers or acquisitions",
      ],
      icon: "/intellectual-icon.svg",
      //   image: "/IP.jpg",
      height: "122vh",
    },
    {
      title: "Labor & Employment",
      text: "We understand your challenges related to employment and immigration issues and give utmost consideration to each of your cases...",
      desc: "With the influx of many investors and expatriates into Ethiopia, as well as the passage of various laws governing employee-employer relationships and immigration issues, the demand for top-rated labor and employment lawyers armed with the necessary information, technical knowledge, and eloquence has become an urgent need.",
      desc2:
        "Getnet Yawkal Law Office, with extensive experience on labor and employment, and immigration issues, has assisted clients with sound legal advice, superb communication and negotiation skills, and by successfully defending their interests before courts of law.  ",
      desc3:
        "We aspire to remain a hot commodity in the employment sector, and for that, we commit ourselves to helping you find the best possible way out by drafting quality legal documents, rendering prudent legal advice, assisting you in negotiation processes, and representing you before competent authorities.",
      desc5:
        "We understand your challenges related to employment and immigration issues and want to help you meet your goals.",
      services: [
        "Drafting employment contracts ",
        "Drafting collective agreements",
        "Drafting independent contractor agreements",
        "Drafting employment benefit plans",
        "Drafting human resource manuals or work rules",
        "Drafting settlement and release agreements",
        "Negotiating",
        "Representation/ Litigating",
        "Processing resident permit",
        "Processing work permits",
        "Advising on foreigners salary remittances laws",
        "Advising on employment related tax laws ",
        "Preparing legal advice, opinions, and memos on employment and/or immigration issues",
        "Legalizing police clearance certificates ( Certificate of Good Conduct) for expatriates",
        "Preparing legal and regulatory compliance checklists",
      ],
      icon: "/labor-icon.svg",
      //   image: "/LE.jpg",
      height: "120vh",
    },
    {
      title: "Corporate & Finance",
      text: "We provide blue-ribbon corporate and financial legal services and strive to add unmatched value to your business strategies...",
      desc1:
        "The booming economy, enticing incentive packages, infrastructural developments, an abandoned and inexpensive labor force, and the country's large population are just a few of the many reasons why investors are choosing Ethiopia as their ideal investment destination.",
      desc2:
        "For years, Getnet Yawkal Law Office has helped foreign investors and international law firms by rendering sound legal advice, preparing due diligence reports, processing mergers and acquisitions of target companies, facilitating licensing and registrations and preparing various legal documents in accordance with clients’ business strategies. ",

      desc3:
        "Our knowledgeable and resourceful resources in commercial, competition, tax, finance, and foreign exchange laws of Ethiopia have helped our clients to update themselves from time to time and keep up with the dynamic changes the corporate and finance sectors have introduced over the years. ",
      desc4:
        "With extensive experience in rendering sound legal advice, drafting quality legal documents, and representing clients’ interests, we strive to provide you with  proper legal guidance with the goal of putting you in the most advantageous position possible.",
      desc5:
        "We offer excellent corporate and financial legal services and endeavor to add unparalleled value to your business strategies.",
      services: [
        "Drafting  institutional documents, i.e., Memorandum and Articles of Association",
        "Incorporating subsidiary companies",
        "Registering business organizations",
        "Registering commercial representative/ liaison offices",
        "Registering holding companies",
        "Registering branch offices of foreign business organization incorporated abroad",
        "Registering branch offices of foreign chambers of commerce",
        "Drafting and reviewing share purchase agreements",
        "Drafting and registering a franchise agreement",
        "Drafting and reviewing “promise of sale” agreements",
        "Registering project offices",
        "Drafting and reviewing technology transfer agreements (TTA)",
        "Drafting and reviewing security documents",

        "Drafting and reviewing loan agreements",
        "Drafting and reviewing investment and shareholders’ agreements",
        "Preparing due diligence reports",
        "Processing a target company's merger and acquisition, as well as the sale or acquisition of shares and takeovers",
        "Assisting with the issuance of investment permits, commercial registration certificates, and business licenses",
        "Advising on retention and utilization of export earnings and inward remittances",
        "Advising on local and foreign currency holding laws",
        "Advising on foreigners salary remittances laws",

        "Advising on foreign exchange laws",
        "Advising on the legal and regulatory framework of financial institutions",
        "Advising on double taxation and investment treaties",
        "Preparing legal and regulatory compliance checklists",
        "Authenticating and filing legal documents sourced from abroad",
        "Negotiating",
        "Representation/ Litigation",
      ],
      icon: "/corporate.svg",
      //   image: "/CF.jpg",
      height: "165vh",
    },
    {
      title: "Charity",
      text: "We understand your challenges and want to help you meet your goals...",
      desc: "The charities and civil societies law is specialized, multi-faceted legislation that requires expertise. Whether you want to setup a charitable organization, process its registration, deal with employees, or tackle tax-related issues, Getnet Yawkal Law Office will be there to assist you in every step of your journey.",
      desc1:
        "We help international charitable organizations by rendering sound and updated legal advice and resolving their issues in a way that keeps their interests safe and puts them in the best possible position out there.",
      desc2:
        "We understand your challenges and want to help you meet your goals. ",
      desc3: "We value your time and give utmost consideration to each case.",
      desc5:
        "Providing tailor-made solutions that exceed clients’ expectations, intertwined with a swift reply to their requests, is the foundation of our legal  practice.",
      services: [
        "Assisting in incorporating charitable organizations",
        "Advising on the legal and regulatory framework",
        "Drafting  and reviewing agreements",
        "Advising and issuing legal opinions and legal memoranda",
        "Assisting in the preparation of general assembly and board minutes",
        "Preparing legal  and regulatory compliance checklists",
        "Advising on legal issues",
        "Representation/ Litigating",
      ],
      icon: "/adr.svg",
      //   image: "/CH.jpg",
      height: "95vh",
    },
    {
      title: "Alternative Dispute Resolution  (ADR)",
      text: "We maintain a full-service ADR capability and have the tenacity to address conflict at any stage and see it through...",
      desc: "Getnet Yawkal Law Office assists clients by providing expert reports on domestic laws and sound and refined legal advice on Ethiopian arbitration laws, including but not limited to, new treaties signed and other existing laws that substantially affect the process of litigation and enforcement of awards.  ",
      desc1:
        "We prepare and vet commercial documents in line with the relevant laws related to dispute settlement and represent clients to safeguard their interests before arbitration tribunals. We are also known to assist clients by providing expert reports on domestic laws.",
      desc2:
        "We aspire to remain a hot commodity in the ADR industry, and for that, we commit ourselves to helping you find the best possible way out by drafting quality legal documents, rendering prudent legal advice, assisting you in negotiation processes, and representing you before arbitration tribunals. ",
      desc5:
        "We maintain a full-service ADR capability and possess a grit mindset to address conflict at any stage and go all the way to the end.",
      services: [
        "Drafting and vetting documents",
        "Negotiating",
        "Prepare legal advice, a legal opinion, and a legal memorandum",
        "Preparing expert reports on domestic laws",
        "Execution of arbitral awards",
        "Filing of an application for interim measures before the courts",
        "Perform an early case assessment  ",
        "Review claims",
        "Representation",
      ],
      icon: "/charity-icon.svg",
      //   image: "/ADR.jpg",
      height: "100vh",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

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
        <meta property="og:site_name" content="Getnet Yawkal" />
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
      {isOpen ? (
        <PopUp
          selectedContent={selectedContent}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        ></PopUp>
      ) : (
        <div className="practice-wrapper">
          <div className="practice-front">
            <div className="practice-main">
              <div className="practice-text">
                <h1>Practice Area</h1>
              </div>
              <div className="practice-image">
                <img className="pra-img" src={"pra.png"} alt=""></img>
              </div>
            </div>
          </div>
          <div className="bottom-block"></div>
          <div className="practice-content">
            {practiceContent.map((e, i) => (
              <div
                key={i}
                className="single-practice"
                onClick={() => popUpOnClickHandler(e)}
              >
                <div className="title-text">
                  <div className="title-wrapper">
                    {" "}
                    <img className="title-icon" src={e.icon} alt=""></img>{" "}
                    <h1>{e.title}</h1>
                  </div>

                  <p>{e.text}</p>
                </div>
                <h3 className="discover">DISCOVER MORE</h3>
              </div>
            ))}
          </div>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

const PopUp = ({ selectedContent, setIsOpen, isOpen }) => {
  return (
    <div className="popup-wrapper">
      <div className="popup-main">
        <div className="popup-text">
          <div className="popup-title">
            <img className="popup-icon" src={selectedContent.icon} alt=""></img>
            <h1>{selectedContent.title}</h1>
          </div>
          <p>{selectedContent.desc}</p>
          <p>{selectedContent.desc1}</p>
          <p>{selectedContent.desc2}</p>
          <p>{selectedContent.desc3}</p>
          <p>{selectedContent.desc4}</p>
          <p>
            <span className="moto">{selectedContent.desc5}</span>{" "}
          </p>
        </div>
        <div className="popup-service">
          <div className="three-line">
            <img className="decor" src={"three.svg"} alt=""></img>
          </div>
          <h1>Some of Our Services</h1>
          <div className="services">
            <ul>
              {selectedContent.services.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="popup-goback" onClick={() => setIsOpen(!isOpen)}>
          <img src="/back.svg" alt=""></img>
          <p>BACK TO PRACTICE AREA</p>
        </div>
      </div>

      <div className="close-button">
        <IoMdClose className="close-icon" onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div className="popup-side-block">
        {/* <div
          className="service-image"
          style={{ backgroundImage: "url(" + selectedContent.image + ")" }}
        ></div> */}
        {/* <img  src={selectedContent.image}></img> */}

        {/* <button onClick={() => setIsOpen(!isOpen)}>Cancel</button> */}
      </div>
    </div>
  );
};
export default PracticeArea;
