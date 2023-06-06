import React from 'react'

import './Newsletter.css'
import SubHeading from '../SubHeading/SubHeading'

const Newsletter = () => {
  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
       <SubHeading title='NewsLetter'/>
       <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
       <p className='p__opensans'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
      </div>

      <div className='app__newsletter-input flex__center'>
        <input type="email" placeholder='Enter Your Email Address'/>
        <button className='custom__button'>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter