import React from 'react'
import ContactForm from '../../../forms/ContactForm'

export default function DropUs() {
  return (
    <div className='w-full relative flex flex-col my-40 items-center'>
        <p className='font-lato text-zinc-800 text-5xl font-semibold'>DROP US A LINE</p>
        <img className='w-60' alt='' src='/assets/decor.svg' />
        <p className='text-xl mt-20'>Let us know how we can help</p>
        <div className='w-full relative '>
        <ContactForm/>

        </div>
    </div>
  )
}
