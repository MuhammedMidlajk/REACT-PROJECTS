import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NewArrival from './pages/NewArrival'
import Features from './pages/Features'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  return (
    <div>


      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/newArrival' element={<NewArrival />} />
          <Route path='/Features' element={<Features />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>


    </div>
  )
}

export default App
