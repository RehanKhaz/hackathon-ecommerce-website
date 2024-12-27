import React from 'react'
import WebsiteBanner from '../components/WebsiteBanner'
import Gurantees from '../components/Gurantees'
import FilterBar from '../components/FilterBar'
import Pagination from '../components/Pagination'
import { productData } from '../constants/page'
import ProductItem from '../components/ProductItem'



const page = () => {
  return (
    <div className='min-h-screen w-screen '>
      <WebsiteBanner title={'Shop'} />
      <FilterBar className='hidden md:block' />
      <div className='flex flex-wrap cp items-center justify-center gap-4 '>
        {
          productData.map((value, index) => {
            return <ProductItem key={index} index={index} item={value} />
          })
        }
      </div>
      <Pagination />
      <Gurantees />
    </div>
  )
}

export default page