import React from 'react'
import Nav from '../components/Nav'
import f1 from '../assets/Images/f1.jpg'
import f2 from '../assets/Images/f2.jpg'
import f3 from '../assets/Images/f3.jpg'
import f4 from '../assets/Images/f4.jpg'
import stars from '../assets/Images/stars.jpg'
import Grid2 from '../components/Grid2'
import Grid4 from '../components/Grid4'

function Features() {
  return (
    <div>
     <Nav/>

     <div className=" flex items-center flex-col justify-evenly">
        <div className="text-[35px] font-bold text-[#776B5D] py-16">
          <p>Featured products</p>
        </div>
        <div className="flex gap-5 py-4 ">
          <Grid2 img1={f1} img2={stars} itemName="designed sofa" itemPrice="$160.00" />
          <Grid2 img1={f2} img2={stars} itemName="designed sofa" itemPrice="$160.00" />
          <Grid2 img1={f3} img2={stars} itemName="designed sofa" itemPrice="$160.00" />
          <Grid2 img1={f4} img2={stars} itemName="designed sofa" itemPrice="$160.00" />
        </div>
      </div>

      <div className=" py-16 flex flex-col justify-center items-center ">
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

export default Features
