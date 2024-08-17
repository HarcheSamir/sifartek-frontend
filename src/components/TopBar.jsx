import React from 'react'
import { FiSearch } from 'react-icons/fi';
import { FaBell, FaEnvelope, FaCog } from 'react-icons/fa';

const IconButton = ({ Icon, color }) => (
    <div className="flex items-center group justify-center p-2 border-zinc-200 shadow  rounded-lg cursor-pointer hover:animate-spin">
        <Icon className={`text-${color} group-hover:text-blue-500 text-sm`} />
    </div>
);

export default function TopBar() {
    return (
        <div className='w-full h-full px-4 flex items-center justify-between'>
            <form className="text-zinc-400 w-[max(300px,50%)]">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mockups, Logos..." required />
                    <button type="submit" className="text-white hidden sm:block absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                </div>
            </form>
            <div className='w-full h-full flex items-center justify-end gap-4'>
                <IconButton Icon={FaBell} color="zinc-500" />
                <IconButton Icon={FaEnvelope} color="zinc-500" />
                <IconButton Icon={FaCog} color="zinc-500" />
                <img alt='' className='rounded-full h-12 aspect-square cursor-pointer hover:scale-125 duration-300 ring-2' src='https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-11.webp' />
            </div>

        </div>
    )
}
