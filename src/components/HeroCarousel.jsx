import React, { useState } from 'react';
import {  FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HeroCarousel({ items = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };



    return (
        <div className="relative w-full  group h-full overflow-hidden flex justify-center items-center">
                <FaChevronLeft className="bg-opacity-50 h-8 ml-4 hidden group-hover:block w-8 bg-black rounded p-2 text-white left-0 hover:bg-opacity-70 absolute top-1/3 -translate-y-1/2 z-10" onClick={prevSlide} />
                <FaChevronRight className="bg-opacity-50 h-8 mr-4 w-8 hidden group-hover:block text-white bg-black rounded p-2 right-0 hover:bg-opacity-70 absolute top-1/3 -translate-y-1/2 z-10" onClick={nextSlide} />


            {/* Carousel Items */}
            <div
                className="flex    transition-transform duration-500 ease-in-out w-full h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >

                {items.map((item, index) => (
                    <div key={index} className="min-w-full box-border">
                        {item}
                    </div>
                ))}
            </div>

          


        </div>
    );
};
