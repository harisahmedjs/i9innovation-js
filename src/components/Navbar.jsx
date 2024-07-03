import React from 'react'
import Logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className='flex ml-[25rem] bg-[#0065C0] mr-[24rem] p-3 rounded-2xl mt-4 text-white pl-4'>
      <div className='flex gap-16 mt-3.5 ' >
        <div>Company</div>
        <div>Software</div>
        <div>Marketing</div>
        <div>Blogs</div>
      </div>
      <div>
        <img className=' mr-12 w-[8rem] ml-12'  src={Logo} alt="" />
      </div>

      <div className='flex gap-16 mt-3.5 '>
        <div>Interoperability</div>
        <div>Awards</div>
        <div>ABDM</div>
        <div>Career</div>
      </div>

    </div>
  )
}

export default Navbar
