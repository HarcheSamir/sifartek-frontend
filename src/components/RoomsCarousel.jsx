import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function RoomsCarousel({ items = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalItems = items.length;
    const visibleItems = 3;
    const isLastSlide = currentIndex >= totalItems - visibleItems;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            isLastSlide ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalItems - visibleItems : prevIndex - 1
        );
    };

    return (
        <div className="relative flex-col w-full py-8 group h-full overflow-hidden flex justify-center items-center">


            {/* Carousel Items */}
            <div
                className="flex w-full  gap-4 transition-transform duration-500"
                style={{
                    transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`, // Adjust to display 3 items at once
                }}
            >
                {items.map((item, index) => (
                    <div key={index} className="w-[30%] flex-shrink-0 rounded overflow-hidden shadow-xl">
                        {item}
                    </div>
                ))}
            </div>
            <div className='w-full mt-8 gap-4 flex justify-center'>
                <FaChevronLeft
                    className="bg-opacity-50 h-8 ml-4  group-hover:block w-8 bg-black rounded p-2 text-white left-0 hover:bg-opacity-70  z-10 cursor-pointer"
                    onClick={prevSlide}
                />
                <FaChevronRight
                    className="bg-opacity-50 h-8 mr-4 w-8  group-hover:block text-white bg-black rounded p-2 right-0 hover:bg-opacity-70 z-10 cursor-pointer"
                    onClick={nextSlide}
                />
            </div>
        </div>
    );
}
