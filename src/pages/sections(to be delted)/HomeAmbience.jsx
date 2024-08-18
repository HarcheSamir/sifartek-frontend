import React from 'react'
import useImageStore from '../../../stores/imageStore'

export default function HomeAmbience() {
    return (
        <div className=' lg:h-screen w-full bg-primary md:mt-40 flex flex-col lg:flex-row'>
            <img sizes='100vw' height={0} width={0} className='w-full lg:w-[60%] h-full  object-cover' alt='' src={'https://images.unsplash.com/photo-1602081115720-72e5b0a254b8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
            <div className='w-full py-20  flex flex-col justify-center pl-8 md:pl-20'>
            <p className='font-old text-3xl md:text-6xl text-zinc-200'>Get Home-like <br/> Ambience</p>
            <p className='text-sm md:text-lg text-zinc-300 ml-2 mt-4 indent-2'>A self-described luxury temporary residence, the AKA Beverly Hills <br className='hidden sm:block'/> offers guests the space and comfort of an apartment, with the <br className='hidden md:block'/> service and amenities you’d expect at a five-star hotel.</p>
            <div className='bg-secondary w-min px-8 cursor-pointer hover:bg-secondaryHovered py-4 whitespace-nowrap rounded mt-8'>VIEW EXCLUSIVE ROOM</div>
            </div>
        </div>
    )
}
