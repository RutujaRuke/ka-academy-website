


// import React, { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const reviews = [
//   {
//     name: "Senin Ahammed",
//     role: "Student",
//     batch: "100% State Board XII",
//     message:
//       "I took classes whenever I was ready and made use of the notes and recorded videos for revision. The teachers helped me make every concept crystal clear.",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
//   {
//     name: "Darshan",
//     role: "Student",
//     batch: "2020 Dropper Batch, JEE 2021",
//     message:
//       "I'm extremely grateful to Vedantu’s Master Teachers for helping me clear my concepts and supporting me every step of the way.",
//     image: "https://randomuser.me/api/portraits/men/2.jpg",
//   },
//   {
//     name: "Priyanshu Gupta",
//     role: "Student",
//     batch: "Class 12, JEE Eklavya Batch, JEE 2021",
//     message:
//       "After I joined the Eklavya batch at Vedantu, I cracked KVPY and WBJEE and discovered my true potential through the guidance and mentorship of my Master Teachers.",
//     image: "https://randomuser.me/api/portraits/men/3.jpg",
//   },
//   {
//     name: "Rohit Sharma",
//     role: "Student",
//     batch: "Class 10, CBSE",
//     message:
//       "Vedantu helped me improve my confidence in math and science. The personalized learning approach was a game-changer for me.",
//     image: "https://randomuser.me/api/portraits/men/4.jpg",
//   },
//   {
//     name: "Anjali Verma",
//     role: "Student",
//     batch: "Class 11, NEET Batch",
//     message:
//       "Thanks to Vedantu's expert teachers, I was able to strengthen my biology concepts and ace my NEET preparation.",
//     image: "https://randomuser.me/api/portraits/women/5.jpg",
//   },
//   {
//     name: "Amit Kumar",
//     role: "Student",
//     batch: "Class 12, JEE Advanced",
//     message:
//       "Vedantu's JEE preparation program was instrumental in helping me secure a top rank. The mock tests and strategy sessions were invaluable.",
//     image: "https://randomuser.me/api/portraits/men/6.jpg",
//   },
// ];

// const Reviews = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [itemsPerSlide, setItemsPerSlide] = useState(3);

//   // Handle responsiveness
//   useEffect(() => {
//     const updateItemsPerSlide = () => {
//       setItemsPerSlide(window.innerWidth < 640 ? 1 : 3);
//     };
//     updateItemsPerSlide();
//     window.addEventListener("resize", updateItemsPerSlide);
//     return () => window.removeEventListener("resize", updateItemsPerSlide);
//   }, []);

//   // Auto-scroll every 10 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 10000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev + itemsPerSlide >= reviews.length ? 0 : prev + itemsPerSlide
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? Math.max(0, reviews.length - itemsPerSlide) : prev - itemsPerSlide
//     );
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto px-4 relative">
//       <div className="flex items-center justify-between mb-4">
//         <button
//           className="bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300 transition"
//           onClick={prevSlide}
//         >
//           <FaChevronLeft className="text-gray-600" />
//         </button>

//         <h2 className="text-2xl md:text-3xl font-semibold">Student Reviews</h2>

//         <button
//           className="bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300 transition"
//           onClick={nextSlide}
//         >
//           <FaChevronRight className="text-gray-600" />
//         </button>
//       </div>

//       {/* Reviews Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//         {reviews.slice(currentIndex, currentIndex + itemsPerSlide).map((testimonial, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-lg p-6 transition-transform transform scale-100 hover:scale-105"
//           >
//             <p className="text-gray-700 text-center mb-4">{testimonial.message}</p>
//             <div className="flex items-center gap-3 justify-center">
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className="w-12 h-12 rounded-full"
//               />
//               <div className="text-center">
//                 <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
//                 <p className="text-sm text-gray-500">{testimonial.batch}</p>
//                 <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">
//                   {testimonial.role}
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Dots */}
//       <div className="flex justify-center mt-4">
//         {Array.from({ length: Math.ceil(reviews.length / itemsPerSlide) }).map((_, index) => (
//           <span
//             key={index}
//             className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
//               Math.floor(currentIndex / itemsPerSlide) === index ? "bg-gray-700" : "bg-gray-400"
//             }`}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Reviews;


import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
  {
    name: "Senin Ahammed",
    role: "Student",
    batch: "100% State Board XII",
    message:
      "I took classes whenever I was ready and made use of the notes and recorded videos for revision. The teachers helped me make every concept crystal clear.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Darshan",
    role: "Student",
    batch: "2020 Dropper Batch, JEE 2021",
    message:
      "I'm extremely grateful to Vedantu’s Master Teachers for helping me clear my concepts and supporting me every step of the way.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Priyanshu Gupta",
    role: "Student",
    batch: "Class 12, JEE Eklavya Batch, JEE 2021",
    message:
      "After I joined the Eklavya batch at Vedantu, I cracked KVPY and WBJEE and discovered my true potential through the guidance and mentorship of my Master Teachers.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Rohit Sharma",
    role: "Student",
    batch: "Class 10, CBSE",
    message:
      "Vedantu helped me improve my confidence in math and science. The personalized learning approach was a game-changer for me.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Anjali Verma",
    role: "Student",
    batch: "Class 11, NEET Batch",
    message:
      "Thanks to Vedantu's expert teachers, I was able to strengthen my biology concepts and ace my NEET preparation.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Amit Kumar",
    role: "Student",
    batch: "Class 12, JEE Advanced",
    message:
      "Vedantu's JEE preparation program was instrumental in helping me secure a top rank. The mock tests and strategy sessions were invaluable.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      setItemsPerSlide(window.innerWidth < 640 ? 1 : 3);
    };
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerSlide >= reviews.length ? 0 : prev + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, reviews.length - itemsPerSlide) : prev - itemsPerSlide
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-5 md:px-16 relative bg-gray-100 py-8">
      <div className="flex items-center justify-between mb-4">
        <button
          className="bg-gray-300 p-3 rounded-full shadow-md hover:bg-gray-400 transition"
          onClick={prevSlide}
        >
          <FaChevronLeft className="text-gray-600" />
        </button>

        <h2 className="text-2xl md:text-3xl font-semibold">Student Reviews</h2>

        <button
          className="bg-gray-300 p-3 rounded-full shadow-md hover:bg-gray-400 transition"
          onClick={nextSlide}
        >
          <FaChevronRight className="text-gray-600" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {reviews.slice(currentIndex, currentIndex + itemsPerSlide).map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transition-transform transform scale-100 hover:scale-105"
          >
            <p className="text-gray-700 text-center mb-4">{testimonial.message}</p>
            <div className="flex items-center gap-3 justify-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="text-center">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.batch}</p>
                <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">
                  {testimonial.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(reviews.length / itemsPerSlide) }).map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex / itemsPerSlide) === index ? "bg-gray-700" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
