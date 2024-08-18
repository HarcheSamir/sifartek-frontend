import React from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Navbar() {
    const [drawer, setDrawer] = React.useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    // Handler for navigating to a route
    const handleNavigation = (path) => {
        navigate(path);
        setDrawer(false); // Close the drawer when navigating on mobile
    };

    return (
        <div className='fixed top-0 z-40 py-4 items-center bg-primary w-full justify-between flex px-4 lg:px-20 text-[#666666]'>
            <img 
                height={0} 
                width={0} 
                sizes='100vw' 
                alt='Logo' 
                src={'/assets/logo.svg'} 
                className='w-32 cursor-pointer duration-300 hover:scale-110' 
                onClick={() => navigate('/login')} 
            />
            <div className='md:flex text-lg hidden md:gap-4 xl:gap-20 max-w-[80%] items-center'>
                <p className=' font-normal cursor-pointer' onClick={() => handleNavigation('/')}>Home</p>
                <p className=' font-normal cursor-pointer' onClick={() => handleNavigation('/rooms')}>Rooms</p>
                <p className=' font-normal cursor-pointer' onClick={() => handleNavigation('/elements')}>Elements</p>
                <p className=' font-normal cursor-pointer' onClick={() => handleNavigation('/pages')}>Pages</p>
                <p className=' font-normal cursor-pointer' onClick={() => handleNavigation('/blog')}>Blog</p>
                <p className=' font-normal cursor-pointer' onClick={() => handleNavigation('/contact')}>Contact</p>
            </div>
            <div className='cursor-pointer hidden md:block whitespace-nowrap px-4 py-2 rounded text-white font-semibold hover:bg-secondaryHovered bg-secondary'>
                Book Now
            </div>
            <div onClick={() => setDrawer(!drawer)} className='bg-secondary p-2 md:hidden rounded text-white cursor-pointer'>
                {drawer ? <IoMdClose className='h-8 w-8' /> : <IoMdMenu className='h-8 w-8' />}
            </div>
            <div className={`sm:hidden absolute w-full bg-white left-0 flex flex-col items-center duration-300 overflow-hidden ${drawer ? 'top-full h-[55vh]' : 'top-full h-0'}`}>
                <p className='text-xl mt-4 font-normal cursor-pointer' onClick={() => handleNavigation('/')}>Home</p>
                <div className='w-[90%] h-[1px] rounded-full my-3 bg-zinc-200' />
                <p className='text-xl font-normal cursor-pointer' onClick={() => handleNavigation('/rooms')}>Rooms</p>
                <div className='w-[90%] h-[1px] rounded-full my-3 bg-zinc-200' />
                <p className='text-xl font-normal cursor-pointer' onClick={() => handleNavigation('/elements')}>Elements</p>
                <div className='w-[90%] h-[1px] rounded-full my-3 bg-zinc-200' />
                <p className='text-xl font-normal cursor-pointer' onClick={() => handleNavigation('/pages')}>Pages</p>
                <div className='w-[90%] h-[1px] rounded-full my-3 bg-zinc-200' />
                <p className='text-xl font-normal cursor-pointer' onClick={() => handleNavigation('/blog')}>Blog</p>
                <div className='w-[90%] h-[1px] rounded-full my-3 bg-zinc-200' />
                <p className='text-xl font-normal cursor-pointer' onClick={() => handleNavigation('/contact')}>Contact</p>
            </div>
        </div>
    );
}
