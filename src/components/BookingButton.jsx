import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {  FaChevronRight, FaChevronUp, FaChevronDown } from "react-icons/fa";

export default function BookingButton() {
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [guests, setGuests] = useState(1);

    const handleGuestsChange = (operation) => {
        if (operation === 'increase') {
            setGuests(guests + 1);
        } else if (operation === 'decrease' && guests > 1) {
            setGuests(guests - 1);
        }
    };

    return (

        <div className="  bg-gray-100 bg-white  max-w-[80%]  shadow-lg  absolute left-1/2 -translate-x-1/2  top-[80%]">
            <div className='h-full   relative flex    items-center justify-center'>
                <div className="flex relative w-[25%] flex-col items-center">
                    <label className="sm:text-lg text-xs font-thin mb-2">CHECK IN</label>
                    <DatePicker
                        selected={checkInDate}
                        onChange={(date) => setCheckInDate(date)}
                        dateFormat="dd MMM"
                        className="text-center  focus:outline-none bg-transparent font-old sm:text-3xl "
                    />
                </div>
                <div className="flex relative w-[25%]  flex-col items-center">
                    <label className="sm:text-lg text-xs font-thin mb-2">CHECK OUT</label>
                    <DatePicker
                        selected={checkOutDate}
                        onChange={(date) => setCheckOutDate(date)}
                        dateFormat="dd MMM"
                        className="text-center   focus:outline-none bg-transparent font-old sm:text-3xl"
                    />
                </div>
                <div className="flex w-[25%]  flex-col items-center ">
                    <label className="sm:text-lg text-xs font-semibold mb-2">GUESTS</label>
                    <div className="flex items-center ">
                        <span className="text-xl mr-2">{guests}</span>
                        <div className='flex flex-col'>
                            <FaChevronUp onClick={() => handleGuestsChange('increase')} className=" text-zinc-500 " />
                            <FaChevronDown onClick={() => handleGuestsChange('decrease')} className=" text-zinc-500 " />

                        </div>
                    </div>
                </div>
                <button className="bg-black w-[25%] text-xs   whitespace-nowrap flex items-center justify-center h-[100px] sm:h-[150px] text-white   sm:text-lg font-semibold hover:bg-gray-900 transition">
                    BOOK NOW
                    <FaChevronRight className='ml-2' />
                </button>
            </div>

        </div>
    );
};