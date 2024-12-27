import Link from 'next/link'
import React from 'react'

const ProductItem = ({ item ,index }) => {
    return (
        <Link key={index} href={`/SingleProduct/${item.id}`}  className='md:w-[23%] p-3 flex flex-col items-center md:h-[23em] justify-between gap-2  sm:w-[47%] w-[90%]'>
            <img src={item.src} alt="" className='object-cover' />
            <p className='tracking-wider text-left capatilize w-[95%] font-[500] text-[.9em] md:text-[1.1em]  '>{item.title}</p>
            <p className='font-bold  text-left w-[90%] text-lg md:text-2xl'>Rs. {item.price}</p>
        </Link>
    )
}

export default ProductItem