


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = (e) => {
//     e.preventDefault(); // Prevents redirection when clicking the dropdown
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleLinkClick = () => {
//     // Close the side drawer and dropdown when a link is clicked
//     setIsOpen(false);
//     setIsMenuOpen(false);
//   };

//   return (
//     <div className="bg-white bg-opacity-50 shadow-md fixed top-0 left-0 w-full z-50">
//       {/* Desktop Navbar */}
//       <div className="hidden lg:flex justify-between items-center p-4">
//         <div className="flex items-center space-x-2">
//           <img src="/ka logo.png" alt="Logo" className="w-16 h-16" />
//           <span className="text-2xl font-bold text-blue-900">Karishna Academy</span>
//         </div>

//         <div className="space-x-12 mr-[80px]">
//           <Link to="/" style={{ color: 'rgb(13, 42, 71)' }} className="font-bold hover:text-green-500">
//             Home
//           </Link>
//           <Link to="/about" style={{ color: 'rgb(13, 42, 71)' }} className="font-bold hover:text-green-500">About</Link>
//           <div className="relative inline-block text-left">
//             <button onClick={toggleMenu} style={{ color: 'rgb(13, 42, 71)' }} className="inline-flex font-bold justify-center w-full px-4 py-2 bg-transparent text-sm focus:outline-none">
//               Menu
//               <svg className="w-4 h-4 ml-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//             {isMenuOpen && (
//               <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white">
//                 <div className="py-1">
//                   <Link to="/menu/chicken" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Chicken</Link>
//                   <Link to="/menu/mutton" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Mutton</Link>
//                   <Link to="/menu/veg" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Veg</Link>
//                 </div>
//               </div>
//             )}
//           </div>
//           <Link to="/services" style={{ color: 'rgb(13, 42, 71)' }} className="font-bold hover:text-green-500">Services</Link>
//           <Link to="/contact" style={{ color: 'rgb(13, 42, 71)' }} className="font-bold hover:text-green-500">Contact</Link>
//         </div>
//       </div>

//       {/* Mobile Navbar */}
//       <div className="flex lg:hidden justify-between items-center p-4 w-full">
//         <div className="flex items-center space-x-2">
//           <img src="/ka logo.png" alt="Logo" className="w-16 h-16" />
//           <span className="text-xl font-bold text-blue-900">Karishna Academy</span>
//         </div>
//         <button onClick={() => setIsOpen(true)} className="text-gray-600">
//           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//           </svg>
//         </button>

//         {/* Side Drawer */}
//         {isOpen && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-20" onClick={() => setIsOpen(false)}>
//             <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-30" onClick={(e) => e.stopPropagation()}>
//               <div className="flex justify-between items-center p-4">
//                 <div className="text-2xl font-bold">Menu</div>
//                 <button onClick={() => setIsOpen(false)} className="text-gray-600">
//                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>
//               <div className="flex flex-col p-4 space-y-2">
//                 <Link to="/" className="text-gray-700 hover:text-blue-500" onClick={handleLinkClick}>Home</Link>
//                 <Link to="/about" className="text-gray-700 hover:text-blue-500" onClick={handleLinkClick}>About</Link>
//                 <Link to="/services" className="text-gray-700 hover:text-blue-500" onClick={handleLinkClick}>Services</Link>
//                 <div className="relative">
//                   <button onClick={toggleMenu} className="text-gray-700 flex items-center border-0 bg-transparent" type="button">
//                     Menu
//                     <svg className="w-4 h-4 ml-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>
//                   {isMenuOpen && (
//                     <div className="absolute left-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white">
//                       <div className="py-1">
//                         <Link to="/menu/chicken" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Chicken</Link>
//                         <Link to="/menu/mutton" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Mutton</Link>
//                         <Link to="/menu/veg" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Veg</Link>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 <Link to="/contact" className="text-gray-700 hover:text-blue-500" onClick={handleLinkClick}>Contact</Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault(); // Prevents redirection when clicking the dropdown
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    // Close the side drawer and dropdown when a link is clicked
    setIsOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white bg-opacity-50 shadow-md fixed top-0 left-0 w-full z-50">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <img src="/ka logo.png" alt="Logo" className="w-16 h-16" />
          <span className="text-2xl font-bold text-blue-900">Karishna Academy</span>
        </div>

        <div className="space-x-12 mr-[80px]">
          <Link to="/" className="font-bold text-blue-900 hover:text-green-500">Home</Link>
          <Link to="/about" className="font-bold text-blue-900 hover:text-green-500">About</Link>
          <div className="relative inline-block text-left">
            <button onClick={toggleMenu} className="inline-flex font-bold justify-center w-full px-4 py-2 bg-transparent text-sm focus:outline-none">
              Menu
              <svg className="w-4 h-4 ml-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white">
                <div className="py-1">
                  <Link to="/menu/chicken" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Chicken</Link>
                  <Link to="/menu/mutton" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Mutton</Link>
                  <Link to="/menu/veg" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Veg</Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/services" className="font-bold text-blue-900 hover:text-green-500">Services</Link>
          <Link to="/contact" className="font-bold text-blue-900 hover:text-green-500">Contact</Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex lg:hidden justify-between items-center p-4 w-full">
        <div className="flex items-center space-x-2">
          <img src="/ka logo.png" alt="Logo" className="w-16 h-16" />
          <span className="text-xl font-bold text-blue-900">Karishna Academy</span>
        </div>
        <button onClick={() => setIsOpen(true)} className="text-gray-600">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Side Drawer */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-30 z-20" onClick={() => setIsOpen(false)}>
            <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-30" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center p-4">
                <div className="text-2xl font-bold">Menu</div>
                <button onClick={() => setIsOpen(false)} className="text-gray-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col p-4 space-y-2">
                <Link to="/" className="text-gray-700 hover:text-blue-500" onClick={handleLinkClick}>Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-500" onClick={handleLinkClick}>About</Link>
                <Link to="/services" className="text-gray-700 hover:text-blue-500" onClick={handleLinkClick}>Services</Link>
                <div className="relative">
                  <button onClick={toggleMenu} className="text-gray-700 flex items-center border-0 bg-transparent" type="button">
                    Menu
                    <svg className="w-4 h-4 ml-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isMenuOpen && (
                    <div className="absolute left-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white">
                      <div className="py-1">
                        <Link to="/menu/chicken" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Chicken</Link>
                        <Link to="/menu/mutton" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Mutton</Link>
                        <Link to="/menu/veg" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Veg</Link>
                      </div>
                    </div>
                  )}
                </div>
                <Link to="/contact" className="text-gray-700 hover:text-blue-500" onClick={handleLinkClick}>Contact</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
