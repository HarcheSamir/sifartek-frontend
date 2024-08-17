import React from 'react'
import StatsCarousel from '../components/StatsCarousel'

export default function Test() {
  return (
    <div className='w-full h-screen bg-white absolute top-0 left-0'>
        <StatsCarousel items={items} />
        </div>
  )
}

const items = [
  <div className='bg-red-500 w-[600px]'>Item 1</div>,
  <div className='bg-red-500 w-[600px]'>Item 1</div>,
  <div className='bg-red-500 w-[600px]'>Item 1</div>,
  <div className='bg-red-500 w-[600px]'>Item 1</div>,
  <div className='bg-red-500 w-[600px]'>Item 1</div>,
];