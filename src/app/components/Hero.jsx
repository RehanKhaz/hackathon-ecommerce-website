import React from 'react'
import Underline from './Underline'

const Hero = () => {
  return (
    <div className='  md:flex  items-center justify-center min-h-screen w-dvw px-6 lg:px-16 md:px-8 bg-[#FBEBB5]'>
    <section className=' md:w-[40%] flex justify-center md:justify-end '> 
    <div className='flex mt-[5rem] md:mt-0 flex-col gap-2 md:gap-4 '>    
     {
        ['Rocket single', 'Sheeter'].map((item,index) => {
            return <h1 key={index} className='lg:text-[3em] sm:text-[2.7em] text-[2em] !font-[500] tracking-wider'>{item}</h1>
        })
     }
     <Underline title={'Shop Now'} />
    </div>
    </section>
    <section className='md:w-[60%]   flex items-center justify-center '>
  <img src="/images/home-chair.png" className='scale-x-[-1] object-center' alt="" />
    </section>
    </div>
  )
}

export default Hero