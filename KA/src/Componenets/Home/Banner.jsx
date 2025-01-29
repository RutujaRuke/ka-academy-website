


// import React from "react";

// const Banner = () => {
//   return (
//     <div className="relative bg-gray-100 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20 overflow-hidden">

//       {/* Right Orange Triangle Background */}
//       {/* <div className="absolute right-0 top-0 w-2/3 md:w-1/2 h-full bg-orange-500 clip-triangle"></div> */}

//       {/* <div className="absolute bottom-0 left-0 w-full h-1/2 bg-orange-500 clip-diagonal"></div> */}
//       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-orange-500 clip-diagonal"></div>


//       {/* Sale Text Section */}
//       <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-sm md:max-w-md relative z-10">
//         <h2 className="text-2xl md:text-3xl font-bold">Sale ends today</h2>
//         <p className="text-gray-600 mt-2">
//           Stay on top of the skills you need. Courses as low as <span className="font-semibold">₹449.</span>
//         </p>
//       </div>

//       {/* Image Section */}
//       <div className="relative mt-8 md:mt-0">
//         <img
//           src="/human.png" // Replace with your image

//           alt="Sale Offer"
//           className="w-48 md:w-64 object-cover relative z-10"
//         />
//       </div>



//     </div>
//   );
// };

// export default Banner;



import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <>
            <div className="relative bg-gray-100 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20 overflow-hidden">

                {/* Bottom Orange Triangle Background */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-orange-500 clip-diagonal"></div>

                {/* Sale Text Section */}
                <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-sm mt-[70px] md:mt-0 md:max-w-md relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold">Get better oppotunities with us</h2>
                    <p className="text-gray-600 mt-2">
                        An educated mind is better than an empty one. The only weapon to fight injustice is Education. <span className="font-semibold"></span>
                    </p>
                </div>

                {/* Image Section */}
                <div className="relative mt-8 md:mt-0">
                    <img
                        src="/human.png"
                        alt="Sale Offer"
                        className="w-64 md:w-80 lg:w-96 object-cover relative z-10 mb-[-80px]"
                    />
                </div>
            </div>
            {/* Hero Section */}
           
        </>
    );
};

export default Banner;
