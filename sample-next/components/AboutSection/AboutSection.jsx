import React, { useEffect } from 'react'
import gsap from 'gsap'
function AboutSection({ aboutActiveSlide }) {
  useEffect(() => {
    gsap.to(".activeSlide", { duration: 1.5, right: "0%" })
    gsap.to(".removeSlide", { duration: 1.5, right: "-90%" })
    // console.log(aboutActiveSlide)
  }, [aboutActiveSlide])
  return (
    <div
      className={`about-section ${aboutActiveSlide ? ' activeSlide' : ' removeSlide'}`}
    >
      <h1>Hello</h1>
    </div>
  )
}

export default AboutSection