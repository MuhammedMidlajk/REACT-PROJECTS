import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Rowpost from './components/Rowpost'
import {Originals,Actions} from './components/Urls'



function App() {
  return (
    <div className='font-bold bg-[#111]'>
     
      <Navbar/>
      <Banner/>
      <Rowpost  url={Originals} title='NetFlix Originals' height='250'/>
      <Rowpost   url={Actions} title='Actions' height='150'/>
    </div>
  )
}

export default App
