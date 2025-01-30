// import { motion } from 'framer-motion';

// const students = [
//   { name: 'Mukul Uppadhyay', score: 711, img: 'https://via.placeholder.com/100' },
//   { name: 'Aryan', score: 710, img: 'https://via.placeholder.com/100' },
//   { name: 'Aditya', score: 710, img: 'https://via.placeholder.com/100' },
//   { name: 'Rahul', score: 709, img: 'https://via.placeholder.com/100' }
// ];

// const filters = ['All', 'Software Jobs', 'Internships', 'Core Placements', 'Startups', 'Higher Studies'];

// const Home2 = () => {


//     return (
//         <div className="p-6 max-w-5xl mx-auto text-center space-y-6">
//       {/* Heading */}
//       <h1 className="text-3xl font-bold">
//         Successful <span className="text-gray-900">Placements.</span> Bright <span className="text-orange-500 underline">Futures</span>
//       </h1>
//       <p className="text-gray-600">Our institute not only provides top-notch education but also ensures students get the best opportunities through internships and placements.</p>
      
//       {/* Buttons */}
//       <div className="flex justify-center space-x-4">
//         <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold">Explore opportunities</button>
//         <button className="border px-4 py-2 rounded-lg font-semibold">View placements</button>
//       </div>
      
//       {/* Filters */}
//       <div className="flex flex-wrap justify-center gap-3 mt-4">
//         {filters.map((filter, i) => (
//           <button key={i} className={`px-4 py-2 border rounded-full ${i === 0 ? 'bg-gray-900 text-white' : 'text-gray-800'}`}>{filter}</button>
//         ))}
//       </div>
      
//       {/* Placement Section */}
//       <div className="bg-yellow-400 p-6 rounded-xl mt-6">
//         <h2 className="text-xl font-bold text-red-600">Our Students Excel in <span className="text-black">Internships & Placements</span></h2>
        
//         {/* Student Info Grid */}
//         <div className="grid grid-cols-4 gap-4 mt-4">
//           {students.map((student, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               className="p-4 bg-white rounded-lg shadow-lg"
//             >
//               <img src={student.img} alt={student.name} className="w-24 h-24 rounded-full mx-auto" />
//               <h3 className="text-lg font-semibold mt-2">{student.name}</h3>
//               <p className="bg-gray-900 text-white inline-block px-3 py-1 rounded-lg mt-1">{student.score} Internship</p>
//             </motion.div>
//           ))}
//         </div>
        
//         {/* Statistics */}
//         <div className="mt-4 bg-yellow-600 text-white p-4 rounded-lg font-bold">
//           Over <span className="text-3xl">500+</span> Students Successfully Placed & Internships Provided
//         </div>
//       </div>
//     </div>
//     );
// }

// export default Home2;


import { motion } from 'framer-motion';

const students = [
  { name: 'Mukul Uppadhyay', position: 'Software Engineer', package: '₹12 LPA', img: '/profile1.jpg' },
  { name: 'Aryan Uppadhyay', position: 'Data Scientist', package: '₹10 LPA', img: '/profile2.jpg' },
  { name: 'Aditya Uppadhyay', position: 'Product Manager', package: '₹14 LPA', img: '/profile1.jpg' },
  { name: 'Rahul Uppadhyay', position: 'UI/UX Designer', package: '₹8 LPA', img: '/profile2.jpg' }
];

const filters = ['All', 'Software Jobs', 'Internships', 'Core Placements', 'Startups', 'Higher Studies'];

const Placement = () => {
  return (
    <div className="pt-8 px-6 max-w-5xl mx-auto text-center space-y-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold">
        Successful <span className="text-gray-900">Placements.</span> Bright <span className="text-orange-500 underline">Futures</span>
      </h1>
      <p className="text-gray-600">Our institute not only provides top-notch education but also ensures students get the best opportunities through internships and placements.</p>
      
      {/* Buttons */}
      <div className="flex justify-center space-x-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold">Explore opportunities</button>
        <button className="border px-4 py-2 rounded-lg font-semibold">View placements</button>
      </div>
      
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        {filters.map((filter, i) => (
          <button key={i} className={`px-4 py-2 border rounded-full ${i === 0 ? 'bg-gray-900 text-white' : 'text-gray-800'}`}>{filter}</button>
        ))}
      </div>
      
      {/* Placement Section */}
      <div className="bg-yellow-400 md:p-6 p-4 rounded-xl mt-6 ml-[-20px] mr-[-20px] md:ml-[-60px] md:mr-[-60px]">
        <h2 className="text-xl font-bold text-red-600">Our Students Excel in <span className="text-black">Internships & Placements</span></h2>
        
        {/* Student Info Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-2 mt-4">
          {students.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-3 bg-white rounded-lg shadow-lg"
            >
              <img src={student.img} alt={student.name} className="w-24 h-24 rounded-full mx-auto" />
              <h3 className="text-lg font-semibold mt-2">{student.name}</h3>
              <p className="text-gray-800 mt-2">{student.position}</p>
              <p className="bg-gray-900 text-white inline-block px-3 py-1 rounded-lg mt-1">{student.package} </p>
            </motion.div>
          ))}
        </div>
        
        {/* Statistics */}
        <div className="mt-4 bg-yellow-600 text-white p-4 rounded-lg font-bold">
          Over <span className="text-3xl">500+</span> Students Successfully Placed & Internships Provided
        </div>
      </div>
    </div>
  );
}

export default Placement;

