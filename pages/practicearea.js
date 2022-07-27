import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header';
import Head from 'next/head';
import Footer from '../components/Footer/Footer'
import { IoMdClose } from 'react-icons/io'
const PracticeArea = () => {
    const [selectedContent, setSelectedContent] = useState({});
    const popUpOnClickHandler = (e, data) => {
        setSelectedContent((selectedContent => e));
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        console.log(selectedContent.services)

    }, [selectedContent])

    const practiceContent = [
        {
            title: "Intellectual Properties",
            text: "Getnet Yawkal Law Office provides blue-ribbon Intellectual Property services covering the entire spectrum of IP rights in Ethiopia.",
            desc: 'Getnet Yawkal Law Office provides blue-ribbon Intellectual Property services covering the entire spectrum of IP rights in Ethiopia.                  Founded by the former Trademark and Industrial Design Examiner of the Ethiopian Intellectual Property Authority “EIPA”, Getnet Yawkal Law office, offers the legal skills and expertise, training and hands-on EIPA experience of its principal attorney to assist you in registering and protecting your Intellectual Properties in Ethiopia. Though-out the years we engaged ourselves in the IP industry we have become a reliable strategic partners for local clients as well as well-known international IP firms and foreign based businesses who wishes to register and enforce intellectual properties rights in Ethiopia. We give a great value to creation of the mind and understand your business and IP needs. We use a very cost effective and client focused service and proposes fixed fees for our exceptional services that we only charge when we add real value to your IP needs. Providing tailor made solutions that exceeds clients’ expectations intertwined with making a  swift reply to clients’ request is a bedrock of our IP practice.',
            services: [
                "Trademark availability search",
                "Brand development advise",
                "Filling trademark, patent, industrial design and utility model applications including claiming priority right",
                "Amending applications and registrations",
                "In licensing, out licensing and cross licensing of rights",
                "Negotiating, vetting or drafting license assignment or franchise agreements",
                "Representing before the EIPA tribunal and/or competent federal courts",
                "Handling prosecution, maintenance, and enforcement of active registrations.",
                "Handling cancellation and/or invalidation cases",
                "Handling infringement cases",
                "Reply to office actions or oppositions",
                "Conduct due diligence of the IP portfolio of a targeted company dealing merger or acquisition",
            ],
            icon: '/intellectual-icon.svg',
            image: '/IP.jpg',
            height: '122vh'

        },
        {
            title: "Labor & Employment",
            text: "With the coming of many investors and expatriates in to Ethiopia, and with the issuance of different laws to regulate the employee and employee.",
            desc: 'With the coming of many investors and expatriates in to Ethiopia, and with the issuance of different laws to regulate the employee and employee relationship and immigration issues, the need for best law firms equipped with top rated lawyers in the labor and employment sector; having the right information, technical knowledge and eloquence at their finger tips has become an imminent demand. Getnet Yawkal Law office with extensive experience on labor and employment, and immigration issues, has assisted clients with sound legal advises, superb utterance and negotiation skills and by successfully deafening their interest before court of laws. We aspire to remain hot commodity in the employment sector and for that we commit out selves in helping you find the best possible way outs by drafting quality legal documents, rendering prudent legal advises, assisting you in negotiation processes and representing you before competent authorities.We understand your challenges related to employment and immigration issues and want to help meet your goals. We value Clients’ time and give utmost consideration for each case. ',
            services: [
                "Drafting employment contracts ",
                "Drafting collective agreements",
                "Drafting  independent contractor agreements",
                "Drafting  employment benefit plans",
                "Drafting Human resource manuals or work rules",
                "Drafting  settlement and release agreements",
                "Negotiating",
                "Representation/ Litigating",
                "Processing resident permit",
                "Processing work permits",
                "Advising on foreign salary remittance laws",
                "Advising on employment related tax laws ",
                "Preparing legal advises, opinions and memos on employment and/or immigration issues",
                "Legalizing police clearance certificates for expatriates",
                "Preparing legal and regulatory compliance checklists",
            ],
            icon: '/labor-icon.svg',
            image: '/LE.jpg',
            height: '120vh'
        },
        {
            title: "Corporate and Finance",
            text: "The booming economy, luring incentive packages, infrastructural developments, abandoned and inexpensive labor, the large population number the country.",
            desc: 'The booming economy, luring incentive packages, infrastructural developments, abandoned and inexpensive labor, the large population number the country has are some of the many factors why investors are choosing Ethiopia as their ideal destination for investment.For years Getnet Yawkal Law Office has helped foreign investors and international law firms by rendering sound legal advises, preparing due diligence reports, processing merger & acquisition of target companies, facilitating licensing and registrations and preparing various legal documents in accordance with clients’ business strategies.Our knowledgeable and resource-full resources in commercial, competition, tax, finance and foreign exchange laws of Ethiopia, has helped our clients to update them selves from time to time and coup up with dynamic changes the corporate and finance sector has introduced over the years.With extensive experience in rendering sound legal advises, drafting quality legal documents and representing clients interest, we strive in helping you with a proper legal guidance, with the target of putting you in the most advantageous position possible. We maintain a full service corporate and finance capability and strive to add unmatched value to your commercial strategies.',
            services: [
                "Drafting  institutional documents i.e. Memorandum and Article of Association",
                "Incorporating subsidiary companies",
                "Registering commercial representative/ liaison offices",
                "Registering holding companies",
                "Registering branch offices of foreign business organization",
                "Registering branch offices of foreign chamber of commerce",
                "Drafting and reviewing share purchase agreements",
                "Drafting and registering franchise agreement",
                "Drafting and reviewing promise of sale agreements",
                "Registering project offices",
                "Drafting and reviewing technology transfer agreements (TTA)",
                "Drafting and reviewing security documents",

                "Drafting and reviewing loan agreements",
                "Drafting and reviewing Investment Shareholders Agreements",
                "Preparing due diligence reports",
                "Processing Merger & Acquisition of a target company and selling or acquisition of shares & takeovers",
                "Advising and assisting with the issuance of investment permits, commercial registration certificates and business licenses",
                "Advising on retention and utilization of export earnings and inward remittances",
                "Advising on local and foreign currency holding laws",
                "Advising on foreign salary remittance laws",

                "Advising in foreign exchange laws",
                "Advising in legal and regulatory framework of financial institutions",
                "Advising on double taxation and investment treaties",
                "Preparing legal and regulatory compliance checklists",
                "Authenticating and filing legal documents sourced from abroad",
                "Negotiating",
                "Representation/ Litigation",
            ],
            icon: '/corporate.svg',
            image: '/CF.jpg',
            height: '165vh'


        },
        {
            title: "Charity",
            text: "The charitable and civil societies law is a multifaceted and specialized one, We understand your challenges and want to help meet your goals. We value your.",
            desc: "The charitable and civil societies law is a multifaceted and specialized one, We understand your challenges and want to help meet your goals. We value your time and give utmost consideration for each case. Whether you want to setup a charitable organization, process its registration, deal with employees or tackle tax related issues we will be there to assist you in every step of your journey. Getnet Yawkal Law Office helps international charitable organizations by rendering sound and updated legal advises and resolving their issues in a way that keeps their interest safe and puts them in the best possible position out-there.Providing tailor made solutions that exceeds clients’ expectations intertwined with making a  swift reply to their requests is a basic of our practice.",
            services: [
                "Assisting in incorporating charitable organizations",
                "Advising on legal and regulatory framework",
                "Drafting & reviewing agreements",
                "Advising and issuing legal opinions and memorandums",
                "Assisting in the preparation of general assembly and board minutes",
                "Preparing legal & regulatory compliance checklists",
                "Advising on legal issues",
                "Representation/ Litigating",
            ],
            icon: '/charity-icon.svg',
            image: '/CH.jpg',
            height: '95vh'
        },
        {
            title: "Alternative Dispute Resolution",
            text: "Getnet Yawkal law Office assists clients by providing sound and refined legal advise on Ethiopian arbitration laws including but not limited to new treaties.",
            desc: 'Getnet Yawkal law Office assists clients by providing sound and refined legal advise on Ethiopian arbitration laws including but not limited to new treaties signed and old goodie  laws that substantial affect the process of litigation and enforcement of awards. We prepare and vet commercial documents in line with the relevant laws related with dispute settlement and represent clients to safeguard their interest before arbitration tribunals. We are also known assist clients by providing expert report on domestic laws. We aspire to remain hot commodity in the ADR industry and for that we commit out selves in helping you find the best possible way outs by drafting quality legal documents, rendering prudent legal advises, assisting you in negotiation processes and representing you before arbitration tribunals.We maintain a full service ADR capability and possesses a grit mindset to address conflict at any stage and go all the way to the end.',
            services: [
                "Drafting and vetting Documents",
                "Negotiating",
                "Prepare legal advise, legal opinion and legal memorandum",
                "Prepare expert report on domestic laws",
                "Execution of arbitral awards",
                "Filing or defence of application for interim measures before courts",
                "Perform early case assessment ",
                "Review claims",
                "Representation",
            ],
            icon: '/charity-icon.svg',
            image: '/ADR.jpg',
            height: '100vh'
        },

    ]

    const [isOpen, setIsOpen] = useState(false)

    const [isShadow, setIsShadow] = useState(false)

    const changeNavbar = () => {
        console.log("scrolling")
        if (window.scrollY >= 10) {
            setIsShadow(true);
        } else {
            setIsShadow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavbar);
    }, [])

    // console.log(isOpen)
    return (
        <div className='practice-page' >
            <Head>
                <title>Getnet Law Office | Practice Area</title>
                
            </Head>
            <Header isDark={false} isShadow={isShadow}></Header>
            {isOpen ? (
                <PopUp selectedContent={selectedContent} isOpen={isOpen} setIsOpen={setIsOpen}></PopUp>
            ) : <div className='practice-wrapper' >
                <div className="practice-front">
                    <div className="practice-main">
                        <div className='practice-text'>
                            <h1>Practice Area</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className='practice-image'>
                            <img className='pra-img' src={'pra.png'} ></img>

                        </div>
                    </div>
                </div>
                <div className='bottom-block'></div>
                <div className='practice-content'>
                    {
                        practiceContent.map((e, i) => (
                            <div key={i} className='single-practice' onClick={() => popUpOnClickHandler(e)}>

                                <div className='title-text'>
                                    <h1>{e.title}</h1>
                                    <p>{e.text}</p>
                                </div>
                                <h3 className='discover'>DISCOVER MORE</h3>
                            </div>
                        ))
                    }

                </div>
                <Footer></Footer>
            </div>}

        </div>
    )
}

const PopUp = ({ selectedContent, setIsOpen, isOpen }) => {


    return (
        <div className='popup-wrapper' style={{height: selectedContent.height}}>
            
            <div className='popup-main'>
                <div className='popup-text'>
                    <div className='popup-title'>
                        <img className='popup-icon' src={selectedContent.icon}></img>
                        <h1>{selectedContent.title}</h1>
                    </div>
                    <p>{selectedContent.desc}</p>
                </div>
                <div className='popup-service'>
                <div className='three-line'>
                  <img className='decor' src={'three.svg'} >

                  </img>
                 </div>
                    <h1>Some of Our Services</h1>
                    <div className='services'>
                        <ul>
                            {selectedContent.services.map((service, i) => (
                                <li key={i}>{service}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='popup-goback' onClick={() => setIsOpen(!isOpen)}>
                    <img src='/back.svg'></img><p>BACK TO PRACTICE AREA</p>
                </div>
            </div>
            <div className='popup-side-block'>
                <div className='close-button'>
                    <IoMdClose className='close-icon' onClick={() => setIsOpen(!isOpen)} />
                </div>
                <div className='service-image' style={{ backgroundImage: "url(" + selectedContent.image + ")" }}></div>
                {/* <img  src={selectedContent.image}></img> */}

                {/* <button onClick={() => setIsOpen(!isOpen)}>Cancel</button> */}
            </div>
        </div>
    )
}
export default PracticeArea;