import React from 'react'

import './SpecialMenu.css'
import {images,data} from '../../constant'
import { SubHeading, MenuItem } from '../../components'

const SpecialMenu = () => {
  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className='app__specialMenu-title'>
        <SubHeading title='Menu that fits you palatte' />
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>

      <div className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu_wine flex__center'>
          <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
          <div className='app__specialMenu-menu_items'>
            {data.wines.map((wine, index) => (
               <MenuItem key={index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

        <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt="Menu" />
        </div>

        <div className='app__specialMenu-menu_coctails flex__center'>
          <p className='app__specialMenu-menu_heading'>Coctails</p>
          <div className='app__specialMenu-menu_items'>
            {data.cocktails.map((coctail, index) => (
              <MenuItem key={index} title={coctail.title} price={coctail.price} tags={coctail.tags} />
            ))}
          </div>
        </div>
      </div>

      <div style={{marginTop: '15px'}}>
        <button type='button' className='custom__button'>view more...</button>
      </div>
    </div>
  )
}

export default SpecialMenu