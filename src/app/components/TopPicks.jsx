import React from 'react'
import Underline from './Underline'
import Products from './Products'

const TopPicks = () => {
   return (
        <div className='min-h-[70vh] py-12 md:py-[5rem] bg-white w-screen flex flex-col gap-4 px-6 md:px-8 lg:px-16'>
            <h1 className='capatilize text-3xl font-[600] tracking-wider text-center'>Top Picks for You</h1>
            <p className='text-center tracking-wider font-medium text-lg text-[#9F9F9F]'>Find a bright Ideal to suit your taste with our great selection , floor and table lights.</p>
           <Products />
            <div className='w-full mt-[1rem] flex items-center justify-center'>
                <Underline title={'View More'} />
            </div>
        </div>
    )
}

export default TopPicks