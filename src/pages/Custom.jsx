import React from 'react'
import Hero from './CustomizableSections/Hero.customizable'
import Rooms from './CustomizableSections/Rooms.customizable'
import HomeAmbience from './CustomizableSections/HomeAmbience.customizable'
import ParallaxOne from './CustomizableSections/Parralax.customizable'
import Best from './CustomizableSections/Best.Customizable'
import useContentStore from '../stores/contentStore'
export default function Custom() {
  const { fetchContent } = useContentStore()
  React.useEffect(() => { fetchContent() }, [])
  return (
    <div className='w-full h-full overflow-y-scroll relative flex flex-col'>
      <div className='w-full h-full '>
        <Hero />
        <Rooms />
        <HomeAmbience />
        <ParallaxOne />
        <Best />
        <div className='h-[5rem]' />
      </div>
    </div>
  )
}