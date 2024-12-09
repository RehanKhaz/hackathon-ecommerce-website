import React from 'react'
import WebsiteBanner from '../components/WebsiteBanner'
import Gurantees from '../components/Gurantees'
import FilterBar from '../components/FilterBar'
import Pagination from '../components/Pagination'



const page = () => {
  const shopPageData = [
    {
      title: 'Trenton modular sofa_3',
      src: '/images/sofa.png',
      price: '25,000.00'
    },
    {
      title: 'Granite dining table with dining chair',
      src: '/images/dining.png',
      price: '25,000.00'
    },
    {
      title: 'Outdoor bar table and stool',
      src: '/images/table.png',
      price: '25,000.00'
    },
    {
      title: 'Plain console with teak mirror',
      src: '/images/mirror.png',
      price: '25,000.00'
    },
    {
      title: 'Grain coffee table',
      src: '/images/shop5.png',
      price: '15,000.00'
    },
    {
      title: 'Kert Coffee table',
      src: '/images/shop6.png',
      price: '225,000.00'
    },
    {
      title: 'Rounded coffee table_color 2',
      src: '/images/shop7.png',
      price: '251,000.00'
    },
    {
      title: 'Reclaimed teack coffee table',
      src: '/images/shop8.png',
      price: '25,200.00'
    },
    {
      title: 'Plain console_',
      src: '/images/shop9.png',
      price: '258,200.00'
    },
    {
      title: 'Reclaimed teack SideBoard',
      src: '/images/shop10.png',
      price: '20,000.00'
    },
    {
      title: 'SJP _0825',
      src: '/images/shop11.png',
      price: '200,000.00'
    },
    {
      title: 'Bella Chair and table',
      src: '/images/shop12.png',
      price: '100,000.00'
    },
    {
      title: 'Granite square side table',
      src: '/images/shop13.png',
      price: '258,800.00'
    },
    {
      title: 'Asgaard Sofa',
      src: '/images/shop14.png',
      price: '25000.00'
    },
    {
      title: 'Maya sofa three seator',
      src: '/images/shop15.png',
      price: '115,000.00'
    },
    {
      title: 'Outdoor sofa set',
      src: '/images/shop5.png',
      price: '244,000.00'
    },
  ]

  return (
    <div className='min-h-screen w-screen '>
      <WebsiteBanner title={'Shop'} />
      <FilterBar className='hidden md:block' />
      <div className='flex flex-wrap cp items-center justify-center gap-4 '>
        {
          shopPageData.map((value, index) => {
            return <div key={index} className='md:w-[23%] p-3 flex flex-col items-center  justify-center gap-2  sm:w-[47%] w-[90%]'>
              <img src={value.src} alt="" className='object-cover' />
              <p className='tracking-wider text-left capatilize w-[95%] font-[500] text-[.9em] md:text-[1.1em]  '>{value.title}</p>
              <p className='font-bold  text-left w-[90%] text-lg md:text-2xl'>Rs. {value.price}</p>
            </div>
          })
        }
      </div>
      <Pagination />
      <Gurantees />
    </div>
  )
}

export default page