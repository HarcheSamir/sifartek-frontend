import HeroCarousel from '../../../components/HeroCarousel'
import BookingButton from '../../../components/BookingButton'
import React from 'react'

export default function Hero() {
    return (
        <div className='h-[140vh] w-screen relative'>
            <HeroCarousel items={items} />
            <BookingButton/>
        </div>
    )
}

const items = [
    <div className='h-full w-full text-white relative'>
        <div className='absolute h-full w-full bg-black opacity-60 ' />
        <div className='absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center'>
            <p className=' mb-4 md:text-xl font-thin text-center'>The finest hotel near Panama Beach</p>
            <p className='font-old text-5xl md:text-8xl text-center'>Luxery Times.<br />Bay & Beyond. </p>
            <div className=' whitespace-nowrap hover:scale-110 duration-300 text-lg mt-12 cursor-pointer py-4 px-6 border-[2px]'>VIEW EXCLUSIVE ROOMS</div>
        </div>
        <img height={0} width={0} sizes='100vw' alt='' className='h-full w-full object-cover' src={'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
    </div>,
    <div className='h-full w-full relative text-white'>
        <div className='absolute h-full w-full bg-black opacity-60' />
        <div className='absolute top-1/3  -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center'>
            <p className=' mb-4 md:text-xl font-thin text-center'>The finest hotel near Panama Beach</p>
            <p className='font-old text-5xl md:text-8xl text-center'>Comfort & More.<br />Bay & Beyond. </p>
        </div>
        <img height={0} width={0} sizes='100vw' alt='' className='h-full w-full object-cover' src={'https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
    </div>,
]
