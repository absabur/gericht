import React from 'react'

import './SubHeading.css'
import images from '../../constant/images'

const SubHeading = ({title}) => {
  return (
    <div style={{marginBottom: "1rem"}}>
      <p className='p__cormorant'>{title}</p>
      <img src={images.spoon} alt="spoon" className='spoon__img'/>
    </div>
  )
}

export default SubHeading