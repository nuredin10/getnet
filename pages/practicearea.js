import React,{useState, useEffect} from 'react'
import Header from '../components/Header/Header';
import Head from 'next/head';
import Footer from '../components/Footer/Footer'
const practiceArea = () => {

    const practiceContent = [
        {
            title: "Intellectual Properties",
            text: "Getnet Yawkal Law Office provides blue-ribbon Intellectual Property services covering the entire spectrum of IP rights in Ethiopia.",
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae viverra neque. Vivamus urna erat, lacinia nec erat id, egestas ultrices lectus. Nullam vitae odio at arcu eleifend volutpat. Vestibulum malesuada libero non laoreet rutrum. Nam est arcu, iaculis sit amet semper ut, euismod eu quam. Nulla facilisi. Integer tincidunt, tortor eu lobortis facilisis, metus enim imperdiet metus, sagittis semper mi orci ut enim. Aenean volutpat eros vel sollicitudin venenatis. Phasellus at dignissim risus, non porttitor massa. Aliquam massa elit, elementum quis est et, ornare finibus sapien. Phasellus in malesuada risus, accumsan viverra urna. Aliquam finibus velit non libero porttitor interdum. Duis faucibus rhoncus metus. Suspendisse auctor tincidunt odio vel tincidunt.'
        },
        {
            title: "Labor & Employment",
            text: "With the coming of many investors and expatriates in to Ethiopia, and with the issuance of different laws to regulate the employee and employee.",
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae viverra neque. Vivamus urna erat, lacinia nec erat id, egestas ultrices lectus. Nullam vitae odio at arcu eleifend volutpat. Vestibulum malesuada libero non laoreet rutrum. Nam est arcu, iaculis sit amet semper ut, euismod eu quam. Nulla facilisi. Integer tincidunt, tortor eu lobortis facilisis, metus enim imperdiet metus, sagittis semper mi orci ut enim. Aenean volutpat eros vel sollicitudin venenatis. Phasellus at dignissim risus, non porttitor massa. Aliquam massa elit, elementum quis est et, ornare finibus sapien. Phasellus in malesuada risus, accumsan viverra urna. Aliquam finibus velit non libero porttitor interdum. Duis faucibus rhoncus metus. Suspendisse auctor tincidunt odio vel tincidunt.'
        },
        {
            title: "Corporate and Finance",
            text: "The booming economy, luring incentive packages, infrastructural developments, abandoned and inexpensive labor, the large population number the country.",
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae viverra neque. Vivamus urna erat, lacinia nec erat id, egestas ultrices lectus. Nullam vitae odio at arcu eleifend volutpat. Vestibulum malesuada libero non laoreet rutrum. Nam est arcu, iaculis sit amet semper ut, euismod eu quam. Nulla facilisi. Integer tincidunt, tortor eu lobortis facilisis, metus enim imperdiet metus, sagittis semper mi orci ut enim. Aenean volutpat eros vel sollicitudin venenatis. Phasellus at dignissim risus, non porttitor massa. Aliquam massa elit, elementum quis est et, ornare finibus sapien. Phasellus in malesuada risus, accumsan viverra urna. Aliquam finibus velit non libero porttitor interdum. Duis faucibus rhoncus metus. Suspendisse auctor tincidunt odio vel tincidunt.'
        },
        {
            title: "Charity",
            text: "The charitable and civil societies law is a multifaceted and specialized one, We understand your challenges and want to help meet your goals. We value your.",
            desc: "The charitable and civil societies law is a multifaceted and specialized one, We understand your challenges and want to help meet your goals. We value your time and give utmost consideration for each case. Whether you want to setup a charitable organization, process its registration, deal with employees or tackle tax related issues we will be there to assist you in every step of your journey. Getnet Yawkal Law Office helps international charitable organizations by rendering sound and updated legal advises and resolving their issues in a way that keeps their interest safe and puts them in the best possible position out-there. Providing tailor made solutions that exceeds clients’ expectations intertwined with making a  swift reply to their requests is a basic of our practice.",
            icon: '/charity-icon.svg'
        },
        {
            title: "Alternative Dispute Resolution",
            text: "Getnet Yawkal law Office assists clients by providing sound and refined legal advise on Ethiopian arbitration laws including but not limited to new treaties.",
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae viverra neque. Vivamus urna erat, lacinia nec erat id, egestas ultrices lectus. Nullam vitae odio at arcu eleifend volutpat. Vestibulum malesuada libero non laoreet rutrum. Nam est arcu, iaculis sit amet semper ut, euismod eu quam. Nulla facilisi. Integer tincidunt, tortor eu lobortis facilisis, metus enim imperdiet metus, sagittis semper mi orci ut enim. Aenean volutpat eros vel sollicitudin venenatis. Phasellus at dignissim risus, non porttitor massa. Aliquam massa elit, elementum quis est et, ornare finibus sapien. Phasellus in malesuada risus, accumsan viverra urna. Aliquam finibus velit non libero porttitor interdum. Duis faucibus rhoncus metus. Suspendisse auctor tincidunt odio vel tincidunt.'
        },

    ]

    const [isOpen, setIsOpen] = useState(false)

    const [isShadow, setIsShadow] = useState(false)

    const changeNavbar = () => {
        console.log("scrolling")
        if (window.scrollY >= 80) {
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
        <div className='practice-page'>
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
            <Header isDark={false} isShadow={isShadow}></Header>
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
                            <div key={i} className='single-practice' onClick={(e)=>setIsOpen(!isOpen)}>
                                {isOpen ? (
                                    <PopUp title={e.title} desc={e.desc} icon={e.icon}></PopUp>
                                ) : null}
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
        </div>
    )
}

const PopUp =({title,desc,icon})=>{
    return(
        <div className='popup'>
            <h1>{title}</h1>
            <h1>{desc}</h1>
            <img src={icon}></img>
            <button onClick={()=>setIsOpen(!isOpen)}>Cancel</button>
        </div>
    )
}
export default practiceArea;