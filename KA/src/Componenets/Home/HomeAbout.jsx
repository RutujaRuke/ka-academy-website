// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const HomeAbout = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-4">
      
//       {/* Left Side: Image */}
//       <motion.div
//         className="w-full md:w-1/2 flex justify-center"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <img
//           src="/abot.jpg"
//           alt="Delicious Cakes"
//           className="w-full md:w-[90%] h-auto rounded-lg "
//         />
//       </motion.div>

//       {/* Right Side: Text and Button */}
//       <motion.div
//         className="w-full md:w-1/2 text-center md:text-left p-4"
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//       >
//         <h1 className="text-2xl md:text-4xl font-bold mb-4">About us!</h1>
//         <p className="text-sm md:text-lg mb-6">
//           At A-1 Caterers, we pride ourselves on our extensive menu, which features an array of vegetarian and non-vegetarian dishes, as well as our signature tandoori items. Each dish is crafted using fresh, high-quality ingredients, ensuring that every bite bursts with flavor.
//         </p>
//         <p className="text-sm md:text-lg mb-6">
//           Whether you're hosting a wedding, corporate event, or family gathering, our culinary offerings are designed to delight your guests and elevate your occasion. With a focus on quality and customer satisfaction, we are committed to making your event memorable with our exceptional catering services.
//         </p>
//         <Link to="/about" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
//           Learn more
//         </Link>
//       </motion.div>

//     </div>
//   );
// };

// export default HomeAbout;
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/bg1.jpg",
  "/bg2.jpg",
  "/bg1.jpg"
];

export default function HomeAbout() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-2 mt-6 md:mt-[-80px] md:mb-[-80px]">
      {/* Left Side - Image Carousel */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <button
          className="absolute md:left-16 left-1 text-black "
          onClick={prevSlide}
        >
          <ChevronLeft size={24} />
        </button>
        <img
          src={images[currentIndex]}
          alt="carousel"
          className="rounded-lg shadow-lg w-[500px] h-[300px] object-cover"
        />
        <button
          className="absolute md:right-16 right-1 text-black "
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 p-4 text-center md:text-left">
        <h1 className="text-3xl font-bold mt-4 md:mt-0 text-gray-800">Welcome to Our Service</h1>
        <p className="text-gray-600 mt-4">
          Experience seamless integration with our amazing features. We provide 
          top-notch solutions tailored to your needs. Discover more about what Experience seamless integration with our amazing features. We provide 
          top-notch solutions tailored to your needs. Discover Experience seamless integration with our amazing features. We provide 
          top-notch solutions tailored to your needs. Discover Experience seamless integration with our amazing features. We provide 
          top-notch solutions tailored to your needs. Discover more about what we offermore about what we offer more about what we offer we offer.
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  );
}
