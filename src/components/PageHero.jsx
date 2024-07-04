import React from 'react'

import Vector from '../assets/Vector.png'
import Shape from '../assets/ShapeGroup.png'

const PageHero = ({title , description}) => {
  return (
  <>
  <div>
        <img className=' absolute mt-10' src={Vector} alt="" />
      </div>
      <div className='mt-20'>
        <h1 className=' text-center text-[5rem] font-bold text-[#0065C0]'>{title}</h1>
        <h1 className='mt-10 text-center text-5xl font-semibold text-[#0065C0]'>{description}</h1>
      </div>
      <div className='mt-52'>
        <img src={Shape} alt="" />
      </div>
  </>
     
  
  )
}

export default PageHero