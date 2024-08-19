import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginCarousel = ({ items = [], texts = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate(); // Initialize useNavigate

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

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
            <div className='absolute bottom-8 right-[30%] lg:right-[28%] z-20 flex gap-5'>
                <FaArrowLeft className="bg-opacity-50 text-white hover:bg-opacity-70 text-sm" onClick={prevSlide} />
                <FaArrowRight className="bg-opacity-50 text-white hover:bg-opacity-70 text-sm" onClick={nextSlide} />
            </div>
            <img
                height={0}
                width={0}
                sizes='100vw'
                className='h-auto w-32 z-50 absolute top-5 left-[20%] cursor-pointer duration-300 hover:scale-110'
                src={'/assets/logo.svg'}
                alt=''
                onClick={() => navigate('/')} // Navigate to home on click
            />

            {/* Carousel Items */}
            <div
                className="flex transition-transform duration-500 ease-in-out w-full h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {items.map((item, index) => (
                    <div key={index} className="min-w-full box-border">
                        {item}
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="absolute bottom-8 left-[20%] w-full flex z-10">
                {items.map((_, index) => (
                    <div
                        key={index}
                        className={`h-[3px] w-[20px] mx-1 rounded-full cursor-pointer ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                        onClick={() => goToSlide(index)}
                    ></div>
                ))}
            </div>

            {/* Texts */}
            <div className='absolute top-1/2 left-1/3 w-1/2'>
                {texts.map((item, index) => (<p key={index}>{item}</p>))}
            </div>
        </div>
    );
};

export default LoginCarousel;
