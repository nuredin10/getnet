import React, { useState, useEffect } from 'react'
import { gsap } from "gsap";
import Header from '../components/Header/Header'
import Head from 'next/head';
import AboutSection from '../components/AboutSection/AboutSection';
// import { width } from '@mui/system';
// import About from './About/About';
import Qualifications from '../components/Qualification/Qualifications'
import { func } from 'prop-types';
import PracticeArea from '../components/PracticeArea';
import ContactUs from '../components/ContactUs/ContactUs';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { SettingsAccessibilityOutlined } from '@mui/icons-material';
import "react-vertical-timeline-component/style.min.css";



function Home() {

  var scrollCounter = 0;

  const [slide1, setSlide1] = useState("");
  const [slide2, setSlide2] = useState("");
  const [slide3, setSlide3] = useState("");
  const [h1, setH1] = useState("normalH1");
  const [p, setP] = useState("hideP");
  const [h3, setH3] = useState("normalH3");
  const [p1, setP1] = useState("hideP");
  const [h12, setH12] = useState("normalH1");
  const [p2, setP2] = useState("hideP");
  const [block, setBlock] = useState('')
  const [block1, setBlock1] = useState('')
  const [block2, setBlock2] = useState('')
  const [block3, setBlock3] = useState('')

  const [aboutActiveSlide, setAboutActiveSlide] = useState(false);
  const [qualActiveSlide, setqualActiveSlide] = useState(false);
  const [practiceActiveSlide, setPracticeActiveSlide] = useState(false);
  const [contactActiveSlide, setContactActiveSlide] = useState(false);

  const [count, setCount] = useState([]);

  const images = {
    image1: "https://concertopr.com/app/uploads/2021/10/Paysage2_M.jpg",
    images2: 'https://concertopr.com/app/uploads/2021/10/Homepage-option-1.jpg',
    images3: 'https://concertopr.com/app/uploads/2021/10/Pilote-.jpeg',
    images4: 'https://concertopr.com/app/uploads/2021/09/Homepage-option-2.jpg',
  }

  const mouseEnter = () => {
    setSlide1("active");
    setH1("smallH1")
    setP("showP")
    setBlock('longBlock')
  }
  const mouseLeave = () => {
    setSlide1("remove");
    setH1("normalH1")
    setP("hideP")
    setBlock("shortBlock")

  }
  const mouseEnter1 = () => {
    setSlide2("active");
    setH3("smallH3")
    setP1("showP")
    setBlock1('longBlock1')


  }
  const mouseLeave1 = () => {
    setSlide2("remove");
    setH3("normalH3")
    setP1("hideP")
    setBlock1("shortBlock1")



  }
  const mouseEnter2 = () => {
    setSlide3("active");
    setH12("smallH1")
    setP2("showP")
    setBlock2('longBlock2')

  }
  const mouseLeave2 = () => {
    setSlide3("remove");
    setH12("normalH1")
    setP2("hideP")
    setBlock2("shortBlock2")


  }


  useEffect(() => {
    gsap.to(".active", { duration: 1.5, y: "-70vh", display: "block" })
    gsap.to(".remove", { duration: 1.5, y: "0vh" })
    gsap.to(".remove", { display: "none" })
    gsap.to(".longBlock", { duration: 1, ease: "power2.out", height: "80%" })
    gsap.to(".longBlock1", { duration: 1, ease: "power2.out", height: "85%", width: "98%" })
    gsap.to(".longBlock2", { duration: 1, ease: "power2.out", height: "90%", width: "94%" })
    gsap.to(".longBlock3", { duration: 1, ease: "power2.out", height: "95%", width: "90%" })
    gsap.to(".shortBlock", { duration: 1, height: "25%" })
    gsap.to(".shortBlock1", { duration: 1, height: "40%", width: "96%" })
    gsap.to(".shortBlock2", { duration: 1, height: "55%", width: "92%" })
    gsap.to(".shortBlock3", { duration: 1, height: "70%", width: "88%" })

  }, [mouseEnter, mouseLeave])



  useEffect(() => {
    if (count == 1) {
      setAboutActiveSlide(true)
      setqualActiveSlide(false)
      setPracticeActiveSlide(false)
      setContactActiveSlide(false)
    }
    else if (count == 3) {
      setAboutActiveSlide(false)
      setqualActiveSlide(true)
      setPracticeActiveSlide(false)
      setContactActiveSlide(false)

    }
    else if (count == 5) {
      setAboutActiveSlide(false)
      setqualActiveSlide(false)
      setPracticeActiveSlide(true)
      setContactActiveSlide(false)

    }
    else if (count == 7) {
      setAboutActiveSlide(false)
      setqualActiveSlide(false)
      setPracticeActiveSlide(false)
      setContactActiveSlide(true)
    }

    if (count % 2 == 0) {
      setAboutActiveSlide(false)
      setqualActiveSlide(false)
      setPracticeActiveSlide(false)
      setContactActiveSlide(false)
    }

    if(count%2!=0)
    setIsWhiteColor(false)
  else
    setIsWhiteColor(true)

  }, [count])





  useEffect(() => {

    window.addEventListener("wheel", (e) => {



      // console.log(e.wheelDeltaY)
      if (window.scrollY > 1000) {
        setCount(count => ++count)
        window.scrollTo(0, 0)
      }
    }, true)

    // window.addEventListener("wheel", event => console.info(event.offsetX));
  }, [])

  // window.addEventListener("wheel", (e) => {



  //   // console.log(e.wheelDeltaY)
  //   if (window.scrollY > 1000) {
  //     setCount(count => ++count)
  //     window.scrollTo(0, 0)
  //   }
  // }, true)

  // window.addEventListener("wheel", event => console.info(event.offsetX));

  // const [isScrolling, setIsScrolling] = useState(false);

  // const onScroll = () => {
  //   const timeout = null;
  //   clearTimeout(timeout);


  //   if (!isScrolling) {
  //     setIsScrolling(true);
  //     setCount(cout=>++count);
  //   }

  //   timeout = setTimeout(() => {
  //     setIsScrolling(false)
  //   }, 200);
  // };
  const [isWhiteColor, setIsWhiteColor] = useState(true)
  const [verticalTimeline, setVerticalTimeline] = useState(true)

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
      <div className='main-wrapper'>
        <div className='container'>
          <h1>{count}</h1>
          <Header></Header>
              <div className='explore' onClick={() => setCount(count => ++count)}>
                <div className='scroll-down'>
                  <h3 style={{color: isWhiteColor ? '#F5F5F5' : '#7A431D'}}>explore</h3>
                  {
                    verticalTimeline ? (
                      <VerticalTimeline>
                        <VerticalTimelineElement className="vertical-timeline-element--work">
                          {/* <h3>as</h3> */}
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work">
                          {/* <h3>as</h3> */}
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work">
                          {/* <h3>as</h3> */}
                        </VerticalTimelineElement>
                      </VerticalTimeline>
                    ) : 
                    null
                  }
                  <div className='arrow-wrapper'>
                      <img className='arrow' src={'/arrow.svg'} ></img>
                  </div>
                </div>
              </div>
          <div className='wrapper'>
            <div className='blocks'>
              <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={`${block} one block ${count % 2 != 0 ? 'longBlock' : 'shortBlock'}`} onClick={() => setCount(7)}><p>CONTACT US</p></div>
              <div onMouseEnter={mouseEnter1} onMouseLeave={mouseLeave1} className={`${block1} two block ${count % 2 != 0 ? 'longBlock1' : 'shortBlock1'}`} onClick={() => setCount(3)}><p>PRINCIPAL ATTORNEY</p> </div>
              <div onMouseEnter={mouseEnter2} onMouseLeave={mouseLeave2} className={`${block2} three block ${count % 2 != 0 ? 'longBlock2' : 'shortBlock2'}`} onClick={() => setCount(5)}><p>PRACTICE AREA</p></div>
              <div onClick={() => setCount(1)} className={`four block ${count % 2 != 0 ? 'longBlock3' : 'shortBlock3'}`}><p>WHO WE ARE</p></div>
            </div>
            <div className='hr-line line-one'></div>
            <div className='hr-line line-two'></div>
            <div className='hr-line line-three'></div>

            <div className='front'>

              <div className='images'>
                <div className="show img" style={{ backgroundImage: "url(" + images.image1 + ")" }}></div>
                <div className={`${slide1} hide img`} style={{ backgroundImage: "url(" + images.images2 + ")" }}></div>
                <div className={`${slide2} hide img`} style={{ backgroundImage: "url(" + images.images3 + ")" }}></div>
                <div className={`${slide3} hide img`} style={{ backgroundImage: "url(" + images.images4 + ")" }}></div>
                {/* <img  src="https://concertopr.com/app/uploads/2021/10/Homepage-option-1.jpg"></img> */}
                {/* <img  src='https://concertopr.com/app/uploads/2021/10/Pilote-.jpeg'></img> */}
                {/* <img  src='https://concertopr.com/app/uploads/2021/09/Homepage-option-2.jpg'></img> */}
              </div>
              <div className='titles'>
                <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>

                  {/* <hr></hr> */}
                  <h1 className={h1} /* onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} */>Welcome to
                    Getnet Yawkal Law Office!</h1>
                  <p className={p} /* onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} */>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem dui, aliquet in dictum at, mattis ac tellus. Aliquam maximus purus ipsum, quis facilisis ante mollis a. Curabitur sed commodo lectus. Integer gravida imperdiet odio sit amet mattis. Morbi cursus maximus erat, ac euismod elit suscipit eget. Integer vulputate lacus vel vehicula iaculis.</p>
                </div>
                <div onMouseEnter={mouseEnter1} onMouseLeave={mouseLeave1}>
                  {/* <div className='hr-line'></div> */}

                  {/* <hr></hr> */}
                  <h3 className={h3}/*  onMouseEnter={mouseEnter1} onMouseLeave={mouseLeave1} */>We cater practical, strategically sound and result oriented first rate legal services in Ethiopia.</h3>
                  <p className={p1} /* onMouseEnter={mouseEnter1} onMouseLeave={mouseLeave1} */>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem dui, aliquet in dictum at, mattis ac tellus. Aliquam maximus purus ipsum, quis facilisis ante mollis a. Curabitur sed commodo lectus. Integer gravida imperdiet odio sit amet mattis. Morbi cursus maximus erat, ac euismod elit suscipit eget. Integer vulputate lacus vel vehicula iaculis.</p>
                </div>

              </div>
            </div>

          </div>
          <AboutSection aboutActiveSlide={aboutActiveSlide}></AboutSection>
          <PracticeArea practiceActiveSlide={practiceActiveSlide}></PracticeArea>
          <Qualifications qualActiveSlide={qualActiveSlide}></Qualifications>
          <ContactUs contactActiveSlide={contactActiveSlide}></ContactUs>
        </div>
      </div>
    </>
  )
}



export default Home