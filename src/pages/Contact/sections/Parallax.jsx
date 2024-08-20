import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';


export default function Parallax() {
  return (
    <div className='w-full flex flex-col '>
      <ParallaxBanner
        layers={[{
          image:
            'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          speed: -50
        }]}
        className="h-[95vh] relative w-full object-cover"
      >
        <div className='h-full bg-black opacity-50' />
        <div className='absolute top-0 left-0 text-white h-full w-full flex flex-col justify-center items-center'>
          <p className='text-xl mb-4 text-center'>Enjoy with your partner.</p>
          <p className='text-3xl md:text-5xl font-old font-medium text-center'>Honeymoon Package<br />50% Off</p>
          <div className='bg-secondary w-min px-8 cursor-pointer hover:bg-secondaryHovered py-4 whitespace-nowrap rounded mt-8 text-sm'>VIEW EXCLUSIVE ROOM</div>

        </div>
      </ParallaxBanner>

    </div>
  )
}
