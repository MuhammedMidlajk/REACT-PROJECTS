import React from 'react'
import Nav from '../components/Nav'
import Grid from '../components/Grid'
import arrivals1 from '../assets/Images/arrivals1.jpg'
import arrivals2 from '../assets/Images/arrivals2.jpg'
import arrivals3 from '../assets/Images/arrivals3.jpg'
import arrivals4 from '../assets/Images/arrivals4.jpg'
import arrivals5 from '../assets/Images/arrivals5.jpg'
import arrivals6 from '../assets/Images/arrivals6.jpg'
import arrivals7 from '../assets/Images/arrivals7.jpg'
import arrivals8 from '../assets/Images/arrivals8.jpg'
import Grid4 from '../components/Grid4'

function NewArrival() {
  return (
    <div>
      
      <Nav/>
      <div className=" flex justify-center flex-col items-center">
        <div className="py-10">
          <p className='font-bold text-3xl text-[#776B5D]'>New Arrival</p>

        </div>
        <div className='grid grid-cols-4 gap-8 py-10'>
          <Grid productName="Wooden chair" productPrice=" $65.00" img={arrivals1} />
          <Grid productName="Single armchair" productPrice="$80.00" img={arrivals2} />
          <Grid productName="Wooden armchair" productPrice="$40.00" img={arrivals3} />
          <Grid productName="stylish chair" productPrice="$100.00" img={arrivals4} />
          <Grid productName="modern chair" productPrice="$120.00" img={arrivals5} />
          <Grid productName="mapple wood dinning table" productPrice="$140.00" img={arrivals6} />
          <Grid productName="Arm chair" productPrice="$90.00" img={arrivals7} />
          <Grid productName="Wooden Bed" productPrice="$140.00" img={arrivals8} />
        </div>

      </div>
      
      
      <div className=" py-16 flex flex-col justify-center items-center">
        <div className="flex gap-7 ">

          <Grid4 footerName={"Information"} one={"About us"} two={"Contact us"} three={"News"} four={"Store"} />
          <Grid4 footerName={"Collections"} one={"Wooden Chair"} two={"Royal Cloth Sofa"} three={"Accent Chair"} four={"Bed"} five={"Hanging Lamp"} />
          <Grid4 footerName={"My Account"} one={"My Account"} two={"Wishlist"} three={"Community"} four={"Older History"} five={"My Cart"} />
          <Grid4 footerName={"Newsletter"} one={"Subscribe to get latest news,update and information."} showDiv={true} />

        </div>
        <div className=" flex flex-col justify-center items-center ">
          <div className=' w-[50rem] bg-[#776B5D] h-[1px] text-[#A6AEBF] '></div>
          <p className=' text-center md:text-start pt-7 text-[#A6AEBF] '>©copyright. designed and developed by themesine</p>
        </div>
      </div>

      

    </div>
  )
}

export default NewArrival
