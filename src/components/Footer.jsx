import React from 'react'
import image from '../assets/Rectangle.png'
import logo from '../assets/logo.png'
import { RiFacebookBoxFill, RiInstagramFill, RiLinkedinBoxFill, RiTwitterFill, RiYoutubeFill } from '@remixicon/react';

const Footer = () => {

  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',

    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (

    < div className=''>
      <div style={backgroundImageStyle} className=''>
        <div className='container mx-auto py-20 px-8 lg:px-0'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-0 lg:grid-cols-12 '>
            <div className=' lg:col-span-6' >
              <img className='' src={logo} alt="" />
              <h1 className='text-[#FFFFFF]' >Where we harness the power of technology <br />to transform Hospitals in India. With offices <br /> in Mumbai, Pune, Mangalore and Dubai. </h1>
              <ul className='text-[#A3DC2F] flex mt-7 gap-3'>
                <li className='bg-[#FFFFFF]  text-sm p-1 rounded-full'><RiTwitterFill /></li>
                <li className='bg-[#FFFFFF]  text-sm p-1 rounded-full'><RiFacebookBoxFill /></li>
                <li className='bg-[#FFFFFF]  text-sm p-1 rounded-full'><RiInstagramFill /></li>
                <li className='bg-[#FFFFFF]  text-sm p-1 rounded-full'><RiLinkedinBoxFill /></li>
                <li className='bg-[#FFFFFF]  text-sm p-1 rounded-full'><RiYoutubeFill /></li>
              </ul>
            </div>

            <div className='text-[#FFFFFF]  lg:col-span-2'>
              <h1 className='font-medium text-xl'>Quick Links</h1>
              <div className='flex mt-2 gap-6'>
                <ul >
                  <li className='mt-2'>Home</li>
                  <li className='mt-2'>About Us</li>
                  <li className='mt-2'>Our Team</li>
                  <li className='mt-2'>Privacy Policy</li> <li className='mt-2'>Awards</li>
                  <li className='mt-2'>Careers</li>
                  <li className='mt-2'>Contact Us</li>
                </ul>


              </div>
            </div>
            <div className='text-[#FFFFFF]  lg:col-span-2'>
              <h1 className='font-medium text-xl'>Quick Links</h1>
              <div className='flex mt-2 gap-6'>
                <ul >
                  <li className='mt-2'>Home</li>
                  <li className='mt-2'>About Us</li>
                  <li className='mt-2'>Our Team</li>
                  <li className='mt-2'>Privacy Policy</li> <li className='mt-2'>Awards</li>
                  <li className='mt-2'>Careers</li>
                  <li className='mt-2'>Contact Us</li>
                </ul>


              </div>
            </div>
            

            <div className='flex flex-col text-[#FFFFFF] lg:col-span-2'>
              <div>
                <h1 className='font-medium text-xl'>Address</h1>
                <p className='mt-1'>2774 Oak Drive, Plattsburgh, New York</p>
              </div>
              <div>
                <h1 className='font-medium text-xl mt-3'>Contact</h1>
                <ul>
                  <li className='mt-1'>518-564-320</li>
                  <li className='mt-1'>contact@helby.com</li>
                </ul>
              </div>
            </div>
          </div>


        </div>
        <div className='bg-[#006FAF] h-[3rem] '>
          <p className='text-[#FAFAFA] text-sm text-center py-4'>
            COPYRIGHT © 2015 - 2024 I9 INNOVATIONS & EDUCATIONS PVT, LTD. |PRIVACY POLICY| DISCLAIMER| ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>

  )
}

export default Footer

// import React from 'react';

// const BackgroundImageComponent = () => {
//   const backgroundImageStyle = {
//     backgroundImage: "url('/images/background.jpg')",
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '100vh', // Full viewport height
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundRepeat: 'no-repeat',
//   };

//   return (
//     <div style={backgroundImageStyle}>
//       <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '8px' }}>
//         <h1 style={{ color: 'white', fontSize: '36px', fontWeight: 'bold' }}>Welcome to My Site</h1>
//       </div>
//     </div>
//   );
// };

// export default BackgroundImageComponent;