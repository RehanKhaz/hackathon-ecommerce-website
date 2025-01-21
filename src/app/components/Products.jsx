import React from 'react'
import ProductItem from './ProductItem'
import { UseCartContext } from '../Context/CartContext'

const Products = ({relation}) => {
  const {data} = UseCartContext()
  const relatedProducts = data.filter((item) => item.category == relation.category && item.name != relation.name  )
  const ifRelatedExistsOrNot = relatedProducts.length > 0 ? relatedProducts : data
  return (
    <div className='flex gap-4 flex-wrap mt-3 md:mt-[2.8rem] items-center justify-center'>
      {ifRelatedExistsOrNot.map((value, index) => {
        return <ProductItem key={index} index={index} item={value} /> 
      })}
    </div>
  )
}

export default Products
