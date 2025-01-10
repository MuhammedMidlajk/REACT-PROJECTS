import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Whatwedo from './pages/Whatwedo'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import About from './pages/about'
import Home from './pages/Home'

function App() {
  return (

    <div className='text-black'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/whatwedo' element={<Whatwedo />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>




  )
}

export default App
