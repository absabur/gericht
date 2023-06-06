import React from 'react'

import './Findus.css';
import images from '../../constant/images';
import { SubHeading } from '../../components';

const Findus = () => {
  return (
    <div className='app__bg app__findus app__wrapper section__padding' id='findus'>
      <div className='app__wrapper_info'>
        <SubHeading title='Contact'/>
        <h1 className='headtext__cormorant app__findus-h1'>Find Us</h1>
        
        <div className='app__wrapper-content'>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Lorem ipsum dolor sit amet.</p>
        <p className="p__cormorant" style={{ margin: '2rem 0', color: "#dcca87" }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 AM - 02:00 AM</p>
        <p className="p__opensans" style={{ marginBottom: '2rem' }}>Sat - Sun: 10:00 AM - 03:00 AM</p>
        <button type="button" className="custom__button">Explore Menu</button>
        </div>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.findus} alt="welcome" />
      </div>
    </div>
  )
}

export default Findus