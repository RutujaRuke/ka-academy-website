import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Componenets/Navbar/Navbar';
import Home from './Componenets/Home/Home';
import About from './Componenets/About/About';
import Placement from './Componenets/Placement/Placement';
import Footer from './Componenets/Footer/Footer';

function App() {

  return (
    <>
      <Router>
        <div>
          <Navbar/>
          {/* <div className='pt-[95px]'> */}
          <div className=''>

            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/placement' element={<Placement/>} />
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    </>
  )
}

export default App
