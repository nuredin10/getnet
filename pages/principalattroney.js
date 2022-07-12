import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
function PrincipalAttroney() {
  return (
    <div className='principal-wrapper'>
      <Header></Header>
      <div className='principal-main'>
        <div className='principal-front'>
          <div className='principal-text-image'>
            <div className='principal-text'>
              <div className='text'>
                <h3>Principal Attorney and Key Contact Person</h3>
                <p>Getnet Yawkal Mebratu</p>
              </div>
              <button>Contact Us</button>
            </div>
            <div className='principal-image'>
              <img></img>
            </div>
          </div>
        </div>
        <div className='principal-bottom-block'>
          <p>Local Expertise, International Depth, Business Acumen</p>
        </div>
      </div>
      <div className='principal-text-wrapper'>
        <h1>adc</h1>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default PrincipalAttroney