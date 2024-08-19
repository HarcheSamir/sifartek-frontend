import React from 'react'
import ContactForm from '../../../forms/ContactForm'

export default function DropUs() {
  return (
    <div className='w-full relative flex flex-col my-40 items-center'>
        <p className='font-lato text-zinc-800 text-3xl font-semibold'>DROP US A LINE</p>
        <img className='w-40 -mt-4' alt='' src='/assets/decor.svg' />
        <p className='text-lg mt-10'>Let us know how we can help</p>
        <div className='w-full relative '>
        <ContactForm/>

        </div>
    </div>
  )
}
