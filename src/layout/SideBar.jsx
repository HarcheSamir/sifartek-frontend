import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { RiSettingsLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { LiaSignOutAltSolid } from "react-icons/lia";
import useAdminStore from '../stores/adminStore';
import { FaInbox } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";
import { GiBed } from "react-icons/gi";

export default function SideBar() {
    const location = useLocation();
    const {logout} = useAdminStore()
    const pathname = location.pathname;

    const mainRoutes = React.useMemo(() => [
        {
            label: 'Dashboard',
            href: '/dashboard',
            icon: MdOutlineDashboard,
            active: pathname === '/dashboard'
        },
        {
            label: 'Inbox',
            href: '/inbox',
            icon: FaInbox ,
            active: pathname === '/inbox'
        },
        {
            label: 'Home Custom',
            href: '/custom',
            icon: FaLaptopCode,
            active: pathname === '/custom'
        },        {
            label: 'Rooms',
            href: '/adminRooms',
            icon: GiBed,
            active: pathname === '/adminRooms'
        },
    ], [pathname]);

    const userRoutes = React.useMemo(() => [
        {
            label: 'Profile',
            href: '/Profile',
            icon: FaRegUser,
            active: pathname === '/Profile'
        },
        {
            label: 'Settings',
            href: '/Settings',
            icon: RiSettingsLine,
            active: pathname === '/Settings'
        },
    ], [pathname]);

    return (
        <div className='w-full h-full text-neutral-600    bg-white relative overflow-hidden flex flex-col items-center shadow'>
            <div className='flex items-center gap-2 mt-8 w-full ml-10'>
                <img height={0} width={0} sizes='100vw' src={'/assets/logo2.svg'} alt='' className='w-[100px]' />
            </div>
            <p className='w-full text-[10px]  ml-6 mt-12 mb-2'>MAIN</p>
            {mainRoutes.map((item) =>
                <Link className='w-full relative ' key={item.label} to={item.href}>
                    {item.active && <div className='absolute h-full right-0 rounded-t-full rounded-b-full w-1 bg-blue-500'></div>}
                    <div className={`${item.active ? 'bg-blue-50 ' : 'hover:scale-[105%]'} gap-2 group/item duration-300 cursor-pointer flex pl-8 items-center py-3 w-full`}>
                        <item.icon className='w-3 h-3' />
                        <p className='text-xs'>{item.label}</p>
                    </div>
                </Link>
            )}
            <div className='w-[80%] h-[1px] bg-zinc-200 mt-4 mb-4'></div>
            <p className='w-full text-[10px]  ml-6 mb-2'>USER</p>
            {userRoutes.map((item) =>
                <Link className='w-full relative ' key={item.label} >
                    {item.active && <div className='absolute h-full right-0 rounded-t-full rounded-b-full w-1 bg-blue-500'></div>}
                    <div className={`${item.active ? 'bg-blue-50 ' : 'hover:scale-[105%]'} gap-2 group/item duration-300 cursor-pointer flex pl-8 items-center py-3 w-full`}>
                        <item.icon className='w-3 h-3' />
                        <p className='text-xs'>{item.label}</p>
                    </div>
                </Link>
            )}
            <div className='w-full absolute bottom-0 pb-10 left-0'>
                <div className='w-full relative '>
                    <div className='hover:scale-[105%] text-sm gap-2 group/item duration-300 cursor-pointer flex pl-8 items-center py-3 w-full'>
                        <IoIosHelpCircleOutline className='w-4 h-4' />
                        <p>Help</p>
                    </div>
                </div>
                <div className='w-full relative '>
                    <div onClick={logout} className='hover:scale-[105%] text-sm gap-2 group/item duration-300 cursor-pointer flex pl-8 items-center py-3 w-full'>
                        <LiaSignOutAltSolid className='w-4 h-4' />
                        <p>Sign Out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
