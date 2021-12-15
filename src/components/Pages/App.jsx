import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { AnimatePresence } from 'framer-motion';
let App = () => {
  let location = useLocation();
  return (
    <>
      <div style={{overflow:'hidden'}}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname} >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  )
}
export default App;






