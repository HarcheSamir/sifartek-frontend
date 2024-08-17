import React from 'react'
export default function Footer() {
  return (

    <div className='px-20 flex flex-col items-center w-screen py-16 bg-primary'>
    <div className=' px-8 w-full grid-cols-2 gap-8 grid sm:grid-cols-4 mt-8 h-full'>
    <div className='w-full flex flex-col h-full col-span-2 sm:col-span-1'>
    <img alt='' height={0} width={0} sizes='100vw' className='h-20 w-auto hover:scale-105 duration-300 ' src={'/assets/logo.svg'} />

        <p className='text-gray-100 mt-4 ml-4 sm:text-[9px]'>Derdf, asidh ase fieev oeiwl <br/> 81-7 dernitad kd 42.</p>

    </div>

    <div className='w-full h-full flex flex-col gap-4 sm:items-end'>
        <p className='font-extrabold text-xs text-white g'>Links</p>
        <p className='text-white text-xs'>Serendipity</p>
        <p className='text-white text-xs'>Quixotic</p>

        <p className='text-white text-xs'>Mellifluous</p>

        <p className='text-white text-xs'>Labyrinthine</p>

        

    </div>
    <div className='w-full h-full flex flex-col gap-4 sm:items-end'>
    <p className='font-extrabold text-xs text-white g'>Company</p>
    <p className='text-white text-xs'>Effervescent</p>
    <p className='text-white text-xs'>Ephemeral</p>
    <p className='text-white text-xs'>Resplendent</p>
    <p className='text-white text-xs'>Persnickety</p>
</div>
<div className='w-full h-full flex flex-col gap-4 sm:items-end'>
    <p className='font-extrabold text-xs text-white g'>Get In Touch</p>
    <p className='text-white text-xs'>Bucolic</p>
    <p className='text-white text-xs'>Sesquipedalian</p>
    <p className='text-white text-xs'>Mellifluous</p>
    <p className='text-white text-xs'>Serendipity</p>
</div>

</div>
<div className='w-[90%] h-px bg-zinc-700  mt-8'/>

<div className='flex w-[90%] mt-2 justify-between px-2'> 
<p className='text-zinc-500 text-xs'>
  Copyright© 2023 Hoobank. All Rights Reserved
</p>
<div className='flex h-[14px] gap-2'>
  <img alt='' height={0} width={0} sizes='100vw' className='h-full w-auto' src={'/assets/instagram.svg'} />
  <img alt='' height={0} width={0} sizes='100vw' className='h-full w-auto' src={'/assets/facebook.svg'} />
  <img alt='' height={0} width={0} sizes='100vw' className='h-full w-auto' src={'/assets/twitter.svg'} />
  <img alt='' height={0} width={0} sizes='100vw' className='h-full w-auto' src={'/assets/linkedin.svg'} />


</div>

</div>
    </div>

  )
}