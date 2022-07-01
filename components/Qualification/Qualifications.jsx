import React, { useEffect } from 'react'
import gsap from 'gsap'
function Qualifications({qualActiveSlide}) {
    useEffect(() => {
        gsap.to(".qualActiveSlide", { duration: 1.5, left: "0%" })
        gsap.to(".qualRemoveSlide", { duration: 1.5, left: "-90%" })
        // console.log(aboutActiveSlide)
      }, [qualActiveSlide])
    return (
        <div className={`
        qualifications ${qualActiveSlide ? 'qualActiveSlide' : 'qualRemoveSlide'}`}>
            <h2>Who We Are - <span>qualifications</span></h2>
            <h1>Certificate in Arbitration Law, International Court of Arbitration</h1>
            <div className="text-image">
                <div className="texts">
                    <p>Certificate in IP Law, WIPO, Japan Patent Office (JPO) and Kenya Industrial Property Institute  (KIPI)</p>
                    <p>Certificate in IP Law, WIPO, Ethiopian Ministry of Science and Technology and EIPA</p>
                    <p>Certificate in IP Law, World Intellectual Property Organization(WIPO)</p>
                    <p>Consultant and Attorney at Law-All Federal Courts Advocacy License</p>
                </div>
                <div className="image">
                    <div></div>
                </div>
            </div>
        </div>
    )

}

export default Qualifications;

