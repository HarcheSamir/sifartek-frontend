import React from 'react'
import Hero from './sections/Hero.customizable'
import Rooms from './sections/Rooms.customizable'
import HomeAmbience from './sections/HomeAmbience.customizable'
import ParallaxOne from './sections/Parralax.customizable'
import Best from './sections/Best.Customizable'
export default function Custom() {
  return (
    <div className='w-full h-full overflow-y-scroll relative flex flex-col'>
      <div className='w-full h-full '>
        <Hero />
        <Rooms />
        <HomeAmbience/>
        <ParallaxOne/>
        <Best/>
        <div className='h-[5rem]' />
      </div>
    </div>
  )
}
