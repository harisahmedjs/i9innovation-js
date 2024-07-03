import React from 'react'

const Form = () => {
  return (
    <div className=" bg-[#FFFFFF] mt-[28rem] ml-[35rem] mr-[35rem]  rounded-xl drop-shadow-2xl py-7 px-7 ">

      <div className='relative  text-black'>
        <h1 className=' text-[#8ABC3E] text-center text-4xl'>Enquire Now</h1>
        <h1 className='text-center text-[#343434] mb-8'>And we will connect you within 24 hours</h1>
        <div className='flex justify-between '>
          <div className=' flex flex-col'> <input type="text" placeholder="Your Full Name " className="border border-gray-300 p-2 rounded-lg w-80" />
            <input type="text" placeholder='Number of Beds' className="border border-gray-300 p-2 rounded-lg w-80 mt-4" /></div>

          <div className=' flex flex-col'>  <input type=" text" placeholder='Your Mobile Number' className="border border-gray-300 p-2 rounded-lg w-80" />
            <input type="email" placeholder='Your Email Id ' className="border border-gray-300 p-2 rounded-lg w-80 mt-4" /></div>
        </div>

        <input type="text" placeholder='Name of your hospital' className="border border-gray-300 p-2 rounded-lg w-80 mt-4" />
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-[#0065C0] text-[#FFFFFF] px-8 py-3 rounded-3xl">
          Submit
        </button>
      </div>
    </div>

  )
}

export default Form

