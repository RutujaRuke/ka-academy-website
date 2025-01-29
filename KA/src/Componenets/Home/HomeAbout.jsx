import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-4">
      
      {/* Left Side: Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/abot.jpg"
          alt="Delicious Cakes"
          className="w-full md:w-[90%] h-auto rounded-lg "
        />
      </motion.div>

      {/* Right Side: Text and Button */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left p-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h1 className="text-2xl md:text-4xl font-bold mb-4">About us!</h1>
        <p className="text-sm md:text-lg mb-6">
          At A-1 Caterers, we pride ourselves on our extensive menu, which features an array of vegetarian and non-vegetarian dishes, as well as our signature tandoori items. Each dish is crafted using fresh, high-quality ingredients, ensuring that every bite bursts with flavor.
        </p>
        <p className="text-sm md:text-lg mb-6">
          Whether you're hosting a wedding, corporate event, or family gathering, our culinary offerings are designed to delight your guests and elevate your occasion. With a focus on quality and customer satisfaction, we are committed to making your event memorable with our exceptional catering services.
        </p>
        <Link to="/about" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Learn more
        </Link>
      </motion.div>

    </div>
  );
};

export default HomeAbout;
