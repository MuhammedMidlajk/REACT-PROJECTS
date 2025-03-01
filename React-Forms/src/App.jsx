import React from 'react'
import Home from './assets/pages/home'
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import Result from './assets/pages/result'


function App() {
  return (
    <div>
       <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
