import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReservingComponent = () => {
    const [arrivalDate, setArrivalDate] = useState(new Date());
    const [departureDate, setDepartureDate] = useState(new Date());
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    return (
        <div className=" w-[min(25rem,80%)] h-fit pb-8 flex flex-col items-center  bg-white border border-gray-200  shadow-md">
            <p className="text-lg w-full py-4 px-4 font-semibold mb-4 border-b-2 border-gray-200">Your Reservation</p>

            <div className="mb-4 px-4 w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">Arrival Date</label>
                <DatePicker
                    selected={arrivalDate}
                    onChange={(date) => setArrivalDate(date)}
                    dateFormat="MMMM d, yyyy"
                    className="w-full p-4 border border-gray-300"
                />
            </div>

            <div className="mb-4 px-4 w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">Departure Date</label>
                <DatePicker
                    selected={departureDate}
                    onChange={(date) => setDepartureDate(date)}
                    dateFormat="MMMM d, yyyy"
                    className="w-full p-4 border border-gray-300"
                />
            </div>

            <div className="mb-4 px-4 w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">Adult</label>
                <select
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="w-full p-4 border border-gray-300 "
                >
                    {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4 px-4 w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">Children</label>
                <select
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    className="w-full p-4 border border-gray-300 "
                >
                    {[...Array(10)].map((_, i) => (
                        <option key={i} value={i}>
                            {i}
                        </option>
                    ))}
                </select>
            </div>

            <button className="w-[80%] text-white text-sm py-4 bg-secondary hover:bg-secondaryHovered  px-4 ">
                CHECK AVAILABILITY
            </button>
        </div>
    );
};

export default ReservingComponent;
