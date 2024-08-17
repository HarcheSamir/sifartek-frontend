import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import { FaYoutube } from "react-icons/fa6";
import { PiAirplaneTiltThin } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiCityThin } from "react-icons/pi";
import { TbBeach } from "react-icons/tb";


export default function ParallaxOne() {
    return (
        <div >
            <div className='w-screen py-4 px-2 sm:px-8 min-h-screen flex flex-col items-center  '>
                <p className='mt-40 text-zinc-600 mb-4  text-sm sm:text-lg'>ACCOMODATION & COMFORT</p>
                <p className='font-old text-center text-3xl sm:text-5xl text-zinc-800 mb-20'>Eco-Inspired Lodging</p>
                <Grid />
            </div>





            <ParallaxBanner
                layers={[{
                    image:
                        'https://plus.unsplash.com/premium_photo-1663093806285-d905ca96c661?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    speed: -60
                }]}
                className="h-[100vh] relative w-full object-scale-down"
            >
                <div className='h-full bg-black opacity-50' />
                <div className='absolute top-0 left-0 text-white h-full w-full flex flex-col justify-center items-center'>
                    <FaYoutube className='text-white h-20 w-20 mb-12' />
                    <p className='text-2xl mb-4 text-center'>Explore. Wander. Disapper.</p>
                    <p className='text-5xl md:text-7xl font-old font-medium text-center'>The Great Escape<br />You'll Remember.</p>
                </div>

            </ParallaxBanner>



            <div className='w-screen lg:h-[120vh] py-4 px-2 sm:px-8 min-h-screen flex flex-col items-center  '>
                <p className='mt-40 text-zinc-600 mb-4  text-sm sm:text-lg'>People Love Our Hotel</p>
                <p className='font-old text-center text-3xl sm:text-5xl text-zinc-800 mb-20'>What Others Say</p>
                <Grid2 />

            </div>


            <ParallaxBanner
                layers={[{
                    image:
                        'https://plus.unsplash.com/premium_photo-1661901734877-88919d011b24?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    speed: -60
                }]}
                className="h-[100vh] relative w-full object-scale-down"
            >
                <div className='h-full bg-black opacity-50' />
                <div className='absolute top-0 left-0 text-white h-full w-full flex flex-col justify-center items-center'>
                    <p className='text-2xl mb-4 text-center'>Enjoy with your partner.</p>
                    <p className='text-5xl md:text-7xl font-old font-medium text-center'>Honeymoon Package<br />50% Off</p>
                    <div className='bg-secondary w-min px-8 cursor-pointer hover:bg-secondaryHovered py-4 whitespace-nowrap rounded mt-8'>VIEW EXCLUSIVE ROOM</div>
                    <div className='h-40 mt-5 grid grid-cols-4 gap-2' style={{ width: 'min(90vw, 600px)' }}>
                        <div className=' w-full aspect-[4/5] flex flex-col gap-2 relative'>
                            <p className='absolute z-10 w-full top-1/2 -translate-y-[50%] text-center text-6xl sm:text-8xl'>00</p>
                            <div className='h-1/2 w-full bg-black opacity-70'></div>
                            <div className='h-1/2 w-full bg-black opacity-70'></div>
                        </div>
                        <div className=' w-full aspect-[4/5] flex flex-col gap-2 relative'>
                            <p className='absolute z-10 w-full top-1/2 -translate-y-[50%] text-center text-6xl sm:text-8xl'>00</p>
                            <div className='h-1/2 w-full bg-black opacity-70'></div>
                            <div className='h-1/2 w-full bg-black opacity-70'></div>
                        </div>
                        <div className=' w-full aspect-[4/5] flex flex-col gap-2 relative'>
                            <p className='absolute z-10 w-full top-1/2 -translate-y-[50%] text-center text-6xl sm:text-8xl'>00</p>
                            <div className='h-1/2 w-full bg-black opacity-70'></div>
                            <div className='h-1/2 w-full bg-black opacity-70'></div>
                        </div>
                        <div className=' w-full aspect-[4/5] flex flex-col gap-2 relative'>
                            <p className='absolute z-10 w-full top-1/2 -translate-y-[50%] text-center text-6xl sm:text-8xl'>00</p>
                            <div className='h-1/2 w-full bg-black opacity-70'></div>
                            <div className='h-1/2 w-full bg-black opacity-70'></div>
                        </div>
                    </div>
                </div>

            </ParallaxBanner>


        </div>
    )
}


const Grid = () => {
    return <div className='grid grid-cols-2 lg:grid-cols-4 w-[90%] gap-4'>
        <div className='w-full cursor-pointer relative group aspect-square rounded ring-2 ring-zinc-200 overflow-hidden'>
            <img height={0} width={0} sizes='100vw' className='w-full h-full object-cover ' alt='' src={'https://plus.unsplash.com/premium_photo-1661501562127-a8bb26defb35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
            <div className='h-full w-full z-10 bg-white group-hover:bg-black group-hover:opacity-60 absolute top-0 left-0' />
            <div className='h-full w-full  z-10 absolute top-0 left-0 flex flex-col items-center justify-center'>
                <PiAirplaneTiltThin className='h-20 mb-4 w-20 text-secondary' />
                <p className='text-2xl group-hover:text-white text-zinc-700'>Airport Pickup</p>
                <p className='text-center w-[80%] text-zinc-400'>We’ll pick up from airport while you comfy on your ride.</p>
            </div>
        </div>
        <div className='w-full cursor-pointer relative group aspect-square rounded ring-2 ring-zinc-200 overflow-hidden'>
            <img height={0} width={0} sizes='100vw' className='w-full h-full object-cover ' alt='' src={'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
            <div className='h-full w-full z-10 bg-white group-hover:bg-black group-hover:opacity-60 absolute top-0 left-0' />
            <div className='h-full w-full  z-10 absolute top-0 left-0 flex flex-col items-center justify-center'>
                <IoFastFoodOutline className='h-20 mb-4 w-20 text-secondary' />
                <p className='text-2xl group-hover:text-white text-zinc-700'>Airport Pickup</p>
                <p className='text-center w-[80%] text-zinc-400'>We’ll pick up from airport while you comfy on your ride.</p>
            </div>
        </div>
        <div className='w-full cursor-pointer relative group aspect-square rounded ring-2 ring-zinc-200 overflow-hidden'>
            <img height={0} width={0} sizes='100vw' className='w-full h-full object-cover ' alt='' src={'https://plus.unsplash.com/premium_photo-1672116452571-896980a801c8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
            <div className='h-full w-full z-10 bg-white group-hover:bg-black group-hover:opacity-60 absolute top-0 left-0' />
            <div className='h-full w-full  z-10 absolute top-0 left-0 flex flex-col items-center justify-center'>
                <PiCityThin className='h-20 mb-4 w-20 text-secondary' />
                <p className='text-2xl group-hover:text-white text-zinc-700'>Airport Pickup</p>
                <p className='text-center w-[80%] text-zinc-400'>We’ll pick up from airport while you comfy on your ride.</p>
            </div>
        </div>
        <div className='w-full cursor-pointer relative group aspect-square rounded ring-2 ring-zinc-200 overflow-hidden'>
            <img height={0} width={0} sizes='100vw' className='w-full h-full object-cover ' alt='' src={'https://images.unsplash.com/photo-1521170813716-0b3f42fcfb65?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
            <div className='h-full w-full z-10 bg-white group-hover:bg-black group-hover:opacity-60 absolute top-0 left-0' />
            <div className='h-full w-full  z-10 absolute top-0 left-0 flex flex-col items-center justify-center'>
                <TbBeach className='h-20 mb-4 w-20 text-secondary' />
                <p className='text-2xl group-hover:text-white text-zinc-700'>Airport Pickup</p>
                <p className='text-center w-[80%] text-zinc-400'>We’ll pick up from airport while you comfy on your ride.</p>
            </div>
        </div>



    </div>
}


const Grid2 = () => {
    return <div className='grid grid-cols-1 xl:grid-cols-3 w-[90%] gap-4'>
        <div className='w-full relative flex flex-col items-center border-zinc-300 border-2 rounded overflow-hidden '>
            <img className='rounded-full ring-2 h-24 w-24 mt-4 ' sizes='100vw' height={0} width={0} alt='' src={'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
            <p className='text-2xl mt-2 font-old'>Joanna Roberts</p>
            <p className='text-zinc-400 text-center w-[80%] text-xl mt-4'>“This was the perfect hotel with the perfect location, perfect room; I couldn’t think of a more perfect trip!This was a great location as I was going to a conference at the Javitz center and it’s nearly a couple blocks walk.”</p>
            <img className='py-4 w-40 h-auto' sizes='100vw' height={0} width={0} alt='' src={'/assets/binance.png'} />
        </div>
        <div className='w-full relative flex flex-col items-center border-zinc-300 border-2 rounded overflow-hidden '>
            <img className='rounded-full ring-2 h-24 w-24 mt-4 ' sizes='100vw' height={0} width={0} alt='' src={'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
            <p className='text-2xl mt-2 font-old'>Joanna Roberts</p>
            <p className='text-zinc-400 text-center w-[80%] text-xl mt-4'>“This was the perfect hotel with the perfect location, perfect room; I couldn’t think of a more perfect trip!This was a great location as I was going to a conference at the Javitz center and it’s nearly a couple blocks walk.”</p>
            <img className='py-4 w-40 h-auto' sizes='100vw' height={0} width={0} alt='' src={'/assets/airbnb.png'} />
        </div>
        <div className='w-full relative flex flex-col items-center border-zinc-300 border-2 rounded overflow-hidden '>
            <img className='rounded-full ring-2 h-24 w-24 mt-4 ' sizes='100vw' height={0} width={0} alt='' src={'https://images.unsplash.com/photo-1499155286265-79a9dc9c6380?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
            <p className='text-2xl mt-2 font-old'>Joanna Roberts</p>
            <p className='text-zinc-400 text-center w-[80%] text-xl mt-4'>“This was the perfect hotel with the perfect location, perfect room; I couldn’t think of a more perfect trip!This was a great location as I was going to a conference at the Javitz center and it’s nearly a couple blocks walk.”</p>
            <img className='py-4 w-40 h-auto' sizes='100vw' height={0} width={0} alt='' src={'/assets/coinbase.png'} />
        </div>
    </div>
}