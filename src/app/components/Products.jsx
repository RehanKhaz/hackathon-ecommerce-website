import React from 'react'

const Products = () => {
    const productData = [
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
    ]
  return (  <div className='flex gap-4 flex-wrap mt-3 md:mt-[2.8rem] items-center justify-center'>
    {
        productData.map((value, index) => {
            return <div key={index} className='md:w-[23%] p-3 flex flex-col items-center  justify-center gap-2  sm:w-[47%] w-[90%]'>
                <img src={value.src} alt="" className='object-cover' />
                <p className='tracking-wider text-left capatilize w-[95%] font-[500] text-[.9em] md:text-[1.1em]  '>{value.title}</p>
                <p className='font-bold  text-left w-[90%] text-lg md:text-2xl'>Rs. {value.price}</p>
            </div>
        })
    }
</div>
    
  )
}

export default Products