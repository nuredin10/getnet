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
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { SettingsAccessibilityOutlined } from '@mui/icons-material';
// import "react-vertical-timeline-component/style.min.css";
// import 'rsuite/dist/styles/rsuite-default.css';
// import 'rsuite/dist/styles/rsuite-default.css';
import 'rsuite/dist/rsuite.min.css';

import { Timeline } from 'rsuite';



function Home() {

  var scrollCounter = 0;

  const [slide1, setSlide1] = useState("");
  const [slide2, setSlide2] = useState("");
  const [slide3, setSlide3] = useState("");
  const [slide4, setSlide4] = useState("");
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

  const [homeVisible, setHomeVisible] = useState(true)

  const images = {
    image1: "/front-image.svg",
    images2: '/front-image1.svg',
    images3: 'front-image2.svg',
    images4: '/front-image4.svg',
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
    setP1("showP1")
    setBlock1('longBlock1')


  }
  const mouseLeave1 = () => {
    setSlide2("remove");
    setH3("normalH3")
    setP1("hideP1")
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

  const mouseEnter3 = () =>{
    setSlide4("active")
    setBlock3("longBlock3")
  }

  const mouseLeave3 = () =>{
    setSlide4("remove")
    setBlock3("shortBlock3")
  }


  useEffect(() => {
    gsap.to(".active", { duration: 1.5, y: "-70vh", display: "block" })
    gsap.to(".remove", { duration: 1.5, y: "0vh" })
    gsap.to(".longBlock", { duration: 1, ease: "power2.out", height: "80%" })
    gsap.to(".longBlock1", { duration: 1, ease: "power2.out", height: "85%", width: "98%" })
    gsap.to(".longBlock2", { duration: 1, ease: "power2.out", height: "90%", width: "94%" })
    gsap.to(".longBlock3", { duration: 1, ease: "power2.out", height: "95%", width: "90%" })
    gsap.to(".shortBlock", { duration: 1, height: "25%" })
    gsap.to(".shortBlock1", { duration: 1, height: "40%", width: "96%" })
    gsap.to(".shortBlock2", { duration: 1, height: "55%", width: "92%" })
    gsap.to(".shortBlock3", { duration: 1, height: "70%", width: "88%" })
    gsap.to(".showP1", {duration: 1.5, paddingTop: "0%"})
    gsap.to(".hideP1", {duration: 0.1, paddingTop: "5%"})

  }, [mouseEnter, mouseLeave])



  useEffect(() => {
    if (count === 1) {
      setAboutActiveSlide(true)
      setqualActiveSlide(false)
      setPracticeActiveSlide(false)
      setContactActiveSlide(false)
      setHeaderDark(false)

    }
    else if (count === 2) {
      setAboutActiveSlide(false)
      setqualActiveSlide(true)
      setPracticeActiveSlide(false)
      setContactActiveSlide(false)
      setHeaderDark(false)

    }
    else if (count === 3) {
      setAboutActiveSlide(false)
      setqualActiveSlide(false)
      setPracticeActiveSlide(true)
      setContactActiveSlide(false)
      setHeaderDark(false)

    }
    else if (count === 4) {
      setAboutActiveSlide(false)
      setqualActiveSlide(false)
      setPracticeActiveSlide(false)
      setContactActiveSlide(true)
      setHeaderDark(true)
    }

    if (count ===0) {
      setAboutActiveSlide(false)
      setqualActiveSlide(false)
      setPracticeActiveSlide(false)
      setContactActiveSlide(false)
    }

    if (count != 0) {
      setVerticalTimeline(true)
      setHomeVisible(false)
    }
    else {
      setHomeVisible(true)
      setVerticalTimeline(false)
    }
    

  }, [count])





  useEffect(() => {

    // window.addEventListener("scroll", (e) => {


    // setCount(e.wheelDeltaY)
    // if(e.wheelDeltaY > 0)
    //   setCount("scrolling down")
    // else
    //   setCount("scrolling up")
    // console.log(e.wheelDeltaY)
    // if (window.offsetHeight + window.scrollTop >= window.scrollHeight) {  
    // setCount(count=>count++);
    // window.scrollTo(0, 0)
    // } 
    // console.log("endd")
    // if (window.scrollY > 100 && window.scrollY < 1500) {
    //   setCount(count => ++count)
    //   window.scrollTo(0, 0)
    // }
    // }, true)
    var isScrolling;


    window.addEventListener('wheel', function (e) {
      
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);
      window.innerHeight = 0
      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(function () {
        console.log(window.innerHeight)
        // if (window.scrollY  30) {
          if (e.wheelDeltaY > 0){
            setCount(--count)
            // scrollTo(0,0)
          }
          else
            setCount(++count)
        // }  
      }, 66);

    }, false);
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
  const [verticalTimeline, setVerticalTimeline] = useState(false)
  const [headerDark, setHeaderDark] = useState(false)
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
          <Header isDark={headerDark}></Header>
          <h1>{count}</h1>
          <div className='explore' >
            {
              verticalTimeline ? (
                <div className='scroll-down'>
                  <h3 style={{ color: '#7A431D' }}>explore</h3>
                  <Timeline className='timeline'>
                    <Timeline.Item onClick={() => setCount(count => 1)} className='timeline'><p>Who We Are</p></Timeline.Item>
                    <Timeline.Item onClick={() => setCount(count => 3)} className='timeline'><p>Practice Area</p></Timeline.Item>
                    <Timeline.Item onClick={() => setCount(count => 5)} className='timeline'><p>Principal Attorney</p></Timeline.Item>
                    <Timeline.Item onClick={() => setCount(count => 7)} className='timeline'><p>Contact US</p></Timeline.Item>
                  </Timeline>
                </div>
              ) : (
                <div className='arrow-wrapper' onClick={() => setCount(count => 1)}>
                  <h3 >explore</h3>
                  <img className='arrow' src={'/arrow.svg'} ></img>
                </div>
              )
            }

          </div>


          <div className='wrapper'>
            {homeVisible ? (
              <div className='blocks'>
              <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={`${block} one block `} onClick={() => setCount(7)}><p>CONTACT US</p></div>  {/*${count % 2 != 0 ? 'longBlock' : 'shortBlock'}*/}
              <div onMouseEnter={mouseEnter1} onMouseLeave={mouseLeave1} className={`${block1} two block `} onClick={() => setCount(3)}><p>PRINCIPAL ATTORNEY</p> </div> {/*${count % 2 != 0 ? 'longBlock1' : 'shortBlock1'}*/}
              <div onMouseEnter={mouseEnter2} onMouseLeave={mouseLeave2} className={`${block2} three block `} onClick={() => setCount(5)}><p>PRACTICE AREA</p></div> {/*${count % 2 != 0 ? 'longBlock2' : 'shortBlock2'}*/}
              <div onMouseEnter={mouseEnter3} onMouseLeave={mouseLeave3} onClick={() => setCount(1)} className={`${block3} four block `}><p>WHO WE ARE</p></div> {/*${count % 2 != 0 ? 'longBlock3' : 'shortBlock3'}*/}
            </div>
            ) : null}
            {/* <div className='hr-line line-one'></div>
            <div className='hr-line line-two'></div>
            <div className='hr-line line-three'></div> */}

            {homeVisible ? (
              <div className='front'>

              <div className='images'>
                <div className="show img" style={{ backgroundImage: "url(" + images.image1 + ")" }}></div>
                <div className={`${slide1} hide img`} style={{ backgroundImage: "url(" + images.images2 + ")" }}></div>
                <div className={`${slide2} hide img`} style={{ backgroundImage: "url(" + images.images3 + ")" }}></div>
                <div className={`${slide3} hide img`} style={{ backgroundImage: "url(" + images.images4 + ")" }}></div>
                <div className={`${slide4} hide img`} style={{ backgroundImage: "url(" + images.images5 + ")" }}></div>
              </div>
              <div className='titles'>
                <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>

                  {/* <hr></hr> */}
                  <h1 className={h1} >Welcome to
                    <br></br>Getnet Yawkal Law Office!</h1>
                  <p className={p} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem dui, aliquet in dictum at, mattis ac tellus. Aliquam maximus purus ipsum, quis facilisis ante mollis a. Curabitur sed commodo lectus. Integer gravida imperdiet odio sit amet mattis. Morbi cursus maximus erat, ac euismod elit suscipit eget. Integer vulputate lacus vel vehicula iaculis.</p>
                </div>
                <div onMouseEnter={mouseEnter1} onMouseLeave={mouseLeave1}>
                  <h3 className={h3}>We cater practical, strategically sound and result oriented <br></br>first rate legal services in Ethiopia.</h3>
                  <p className='smallText'>Local Expertise, International Depth, Business Acumen.</p>
                  <p className={`${p1} showUp`} >We take Integrity, accountability, accessibility and timely delivery of our quality legal services as our core value of establishment. We value our client's time and always in exceeding their expectations.</p>
                </div>

              </div>
            </div>
            ): null}

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