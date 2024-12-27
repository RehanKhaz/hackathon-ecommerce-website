import React from 'react'
import { FaCross } from 'react-icons/fa'
import Link from 'next/link'
import { RxCross1 } from 'react-icons/rx'
import Button from './Button'
import { UseCartContext } from '../Context/CartContext'

const CartSideBar = () => {
  const { cart, deleteCartItem,Subtotal } = UseCartContext()

  return (<>
    <div className='absolute top-[4rem] right-5 z-[999] w-[21em] md:w-[27em] px-[2rem] shadow-[2px_2px_30px] shadow-slate-500 py-[2rem] bg-white'>
      <div className='flex-between'>
        <h1 className='md:text-[1.3em] text-[1em] tracking-wider font-[600] sm:text-[1.1em]'>Shopping Cart</h1>
        <img src="/images/Lock.png" className='fill-[#9F9F9F] object-cover' alt="" />
      </div>
      <br />
      <hr className='w-full bg-[#9f9f9f] h-[1.6px]' />
      <br />
      <div className='flex flex-col gap-4'>
        {cart.length === 0 ? 'Your Cart is Empty': cart.map((item, index) => {

          return <div key={index}>
            <div  className='flex items-center w-full justify-between gap-6'>
              <div className='rounded-lg md:w-[30%] bg-yellow-300'>
                <img src={item.src} alt="" className=' object-cover ' />
              </div>
              <div className=''>
                <p className='text-[.9em] font-medium lg:text-[1.4em]  md:text-[1.1em]'>{item.name}</p>
                <div className='tracking-[.5em]'>
                  <span className='text-[.9em] text-gray-500 font-medium '>{item.quantity}</span>
                  X
                  <span className='text-sm md:text-[1.1em] text-yellow-400 tracking-normal font-light'>Rs.{item.price}</span>
                </div>
              </div>
              <div className='p-[.5em] rounded-full bg-slate-300'>
                <RxCross1 onClick={()=> deleteCartItem(item)} className='size-4' />
              </div>
            </div>

          </div>
        })}
        <div className='flex-between w-full mt-5'>
          <span className='text-lg'>Subtotal</span>
          <span className='text-yellow-400 text-lg'>Rs.{Subtotal}</span>
        </div>
        <hr className='w-full bg-[#9f9f9f] h-[1.6px]' />
        <div className='flex gap-4 justify-center items-center'>
          <Link href="/Cart">
            <Button btnClass={'px-3 py-2 border-black border rounded-lg'} title='View Cart' />
          </Link>
          <Link href="/CheckOut">
            <Button btnClass={'px-3 py-2 border-black border rounded-lg'} title='Check Out' />
          </Link>
        </div>
      </div>
    </div>
  </>
  )
}

export default CartSideBar