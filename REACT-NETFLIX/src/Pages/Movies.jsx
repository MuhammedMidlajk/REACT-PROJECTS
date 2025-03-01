import React from 'react'
import Navbar from '../components/Navbar'
import Rowpost from '../components/Rowpost'
import { Actions, Adventure, Crime, Drama, Family, Horror, Originals, Romance, Thriller, War } from '../components/Urls'
import Footer from '../components/Footer'

function Movies() {
  return (
    <div className=' bg-black mt-16 py-8 font-bold w-[150vw] md:w-full'>
       <Navbar />
       <Rowpost url={Originals} title='Netflix Originals' height='250' />
       <Rowpost url={Actions} title='Actions' height='150' />
      <Rowpost url={Adventure} title='Adventure' height='150' />
      <Rowpost url={Crime} title='Crime' height='150' />
      <Rowpost url={Horror} title='Horror' height='150' />
      <Rowpost url={Thriller} title='Thriller' height='150' />
      <Rowpost url={War} title='War' height='150' />
      <Rowpost url={Romance} title='Romance' height='150' />
      <Rowpost url={Drama} title='Drama' height='150' />
      <Rowpost url={Family} title='Family' height='150' />
      <Footer/>
      
    </div>
  )
}

export default Movies
