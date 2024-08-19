import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const StatsCarousel = ({ items }) => {
  const carouselRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    const scrollAmount = direction === 'left' ? -300 : 300;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const updateArrowVisibility = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    updateArrowVisibility(); 
    window.addEventListener('resize', updateArrowVisibility); 
    const currentRef = carouselRef.current;
    currentRef?.addEventListener('scroll', updateArrowVisibility); 

    return () => {
      window.removeEventListener('resize', updateArrowVisibility);
      currentRef?.removeEventListener('scroll', updateArrowVisibility);
    };
  }, []);

  return (
    <div className="relative overflow-hidden w-full no-scrollbar">
      {showLeftArrow && (
        <div
          className="absolute top-0 left-0 h-full flex items-center justify-center bg-gradient-to-r from-zinc-100 rounded-full to-transparent cursor-pointer z-20"
          onClick={() => scroll('left')}
        >
          <FaChevronLeft className="text-zinc-600 text-lg" />
        </div>
      )}
      {showRightArrow && (
        <div
          className="absolute top-0 right-0 h-full flex items-center justify-center bg-gradient-to-l from-zinc-100 rounded-full to-transparent cursor-pointer z-20"
          onClick={() => scroll('right')}
        >
          <FaChevronRight className="text-zinc-600 text-lg" />
        </div>
      )}
      <div
        className="flex w-full overflow-x-scroll  gap-2 sm:gap-4 no-scrollbar scroll-smooth py-4"
        ref={carouselRef}
      >
        {items.map((item, index) => (
          <div key={index} className="w-min">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCarousel;