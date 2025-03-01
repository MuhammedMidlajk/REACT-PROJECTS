import React from 'react'
import Nav from '../components/Nav'
import Grid4 from '../components/Grid4'

function Contact() {
  return (
    <div>
        <Nav/>

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

export default Contact
