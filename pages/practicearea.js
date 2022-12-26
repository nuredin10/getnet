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
      title: "Intellectual Properties",
      text: "Getnet Yawkal Law Office provides top-notch intellectual property services covering the entire spectrum of IP rights in Ethiopia...",
      desc: "Getnet Yawkal Law Office provides top-notch intellectual property services covering the entire spectrum of IP rights in Ethiopia. Getnet Yawkal Law Office provides blue-ribbon Intellectual Property services covering the entire spectrum of IP rights in Ethiopia.",
      desc1:
        "Founded by the former Trademark and Industrial Design Examiner of the Ethiopian Intellectual Property Authority (EIPA), Getnet Yawkal Law Office, offers the legal skills and expertise, training, and hands-on EIPA experience of its principal attorney to assist you in registering and protecting your intellectual property in Ethiopia.",
      desc2:
        "Though-out the years we engaged ourselves in the IP industry we have become a reliable strategic partners for local clients as well as well-known international IP firms and foreign based businesses who wishes to register and enforce intellectual properties rights in Ethiopia.",
      desc3:
        "We give a great value to creation of the mind and understand your business and IP needs. ",
      desc4:
        "We give great value to the creation of the mind and understand your business and IP needs. We use a very cost-effective and client-focused service and propose fixed fees for our exceptional services, which we only charge when we add real value to your IP needs.  ",
      desc5:
        "Providing tailor-made solutions that exceed clients’ expectations intertwined with a swift reply to clients’ request is the bedrock of our IP practice.",

      services: [
        "Trademark availability search",
        "Brand development advice",
        "Filing trademark, patent, industrial design, and utility model applications, including claiming priority rights",
        "Amending applications and/or registrations",
        "Filing and processing licensing and/or assignment of rights",
        "Negotiating, vetting, or drafting license assignment or franchise agreements",
        "Representing clients before the EIPA tribunal and/or competent federal courts",
        "Handling prosecution, maintenance, and enforcement of active registrations.",
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
      desc: " We understand your challenges related to employment and immigration issues and give utmost consideration to each of your cases. With the influx of many investors and expatriates into Ethiopia, as well as the passage of various laws governing employee-employer relationships and immigration issues, the demand for top-rated labor and employment lawyers armed with the necessary information, technical knowledge, and eloquence has become an urgent need.",
      desc2:
        "Getnet Yawkal Law Office, with extensive experience on labor and employment, and immigration issues, has assisted clients with sound legal advice, superb communication and negotiation skills, and by successfully defending their interests before courts of law. ",
      desc3:
        "We aspire to remain a hot commodity in the employment sector, and for that, we commit ourselves to helping you find the best possible way out by drafting quality legal documents, rendering prudent legal advice, assisting you in negotiation processes, and representing you before competent authorities.",
      desc5:
        "We understand your challenges related to employment and immigration issues and want to help you meet your goals. We value our clients time and give utmost consideration to each case.",
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
        "Advising on foreign salary remittance laws",
        "Advising on employment related tax laws ",
        "Preparing legal advice, opinions, and memos on employment and/or immigration issues",
        "Legalizing police clearance certificates for expatriates",
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
        "We provide blue-ribbon corporate and financial legal services and strive to add unmatched value to your business strategies. The booming economy, enticing incentive packages, infrastructural developments, an abandoned and inexpensive labor force, and the country's large population are just a few of the many reasons why investors are choosing Ethiopia as their ideal investment destination.",
      desc2:
        "For years Getnet Yawkal Law Office has helped foreign investors and international law firms by rendering sound legal advises, preparing due diligence reports, processing merger & acquisition of target companies, facilitating licensing and registrations, and preparing various legal documents in accordance with clients’ business strategies. ",

      desc3:
        "Our knowledgeable and resourceful resources in commercial, competition, tax, finance, and foreign exchange laws of Ethiopia have helped our clients to update themselves from time to time and keep up with the dynamic changes the corporate and finance sectors have introduced over the years.",
      desc4:
        "With extensive experience in rendering sound legal advice, drafting quality legal documents, and representing clients’ interests, we strive to provide you with a proper legal guidance with the goal of putting you in the most advantageous position possible.",
      desc5:
        "We offer excellent corporate and financial legal services and endeavor to add unparalleled value to your business strategies.",
      services: [
        "Drafting  institutional documents, i.e., Memorandum and Articles of Association",
        "Incorporating subsidiary companies",
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
        "Advising on foreign salary remittance laws",

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
      text: "The charities and civil societies law is specialized, multi-faceted legislation that requires expertise...",
      desc: "The charities and civil societies law is specialized, multi-faceted legislation that requires expertise.. Whether you want to setup a charitable organization, process its registration, deal with employees, or tackle tax-related issues, Getnet Yawkal Law Office will be there to assist you in every step of your journey.",
      desc1:
        "We help international charitable organizations by rendering sound and updated legal advice and resolving their issues in a way that keeps their interests safe and puts them in the best possible position out there.",
      desc2:
        "We understand your challenges and want to help you meet your goals. ",
      desc3: "We value your time and give utmost consideration to each case.",
      desc5:
        "Providing tailor-made solutions that exceed clients’ expectations, intertwined with a swift reply to their requests, is the foundation of our practice.",
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
      text: "We maintain a full-service ADR capability and have the tenacity to address conflict at any stage and see it through…",
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
        "Preparing legal advise, a legal opinion, and a legal memorandum",
        "Preparing expert reports on domestic laws",
        "Execution of arbitrator awards",
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
