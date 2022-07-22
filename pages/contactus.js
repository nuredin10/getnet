import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";

function contactus() {

    const [isDark, setIsDark] = useState(true)
    const [isBurgerDark, setIsBurgerDark] = useState(true)

    const changeNavbar = () => {
        console.log("scrolling")
        if (window.scrollY >= 80) {
            setIsDark(false);
            setIsBurgerDark(false);
        } else {
            setIsBurgerDark(true);
            setIsDark(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavbar);
    }, [])

    return (
        <div className='contact-page-wrapper'>
            <Header isDark={isDark} isBurgerDark={isBurgerDark}></Header>
            <div className='contact-main'>
                <div className='contact-form'>
                    <h1>Contact Form</h1>
                    <p className='intstruction'>Fill out the form below inorder to reach out to us</p>
                    <div className='form'>
                        <p>First Name</p>
                        <input type="text"></input>
                        <p>Phone Number</p>
                        <input type="text"></input>
                        <p>Email Address</p>
                        <input type="text"></input>
                        <p>City/Address</p>
                        <input type="text"></input>
                        <p>Write Message</p>
                        <input className='textArea' type="TextArea"></input>
                    </div>
                    <input className='submit' type="submit" text="Submit"></input>
                </div>
                <div className='contact-address'>
                    <div className='single'>
                        <p>Email</p>
                        <a href="mailto: getnety@getnetyawkal.com">getnety@getnetyawkal.com</a>
                    </div>
                    <div className='single'>
                        <p>Physical Location</p>
                        <a>Located in Bole Mega, Addis Ababa, Ethiopia</a>
                    </div>
                    <div className='single'>
                        <p>Mobile</p>
                        <a href="tel:+251911051754">+2519 11 05 17 54</a>
                    </div>
                    <div className='single'>
                        <p>Social Media Links</p>
                        <div className="social-media">
                            <AiFillFacebook className="icon" />
                            <AiFillLinkedin className="icon" />
                            <AiFillTwitterSquare className="icon" />
                        </div>
                    </div>
                </div>

            </div>
            <div className='map-section'>
            <div class="map1">
    <div class="location">
      <div class="map-responsive">
     
        <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Makush%20Art%20gallery%20%7C%20Bole%20%7C%20%E1%88%9B%E1%8A%A9%E1%88%BD%20%E1%8A%A0%E1%88%AD%E1%89%B5%20%E1%8C%8B%E1%88%88%E1%88%AA%20%7C%20%E1%89%A6%E1%88%8C&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
    </div>
  </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default contactus