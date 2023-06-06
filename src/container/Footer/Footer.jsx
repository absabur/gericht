import React from 'react'

import './Footer.css'
import { FooterOverlay, Newsletter } from '../../components'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import images from '../../constant/images'

const Footer = () => {
  return (
    <div className='app__bg app__footer section__padding'>
      {/* <FooterOverlay /> */}
      <Newsletter />

      <div className='app__footer-links'>
        <div className='app__footer-links_content'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans' style={{margin: '1rem 0'}}>9 W 53rd, New York, NY 10019, USA</p>
          <p className='p__opensans'>+1 121232434</p>
          <p className='p__opensans'>+1 121232435</p>
        </div>
        <div className='app__footer-links_logo'>
          <img src={images.gericht} alt="Logo_gericht" />
          <p className='p__opensans'>The best way to find yourself is to lose yourself in the service of others.</p>
          <img src={images.spoon} alt="spoon" className='spoon__image' style={{margin: '2rem 0'}}/>
          <div className='app__footer-links_icons'>
            <FiFacebook className='app__footer-icon'/>
            <FiInstagram className='app__footer-icon'/>
            <FiTwitter className='app__footer-icon'/>
          </div>
        </div>
        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans' style={{marginTop: '1rem'}}>Monday - Friday</p>
          <p className='p__opensans'>08:00 am to 12:00 pm</p>
          <p className='p__opensans' style={{marginTop: '1rem'}}>Saturday - Sunday</p>
          <p className='p__opensans'>07:00 am to 12:00 am</p>
        </div>
      </div>
      
      <div className='footer__copyright'>
        <p className='p__opensans'>2023 Gericht. All Right reserved.</p>
      </div>
    </div>
  )
}

export default Footer