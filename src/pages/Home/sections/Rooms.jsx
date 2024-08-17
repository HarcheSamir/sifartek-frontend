import RoomsCarousel from '../../../components/RoomsCarousel'
import React from 'react'

export default function Rooms() {
    return (
        <div className='w-screen px-2 sm:px-8 min-h-screen flex flex-col items-center  '>
            <p className='mt-40 text-zinc-600 mb-4  text-sm sm:text-lg'>ACCOMODATION & COMFORT</p>
            <p className='font-old text-center text-3xl sm:text-5xl text-zinc-800 mb-20'>Eco-Inspired Lodging</p>
            <RoomsCarousel items={items} />
        </div>
    )
}


const RoomComponent = ({image, title, description}) => {
   return <div className='w-full aspect-[1/2] sm:aspect-[2/3]  md:aspect-square relative'>
        <img sizes='100vw' height={0} width={0} className='w-full h-1/3 sm:h-[70%]' src={image} alt='' />
        <div className='flex flex-col w-full h-2/3 sm:h-[30%] p-4'>
          <p className='font-old text-xl lg:text-3xl text-zinc-800'>{title}</p>
          <p className='text-zinc-600  font-thin text-sm lg:text-lg'>{description}</p>
        </div>
    </div>
}

const items = [
<RoomComponent image='https://images.unsplash.com/photo-1657907157592-dd6cfb9d06cf?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title='Penthouse Suite' description='Starting from $/night'/>,
<RoomComponent image='https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title='Janitor Suite' description='Starting from $/night'/>,
<RoomComponent image='https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title='Family Double' description='Starting from $/night'/>,
<RoomComponent image='https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title='Executive Room' description='Starting from $/night'/>,
<RoomComponent image='https://images.unsplash.com/photo-1600494448850-6013c64ba722?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title='' description='Starting from $/night'/>,


]

