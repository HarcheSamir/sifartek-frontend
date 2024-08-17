import React from 'react'
import Hero from './sections/Hero'
import DropUs from './sections/DropUs'
import Parallax from './sections/Parallax'
import Footer from '../Home/sections/Footer'
export default function Contact() {
  return (
    <div className='w-screen bg-[#F9FAFB]' >
      <Hero/>
      <DropUs/>
      <Parallax/>
      <Footer/>
    </div>
  )
}
