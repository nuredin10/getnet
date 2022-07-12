import React,{useState} from 'react'
import Header from '../components/Header/Header';
import Head from 'next/head';
import Footer from '../components/Footer/Footer'
const practiceArea = () => {

    const practiceContent = [
        {
            title: "Intellectual Properties",
            text: "Getnet Yawkal Law Office provides blue-ribbon Intellectual Property services covering the entire spectrum of IP rights in Ethiopia."
        },
        {
            title: "Labor & Employment",
            text: "With the coming of many investors and expatriates in to Ethiopia, and with the issuance of different laws to regulate the employee and employee."
        },
        {
            title: "Corporate and Finance",
            text: "The booming economy, luring incentive packages, infrastructural developments, abandoned and inexpensive labor, the large population number the country."
        },
        {
            title: "Charity",
            text: "The charitable and civil societies law is a multifaceted and specialized one, We understand your challenges and want to help meet your goals. We value your."
        },
        {
            title: "Alternative Dispute Resolution",
            text: "Getnet Yawkal law Office assists clients by providing sound and refined legal advise on Ethiopian arbitration laws including but not limited to new treaties."
        },

    ]

    const [isOpen, setIsOpen] = useState(false)
    // console.log(isOpen)
    return (
        <>
            <Head>
                <title>Getnet Law Office</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600&display=swap" rel="stylesheet"></link>
            </Head>
            <Header></Header>
            <div className='practice-wrapper'>
                <div className="practice-front">
                    <div className="practice-main">
                        <div className='practice-text'>
                            <h1>Practice Area</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className='practice-image'>
                            <img></img>
                        </div>
                    </div>
                </div>
                <div className='bottom-block'></div>
                <div className='practice-content'>
                    {
                        practiceContent.map((e, i) => (
                            <div key={i} className='single-practice' onClick={()=>setIsOpen(!isOpen)}>
                                {/* {isOpen ? (
                                    <PopUp title={e.title} text={e.text}></PopUp>
                                ) : null} */}
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
            </div>
        </>
    )
}

const PopUp =({title,text})=>{
    return(
        <div>
            <h1>{title}</h1>
            <h1>{text}</h1>
            <button onClick={()=>setIsOpen(!isOpen)}>Cancel</button>
        </div>
    )
}
export default practiceArea;