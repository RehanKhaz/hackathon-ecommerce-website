'use client'
import React, { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaStar, FaTwitter } from 'react-icons/fa'
import WebsitePath from '../../components/WebsitePath'
import Button from '../../components/Button'
import Products from '../../components/Products'
import Underline from '../../components/Underline'
import Link from 'next/link'
import { productData } from '@/app/constants/page'
import { useCartContext } from '@/app/Context/CartContext'
import { useParams } from 'next/navigation'

const SingleProduct = () => {
    const params = useParams()
    const Id = params.id
    const { addToCart, cartItems, deleteCartItem, itemsCount, setItemsCount } = useCartContext()
    function addCartItem(findItemNavigated) {
        return addToCart(findItemNavigated)
    }

    useEffect(() => {
        localStorage.setItem('cartItem', JSON.stringify(cartItems))
    }, [cartItems])

    const findItemNavigated = productData.find((item) => item.id == Id)
    const [index, setIndex] = useState(0)
    const Images = ['/images/sp1.png', '/images/sp2.png', '/images/sp3.png', findItemNavigated.src]
    const mainImageSrc =
        findItemNavigated && index >= 1 && index <= 3
            ? `/images/sp${index}.png`
            : findItemNavigated
            && findItemNavigated.src



    return (
        <div className='cp relative py-[3rem]'>
            <WebsitePath path={findItemNavigated.title} />
            <main className=' md:flex py-[3rem] items-start justify-between'>
                <section className='flex md:flex-row flex-col items-center md:mt-[-3.3rem]  min-h-[90vh] gap-4 md:w-[48%]'>
                    <div className='flex flex-row md:flex-col items-center gap-4 '>
                        {
                            Images.map((item, index) => {
                                return <div key={index} onClick={() => setIndex(index + 1)} className=' size-[4em] md:size-[4.5em] hover:border-green-400 hover:border cursor-pointer transition-all ease-in-out duration-1000 delay-200 lg:size-[6em] p-2 bg-[#FFF9E5]'>
                                    <img src={item} className='size-full object-cover ' alt="" />
                                </div>
                            })
                        }
                    </div>
                    <div className=' bg-[#FFF9E5] w-[30em] flex-center rounded-lg p-4 h-[70vh]'>
                        <img src={mainImageSrc} className=' size-[20em] object-cover' alt="" />
                    </div>
                </section>
                <section className=' flex flex-col px-4   gap-4 min-h-screen md:w-[48%]'>
                    <h1 className='tracking-wider font-semibold lg:text-[3em] md:text-3xl sm:text-2xl text-[1.4rem] '>{findItemNavigated ? findItemNavigated.name : 'Asgaard Sofa'}</h1>
                    <p className=' text-xl md:text-2xl font-medium text-[#4F4F4F] tracking-wider'>Rs: {findItemNavigated ? findItemNavigated.price : '250,000.000'}</p>
                    <div className='flex items-center gap-4
'>
                        <div className='flex items-center gap-3'>
                            {[1, 2, 3, 4].map((value, index) => {
                                return <FaStar key={index} className='size-6 text-yellow-500' />
                            })}
                        </div>

                        <span className='text-3xl font-medium'> | </span>
                        <span className='text-[.9em] md:text-[1em] text-[#4F4F4F] '> 5 Customer Reviews </span>

                    </div>

                    <p className=' text-sm md:text-[1em] tracking-wide font-medium'> {findItemNavigated ? findItemNavigated.description : `Setting the bar as one the loudest speakers in its class, the Kilburn is a compact , stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.`}</p>

                    <h4 className='text-[#4F4F4F] text-xl font-medium tracking-wider'>Size</h4>
                    <div className='flex items-center gap-3'>
                        {
                            ['L', 'XL', 'XS'].map((item, index) => {
                                return <div key={index} className={`text-lg h-[2.7em] hover:transition-colors hover:bg-yellow-100 hover:duration-1000 hover:delay-200 cursor-pointer  ease-in-out flex-center w-[3em] ${index == 0 ? 'bg-yellow-100' : 'bg-gray-300'} rounded-md shadow-sm`}>{item} </div>
                            })
                        }
                    </div>
                    <h4 className='text-[#4F4F4F] text-xl font-medium tracking-wider'>Color</h4>
                    <div className='flex items-center gap-3'>
                        {
                            [1, 2, 3].map((item, index) => {
                                return <div key={index} className={`h-10 w-10 rounded-full ${index == 0 && 'bg-black'}  ${index == 1 && 'bg-purple-800'} ${index == 2 && 'bg-yellow-500'} `} />
                            })
                        }
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='px-5 rounded-lg py-4 border border-gray-400 flex items-center justify-between w-[8em] text-lg font-medium'>
                            <span className={`${itemsCount == 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => itemsCount <= 1 ? setItemsCount(1) : setItemsCount(itemsCount - 1)}>-</span>
                            <span >{itemsCount}</span>
                            <span className='cursor-pointer' onClick={() => setItemsCount(itemsCount + 1)} >+</span>
                        </div>
                        <div onClick={() => addCartItem(findItemNavigated)} >
                            <Button title={'Add To Cart'} btnClass={'text-lg md:text-xl hover:bg-blue-300 hover:text-white transition-all ease-in-out duration-1000 delay-30 hover:border-none font-medium tracking-wide px-2 py-4 rounded-lg md:px-[3rem] border border-black '} />
                        </div>
                    </div>
                    <hr className='w-full mt-8 bg-gray-400 h-[1.5px]' />
                    <div className='flex items-center mt-9 gap-3'>
                        <div className='flex  flex-col   gap-2 text-[1em] capitalize md:text-[1.2em] text-[#9F9F9F] tracking-wider font-medium'>
                            <span>SKU : {findItemNavigated ? findItemNavigated.sku.toUpperCase() : 'ss01'.toUpperCase()}</span>
                            <span>Category : {findItemNavigated ? findItemNavigated.category : 'Table'}</span>
                            <span>Tags : {findItemNavigated && findItemNavigated.tags}</span>
                            <span>Share :   <span className='inline-flex justify-center  items-center gap-4'>
                                <FaFacebook className='size-6' />
                                <FaInstagram className='size-6' />
                                <FaTwitter className='size-6' />
                            </span></span>
                        </div>
                    </div>
                </section>

            </main>
            <hr className='h-[1.6px] bg-gray-400 w-[100vw]' />
            <div className=' flex-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 py-6'>
                {
                    ['Description', 'Additional Information', 'Review [5]'].map((item, index) => {
                        return <div key={index} className={`text-[1em] sm:text-[1.3em] tracking-wider font-medium ${index == 0 ? 'text-black' : 'text-[#9F9F9F]'} md:text-[1.5em] lg:text-[2em]`}> {item}</div>
                    })
                }</div>
            <br />
            <p className='px-6 tracking-wide text-[1em] md:text-[1.1em] text-[#9F9F9F] md:pl-[3em] lg:pl-[6rem]'>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                <br />
                <br />
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.

            </p>
            <br />
            <div className='w-full md:flex justify-center gap-5 items-center'>
                <section className='md:w-[48%] w-full bg-[#FFF9E5] h-[50vh]'>
                    <img src="/images/sofa2.png" className='object-cover size-full' alt="" />
                </section>
                <section className='md:w-[48%] sm:mt-[3em] md:mt-0  w-full bg-[#FFF9E5] h-[50vh]'>
                    <img src="/images/sofa1.png" className='object-cover size-full' alt="" />
                </section>
            </div>
            <hr className='h-[1.6px] bg-gray-400 mt-[3em] w-[100vw]' />
            <div className='  py-4 md:py-8'>
                <h1 className='text-center tracking-wider text-[1.8em] md:text-[2.4em]'>Related Products</h1>
                <Products />
                <Link href={'/Shop'} className='w-full  flex-center mt-[3rem]'>
                    <Underline title={'View More'} />
                </Link>
            </div>
        </div>
    )
}

export default SingleProduct