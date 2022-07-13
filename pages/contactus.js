import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";

function contactus() {

    const [isDark, setIsDark] = useState(true)

    const changeNavbar = () => {
        console.log("scrolling")
        if (window.scrollY >= 80) {
            setIsDark(false);
        } else {
            setIsDark(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavbar);
    }, [])

    return (
        <div className='contact-page-wrapper'>
            <Header isDark={isDark}></Header>
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
            <Footer></Footer>
        </div>
    )
}

export default contactus