import React from 'react';

import './Chef.css';
import { images } from '../../constant';
import { SubHeading } from '../../components';

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-revers'>
        <img src={images.chef} alt="chef" />
      </div>

      <div className='app__wrapper_info'>
        <SubHeading title="Chef's Word"/>
        <h1 className='headtext__cormorant'>What we belive in?</h1>

        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto dolores reiciendis minus?</p>
          </div>

          <p className='p__opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus veritatis et voluptas similique. Ipsum molestiae quia exercitationem expedita? Consequatur ducimus amet voluptatum maxime, quidem, impedit assumenda at minima voluptatibus consectetur sed pariatur esse laudantium dolores voluptates commodi architecto id adipisci!</p>
        </div>

        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  )
}

export default Chef