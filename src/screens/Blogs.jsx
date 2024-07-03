import React from 'react'
import Navbar from '../components/Navbar'
import Vector from '../assets/Vector.png'
import Shape from '../assets/ShapeGroup.png'
import Backimage from '../assets/Background.jpg'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'
import img7 from '../assets/7.png'
import img8 from '../assets/8.png'
import Form from '../components/Form'
import Footer from '../components/Footer'

const Blogs = () => {

  const data = [
    {
      img: img1,
      heading: 'Online Pharmacy App',
      para: 'Setting new standards for efficiency experience in the pharmaceutical industry....',
      para1: 'March',
      para2: '28,2024',
      para3: 'Read More'
    },
    {
      img: img2,
      heading: 'E-commerce',
      para: 'Setting new standards for efficiency experience in the pharmaceutical industry....',
      para1: 'March',
      para2: '28,2024',
      para3: 'Read More'
    },
    {
      img: img3,
      heading: 'E-Library',
      para: 'Setting new standards for efficiency experience in the pharmaceutical industry....',
      para1: 'March',
      para2: '28,2024',
      para3: 'Read More'
    },
    {
      img: img4,
      heading: 'Naviagtion-NABH',
      para: 'Setting new standards for efficiency experience in the pharmaceutical industry....',
      para2: '28,2024',
      para1: 'March',
      para3: 'Read More'
    },
    {
      img: img5,
      heading: '7-Strategies-Improve-hospital',
      para: 'Setting new standards for efficiency experience in the pharmaceutical industry....',
      para2: '28,2024',
      para1: 'March',
      para3: 'Read More'
    },
    {
      img: img6,
      heading: 'Comprehensive Information',
      para: 'Setting new standards for efficiency experience in the pharmaceutical industry....',
      para2: '28,2024',
      para1: 'March',
      para3: 'Read More'
    },
    {
      img: img7,
      heading: 'Diagnostic-Imaging-Ris-Pacs',
      para: 'Setting new standards for efficiency experience in the pharmaceutical industry....',
      para2: '28,2024',
      para1: 'March',
      para3: 'Read More'
    },
    {
      img: img8,
      heading: 'Future-Pathology',
      para: 'Setting new standards for efficiency experience in the pharmaceutical industry....',
      para2: '28,2024',
      para1: 'March',
      para3: 'Read More'
    }
  ];



  return (
    <div >
      <Navbar />
         {/* HeroSection  starts*/}
      <div>
        <img className=' absolute mt-10' src={Vector} alt="" />
      </div>
      <div className='mt-20'>
        <h1 className=' text-center text-[5rem] font-bold text-[#0065C0]'>Blogs</h1>
        <h1 className='mt-10 text-center text-5xl font-semibold text-[#0065C0]'>Discover our useful resources and read articles on <br />different categories</h1>
      </div>
      <div className='mt-52'>
        <img src={Shape} alt="" />
      </div>
             {/* HeroSection ends */}

             {/* CardSection starts */}
      <div >
        <div className='' >
          <img className='mt-96 absolute' src={Backimage} alt="" />
        </div>
        <div className='flex flex-wrap gap-20 p-5 rounded-3xl ml-32 mt-52 '>
          {data.map((item, index) => (
            <div key={index} className='w-[22rem]  stroke-[#E9E9E9]  bg-[#FBFBFB] p-3 rounded-xl relative'>
              <img src={item.img} alt={`Image ${index}`} />
              <h1 className='font-bold text-black mt-2 mb-2'>{item.heading}</h1>
              <p className='text-[#697586] '>{item.para}</p>
              <div className='flex justify-between'> 
                <p className='text-[#0065C0] font-semibold mt-2'>{item.para3}</p>
              <p  className='text-[#697586] mt-2'>{item.para1}</p>
              </div>
             
              <p  className='text-[#697586]'>{item.para2}</p>
            </div>
          ))}
        </div>
      </div>
          {/* CardSection ends  */}


          {/* FormSection starts */}

        <Form />
       
          {/* FormSection ends */}

          {/* Footer section starts */}

           <Footer />

          {/* Footer section ends */}

    </div>


  )
}

export default Blogs