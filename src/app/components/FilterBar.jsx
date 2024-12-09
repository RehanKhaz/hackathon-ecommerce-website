import React from 'react'

const FilterBar = () => {
  return (
    <div className='cp w-full  bg-[#FAF4F4] flex-wrap flex-between py-5'>
    <section className='flex items-center gap-6 md:gap-8 md:w-[50%]'>
        <img src="/images/Filter1.png" alt="" />
        <span className='font-medium text-lg tracking-wider'>Filter</span>
        <img src="/images/Filter2.png" alt="" />
        <img src="/images/Filter3.png" alt="" />
        <span className='text-3xl'>|</span>
        <span className='text-[.8em] md:text-[1.1em] font-medium tracking-wider'>Showing 1-16 off 32 Results</span>
    </section>
    <section className='flex items-center gap-6 md:w-[40%]'>
        <span className='text-lg font-medium tracking-wide'>
            Show
        </span>
        <input type="text" placeholder='16' className='outline-none text-xl placeholder:text-xl w-[3.4rem] rounded-lg border-none bg-white p-4 placeholder:text-[#4F4F4F]' />
        <span className='text-lg font-medium tracking-wide'>
          Short By
        </span>
        <input type="text" placeholder='Default' className='outline-none text-xl placeholder:text-xl w-[7rem] rounded-lg border-none bg-white p-4 placeholder:text-[#4F4F4F]' />
    </section>
    </div>
  )
}

export default FilterBar