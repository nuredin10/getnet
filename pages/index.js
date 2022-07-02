import React, { useState, useEffect } from 'react'
import { gsap } from "gsap";
import Header from '../components/Header/Header'
import AboutSection from '../components/AboutSection/AboutSection';
// import { width } from '@mui/system';
// import About from './About/About';
import Qualifications from '../components/Qualification/Qualifications'
import { func } from 'prop-types';
import PracticeArea from '../components/PracticeArea';
import ContactUs from '../components/ContactUs/ContactUs';


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
    gsap.to(".longBlock1", { duration: 1, ease: "power2.out", height: "85%", width: "98%", left: "1%" })
    gsap.to(".longBlock2", { duration: 1, ease: "power2.out", height: "90%", width: "94%", left: "3%" })
    gsap.to(".shortBlock", { duration: 1, height: "20%" })
    gsap.to(".shortBlock1", { duration: 1, height: "30%", width: "96%", left: "2%" })
    gsap.to(".shortBlock2", { duration: 1, height: "40%", width: "92%", left: "4%" })
  }, [mouseEnter, mouseLeave])



 useEffect(()=>{
  if(count == 1){
    setAboutActiveSlide(true)
    setqualActiveSlide(false)
    setPracticeActiveSlide(false)
    setContactActiveSlide(false)
  }
  else if(count == 2){
    setAboutActiveSlide(false)
    setqualActiveSlide(true)
    setPracticeActiveSlide(false)
    setContactActiveSlide(false)
    
  }
  else if(count == 3){
    setAboutActiveSlide(false)
    setqualActiveSlide(false)
    setPracticeActiveSlide(true)
    setContactActiveSlide(false)
    
  }
  else if(count == 4){
    setAboutActiveSlide(false)
    setqualActiveSlide(false)
    setPracticeActiveSlide(false)
    setContactActiveSlide(true)
    
  }



 },[count])


  
  var scrollTimer = null;

    function scrollFinished() {
      scrollCount++;
    }
  useEffect(()=>{
    window.addEventListener("scroll",function(e){
      let prev = 0;
      if (scrollTimer !== null)
        clearTimeout(scrollTimer);
        
        console.log(window.scrollY)
      scrollTimer= setTimeout(()=>{
        if(count === 6){
          setCount(0)
        }
        else{
          if(window.scrollY > prev){
            setCount(count=>++count)
            prev = window.scrollY
          }
          else if(window.scrollY < prev){
            setCount(count=>--count)
            prev = window.scrollY
          }
        }
      },50)
    },true)
    
    // window.addEventListener("wheel", event => console.info(event.offsetX));
    },[])
  return (
    <div className='main-wrapper'>
      <div className='container'>
        <h1>{count}</h1>
        <Header></Header>
        <div className='wrapper'>
          <div className='blocks'>
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={`${block} one block`}></div>
            <div onMouseEnter={mouseEnter1} onMouseLeave={mouseLeave1} className={`${block1} two block`}></div>
            <div onMouseEnter={mouseEnter2} onMouseLeave={mouseLeave2} className={`${block2} three block`}></div>
            <div className='four block'></div>
          </div>
              <div className='hr-line'></div>

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
          <Qualifications qualActiveSlide={qualActiveSlide}></Qualifications>
          {/* <PracticeArea></PracticeArea> */}
        {/* <ContactUs></ContactUs> */}
      </div>
    </div>
  )
}



export default Home