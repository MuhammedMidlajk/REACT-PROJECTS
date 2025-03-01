import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './Pages/Movies';
import Home from './Pages/Home';
import Signup from './Pages/Signup';

function App() {
  return (
    <div> 
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Movies" element={<Movies/>} />
          <Route path="/Signup" element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
