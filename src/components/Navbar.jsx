import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { RiCloseLine, RiMenuLine } from '@remixicon/react';
import { NavLink } from 'react-router-dom';

const links = [
  { title: 'Company' },
  { title: 'Software' },
  { title: 'Marketing' },
  { title: 'Blogs' },
  { title: 'Interoperability', link: '/interoperability' },
  { title: 'Awards', link: '/awards' },
  { title: 'ABDM', link: '/abdm' },
  { title: 'Career', link: '/career' }
];

const Navbar = () => {

  const [logo, setLogo] = useState(false)

  return (
    <div className='flex w-[70%] bg-[#0065C0] mx-auto  p-1.5 rounded-2xl mt-4 text-[#FFFFFF] px-6 text-sm justify-between items-center'>
      <div className='hidden lg:flex 2xl:gap-14 xl:gap-8 lg:gap-5' >
        <div>Company</div>
        <div>Software</div>
        <div>Marketing</div>
        <div>Blogs</div>
      </div>
      <div>
        <img className=' w-[8rem] ' src={Logo} alt="" />
      </div>

      <div className='hidden lg:flex 2xl:gap-14 xl:gap-8  lg:gap-5'>
        <div>Interoperability</div>
        <div>Awards</div>
        <div>ABDM</div>
        <div>Career</div>
      </div>
      <button className='flex lg:hidden' onClick={() => { setLogo(!logo) }}>
        <RiMenuLine />
      </button>

      <div className={`absolute ${logo ? "top-0" : "-top-[100rem]"} left-0 w-full z-50 bg-gray-300 h-screen transition-all duration-300`}>
        <div className="container mx-auto">
          <div className='flex justify-end pt-5'>
            <button className='flex lg:hidden' onClick={() => { setLogo(!logo) }}>
              <RiCloseLine />
            </button>
          </div>
          <div className='flex flex-col items-center'>
            {links.map((link, index) => (
              <NavLink className={'text-lg'} to={link.link} key={index}>
                {link.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
