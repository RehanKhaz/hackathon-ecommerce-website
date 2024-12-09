import React from 'react'

const UList = ({unorderedList}) => {
     return <ul className='flex flex-col gap-4 md:gap-6'>
   {
    unorderedList.map((items,index) => {
        return <li key={index} className={`${index == 0 ? ' tracking-wider font-medium  text-[#9F9F9F]' : 'tracking-wide font-medium ' } text-[1em] md:text-[1.2em] ${index ==1 && 'mt-2 md:mt-4'}`}>{items}</li>
    })
   }
     </ul>
}

const Footer = () => {
  return (
    <footer className='flex bg-[#FFFFFF] px-6 md:px-8 lg:px-16 gap-y-8 gap-x-6 md:py-8 flex-wrap py-4  justify-between w-full'>
      <div>
        <p className='text-[#9F9F9F] text-[1.1em] tracking-wider font-medium mt-auto'>400 University Drive Suite 200 Coral <br /> Gabies , <br /> FL 33134 USA</p>
      </div>
<UList unorderedList={['Links', 'Home','Shop', 'About' ,'Contact']} />
<UList unorderedList={['Help', 'Payment Methods','Returns', 'Privacy Policy' ]} />
 <div className='flex flex-col gap-4 md:gap-8'>
    <h1 className='text-lg text-[#9F9F9F] tracking-wider'>NewsLetter</h1>
    <div className='flex items-center gap-4 md:gap-[3em]'>
    <input type="text" placeholder='Enter your Email address' className='outline-none border-t-0 border-l-0 border-r-0 placeholder:text-gray-400 placeholder:text-[.95em] tracking-wider py-3 border-b-gray-400 border-2' />
    <div className='underline !underline-offset-[.8em] text-[1.2em] md:text-xl font-bold tracking-wider uppercase '>Subscribe</div>
    </div>
 </div>
    </footer>
  )
}

export default Footer