import { useState } from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import { Route, Routes } from "react-router-dom";
import Navs from "./component/Nav";
import { AnimatePresence } from "framer-motion";
import { useLocation } from 'react-router-dom';

import './App.css'

function App() {
  const location = useLocation();


  return (
    <>
   <div className='banner'>
   <Navs/>
    <AnimatePresence mode="wait">
       
          
          
          <Routes location={location}
                key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
        

    </AnimatePresence>
   </div>
     
    
    </>
  )
}

export default App
