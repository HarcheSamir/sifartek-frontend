import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import { PiCarThin } from "react-icons/pi";
import { CiMail, CiMicrophoneOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";

export default function Hero() {
    return (
        <div className='w-full flex flex-col '>
            <ParallaxBanner
                layers={[{
                    image:
                        'https://images.unsplash.com/photo-1455593984172-9f753a2e1ebd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    speed: -50
                }]}
                className="h-[95vh] relative w-full object-scale-down"
            >
                <div className='h-full w-full bg-black opacity-50' />
                <div className=' absolute w-full top-[45%] left-0  flex flex-col justify-center items-center  text-white'>
                    <p className='font-thin text-lg'>Luxery City</p>
                    <p className='text-4xl text-center sm:text-7xl font-semibold font-lato mt-2'>CONTACT US</p>
                </div>

            </ParallaxBanner>
            <div className='flex flex-col sm:flex-row w-full justify-center py-40 gap-8'>
                <div className='flex items-center flex-col gap-4 '>
                    <PiCarThin className='text-4xl text-zinc-800 font-thin' />
                    <p className='font-lato text-2xl font-semibold text-zinc-800'>PARKING</p>
                    <p className='w-[70%] text-lg  text-center'>Xenia City Hotel has it’s own private parking for customers. It is fully protected and covered for rain or sunny weather.</p>

                </div>
                <div className='flex items-center flex-col gap-4 '>
                    <CiMicrophoneOn className='text-4xl text-zinc-800 font-thin' />
                    <p className='font-lato text-2xl font-semibold text-zinc-800'>TELEPHONE</p>
                    <p className='w-[70%] text-lg   text-center'>Xenia City Hotel has it’s own private parking for customers. It is fully protected and covered for rain or sunny weather.</p>

                </div>
                <div className='flex items-center flex-col gap-4 '>
                    <CiMail className='text-4xl text-zinc-800 font-thin' />
                    <p className='font-lato text-2xl font-semibold text-zinc-800'>EMAIL</p>
                    <p className='w-[70%] text-lg   text-center'>Xenia City Hotel has it’s own private parking for customers. It is fully protected and covered for rain or sunny weather.</p>

                </div>



            </div>
        </div>
    )
}
