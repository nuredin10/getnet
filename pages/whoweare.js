import React from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
const WhoWeAre = () => {
    return (
        <div className='about-wrapper'>
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
            <div className='about-main'>
                <div className='text'>
                    <h1>Who We Are</h1>
                    <p>Getnet Yawkal Law Office is a leading commercial law office in Ethiopia providing practical, strategically sound and result oriented first rate legal services for local and international clients.
                        We take Integrity, accountability, accessibility and timely delivery of our quality legal services as our core value of establishment.
                        We value our client’s time and always strive in exceeding their expectations.
                        We depend on our nimbleness to understand your case and provide a profound and tailor made solution to it, but we also maintain close associations with select local counsel to be called upon when needed.
                        With extensive expertise in intellectual property, employment and labor, corporate and finance,  tax, charity and Alternative Dispute Resolution laws of Ethiopia, Getnet Yawkal Law Office offers a strong, sound, and cost effective legal guidance in resolving your cases professionally and looks forward to being your strategic partner and principal legal advisor in Ethiopia.
                    </p>
                </div>
                <div className='image-wrapper'>
                    <img></img>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre