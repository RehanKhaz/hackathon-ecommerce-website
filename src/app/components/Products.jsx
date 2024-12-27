import React from 'react'
import {  productData } from '../constants/page'
import ProductItem from './ProductItem'

const Products = () => {
 
  return (  <div className='flex gap-4 flex-wrap mt-3 md:mt-[2.8rem] items-center justify-center'>
    {
        productData.slice(0,4).map((value, index) => {
            return <ProductItem key={index} index={index} item={value} />
        })
    }
</div>
    
  )
}

export default Products