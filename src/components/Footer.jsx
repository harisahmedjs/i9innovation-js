import React from 'react'
import image from '../assets/Rectangle.png'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
   

      <div>


        <div>
          <img src={image} alt="" />
        </div>

        <div className='w-[110rem] bg-black ml-20'> 
          <img src={logo} alt="" />
          <p>Where we harness the powwer of technology <br /> to transform hospitals in india .With offices <br /> in Mumbai, pUne , mangalore and Dubai</p>
          <ul>
            <li></li>
          </ul>
        </div>

      </div>

    
  )
}

export default Footer