import React from 'react'
import PageHero from '../components/PageHero'
import img1 from '../assets/digital.png'
import img2 from '../assets/health.png'
import img3 from '../assets/super.png'
import img4 from '../assets/business.png'
import img5 from '../assets/customer.png'
import img6 from '../assets/vission.png'
import img7 from '../assets/philosophy.png'
import img8 from '../assets/medical.png'
import launch from '../assets/info1.png'
import vault from '../assets/Info2.png'
import cube from '../assets/Info3.png'
import chat from '../assets/Info.png'

const Company = () => {

  const Data = [
    {
      title: 'A PIONEERING LEAP IN DIGITAL HEALTHCARE SOLUTIONS',
      description: 'The Super Dr App stands at the forefront of digital healthcare innovation, embodying a seamless blend of cutting-edge technology and patient-centric care. Designed by i9 Innovations, this revolutionary application is set to redefine the standards of healthcare management, offering an all-encompassing solution that caters to the intricate needs of hospitals, healthcare centers, and medical professionals globally.',
      image: img1
    }, {
      title: 'EMPOWERING HEALTHCARE PROVIDERS  WITH ADVANCED FEATURES',
      description: 'The Super Dr App is engineered to empower healthcare providers with a suite of advanced features, including real-time patient monitoring,electronic medical records(EMR) management, appointment scheduling, and telemedicine capabilities. Its intuitive interface ensures that healthcare professionals can access critical patient information and make informed decisions swiftly, enhancing the quality of care and patient outcomes.',
      image: img2
    }, {
      title: 'INTEGRITY & CREDIBILITY',
      description: 'The Super Dr App stands at the forefront of digital healthcare innovation, embodying a seamless blend of cutting-edge technology and patient-centric care. Designed by i9 Innovations, this revolutionary application is set to redefine the standards of healthcare management, offering an all-encompassing solution that caters to the intricate needs of hospitals, healthcare centers, and medical professionals globally.',
      image: img3
    },
  ]

  const NewData = [
    {
      title: 'CUSTOMER FOCUS',
      description: 'At i9 Innovations & Educations,the soul of our enterprise is dedicated.To our customers. We wholeheartedly embrace an agile philosoph.',
      text: 'Learn More',
      image: img4
    }, {
      title: 'EXCELLENCE',
      description: 'Excellence in healthcare technologies is the cornerstone of.i9 Innovations & Educations, defined by a commitment to consistently.',
      text: 'Learn More',
      image: img7
    }, {
      title: 'OUR FOUNDING VISION',
      description: 'The core idea behind i9 Innovations & Educations was to introduce absolute transparency in day-to-day activities of hospitals, addressing.',
      text: 'Learn More',
      image: img6
    }, {
      title: 'DRIVING BUSINESS GROWTH',
      description: 'Hospitals leveraging the Super Dr App not only achieve operational excellence but also witness a significant boost in revenue. ',
      text: 'Learn More',
      image: img5
    },

  ]

  return (
    <div>

      <div>
        <PageHero title={'ABOUT US'} description={'HOSPITAL MANAGEMENT SOFTWARE COMPANY'} />
      </div>

      <div className=' '>
        <div className='mt-[5%]'>
          <h1 className='font-semibold text-5xl text-center'>INTRODUCING THE <span className='text-[#8ABC3E]'>SUPER DR APP</span></h1>
        </div>
        <div className=''>
          {Data.map((item, index) => (
            <div key={index} className='mt-6 p-4 mx-auto w-[62%]  bg-[#FFFFFF] shadow-2xl rounded-2xl  '>
              <div className='flex items-center gap-[%]  '>

                <div className='w-[65%]'>
                  <p className='font-semibold text-[20px] w-[50%] text-wrap'>{item.title}</p>
                  <p className='w-[70%] mt-2  '>{item.description}</p>
                </div>

                <div>
                  <img className='' src={item.image} alt="" />
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className='bg-[#E9E9E9] mt-[10%] p-10'>
          <div>
            <h1 className='font-semibold text-5xl text-center'>We Are Increasing<span className='text-[#8ABC3E]'>Business</span></h1>
          </div>

          <div className=' flex justify-evenly items-center pt-14'>
            {NewData.map((item, index) => (
              <div key={index} className=' flex w-[18%] bg-[#FFFFFF]  rounded-2xl p-6'>
                <div>
                  <div className=' flex  flex-col gap-6'>
                    <h2 className='text-[20px] font-semibold' >{item.title}</h2>
                    <p>{item.description}</p>
                    <p className='text-[#0065C0] underline font-medium'>{item.text}</p>
                    <div className='flex  justify-center'>
                      <img className='w-[10rem]' src={item.image} alt={item.title} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <article  >
          <div className=''>
            <div className='flex self-center justify-evenly w-full'>
              <div className='felx justify-center  w-full '>
                <img className='w-[30rem]' src={img8} alt="" />
              </div>
              <div>
                <div className=''>
                  <p className='text-[25px] font-semibold'>We Create Result-Oriented</p>
                  <h2 className='text-[35px]'>DYNAMIC <span className='text-[#8ABC3E] font-semibold'> APPLICATIONS </span></h2>
                  <p>We are driven by values & powered by an exceptionally skilled team. Our continuous improvement process helps us deliver high-quality results. We believe in the power of technology to propel your business and achieve success.</p>
                </div>
                <div className='grid grid-cols-2 w-[70%] gap-6'>
                  <div className='w-[50%] '>
                    <img src={launch} className='w-[10%]' alt="" />
                    <p className='text-[18px] font-semibold '>24x7 Support</p>
                    <p className='text-sm'>Extremely qualified support team committed to solving any query 24x7.
                    </p>
                  </div>
                  <div className='w-[50%] '>
                    <img src={vault} className='w-[10%]' alt="" />
                    <p className='text-[18px] font-semibold '>Hight Quality Assurance</p>
                    <p className='text-sm'>Hight Quality Assurance
                      One of our values is to provide the highest possible solutions.</p>
                  </div>
                  <div className='w-[50%] '>
                    <img src={cube} className='w-[10%]' alt="" />
                    <p className='text-[18px] font-semibold '>Timely Delivery</p>
                    <p className='text-sm'>Given our existing customer base one can vouch us for our values & services.</p>
                  </div>
                  <div className='w-[50%] '>
                    <img src={chat} className='w-[10%]' alt="" />
                    <p className='text-[18px] font-semibold '>Dedicated Teams</p>
                    <p className='text-sm'>A team dedicated to provide high quality services. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

      </div>
    </div>
  )
}

export default Company