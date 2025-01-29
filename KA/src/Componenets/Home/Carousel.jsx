

import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = () => {
  // Manually add two static images
  const [photos] = useState([
    { path: '/bg1.jpg' }, // Replace with your image path
    { path: '/bg2.jpg' }, // Replace with your image path
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [photos]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 600 }
  });

  return (
    <div className="relative w-full h-[300px] md:h-[285px] overflow-hidden rounded-[10px]">
      <animated.div
        style={props}
        className="absolute inset-0"
      >
        <img
          src={photos[currentIndex]?.path} // Use the static images from the state
          alt="Slider"
          className="w-full h-full object-cover"
        />
      </animated.div>

      {/* Controls with icons */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button onClick={handlePrev} className="text-black">
          <FaChevronLeft size={15} />
        </button>
        <button onClick={handleNext} className="text-black">
          <FaChevronRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
