import React from 'react'
import ReactDom from 'react-dom'
import Header from './components/Pages/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
let App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}
ReactDom.render(<App />, document.getElementById('root'));





if (module.hot) {
  module.hot.accept();
}

