'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import WebsiteBanner from '../components/WebsiteBanner'
import Gurantees from '../components/Gurantees'
import Pagination from '../components/Pagination'
import ProductItem from '../components/ProductItem'
import { UseCartContext } from '../Context/CartContext'

const page = () => {
  const [inputValue,setInputValue] = useState('')
  const [optionValue, setOptionValue] = useState('')
  const { data } = UseCartContext()
  
  const handleOptionChanges = (e) => {
    setOptionValue(e.target.value)
  }

  const refinedArray = optionValue == 'From Expensive to Cheap' ? data.slice(0,inputValue == '' ? data.length : inputValue).sort((a,b) => b.price - a.price ) : data.slice(0,inputValue == '' ? data.length : inputValue).sort((a,b) =>  a.price - b.price )

  return (
    <div className='min-h-screen w-screen '>
      <WebsiteBanner title={'Shop'} />
      {/* Filter Bar Starts There */}
      <div className='hidden md:block'>
        <div className='cp w-full  bg-[#FAF4F4] flex-wrap flex-between py-5'>
          <section className='flex items-center gap-6 md:gap-8 md:w-[50%]'>
            <img src='/images/Filter1.png' alt='' />
            <span className='font-medium text-lg tracking-wider'>Filter</span>
            <img src='/images/Filter2.png' alt='' />
            <img src='/images/Filter3.png' alt='' />
            <span className='text-3xl'>|</span>
            <span className='text-[.8em] md:text-[1.1em] font-medium tracking-wider'>
              Showing {inputValue == '' ? data.length : inputValue} Results
            </span>
          </section>
          <section className='flex items-center gap-4 md:w-[40%]'>
            <span className='text-lg font-medium tracking-wide'>Show</span>
            <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
              type='text'
              placeholder={'max ' + data.length }
              max={data.length}
              className='outline-none text-xl placeholder:text-xl w-[4em] rounded-lg border-none bg-white p-2 placeholder:text-[#4F4F4F]'
            />
            <span className='text-lg font-medium tracking-wide'>Sort By</span>
            <select
              className='outline-none text-[1em] placeholder:text-xl w-max rounded-lg border-none bg-white p-3 placeholder:text-[#4F4F4F]'
              type='text'
              placeholder='Default'
              value={optionValue}
              onChange={handleOptionChanges}
            >
              <option value='From Expensive to Cheap'>
                From Expensive to Cheap
              </option>
              <option value='From Cheap to Expensive'>
                From Cheap to Expensive
              </option>
            </select>
          </section>
        </div>
      </div>
      <div className='flex flex-wrap cp items-center justify-center mt-4 gap-4 '>
        {refinedArray.map((value, index) => {
          return <ProductItem key={index} index={index} item={value} />
        })}
      </div>
      <Pagination />
      <Gurantees />
    </div>
  )
}

export default page
