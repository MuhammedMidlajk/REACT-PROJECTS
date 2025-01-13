import React from 'react'
import Nav from '../components/Nav'
import Grid3 from '../components/Grid3'
import b1 from '../assets/Images/b1.jpg'
import b2 from '../assets/Images/b2.jpg'
import b3 from '../assets/Images/b3.jpg'
import Grid4 from '../components/Grid4'

function Blog() {
  return (
    <div >
        <Nav/>

        <div className="text-[35px] font-bold text-[#776B5D] flex items-center justify-center">
          <p>latest blog</p>
        </div>
        <div className="flex justify-center py-20 gap-5">
          <Grid3 image={b1} itemName="Why Brands are Looking at Local Language" itemPrice="By Robert Norby / 18th March 2018" itemTag="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt...." />
          <Grid3 image={b2} itemName="Why Brands are Looking at Local Language" itemPrice="By Robert Norby / 18th March 2018" itemTag="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt...." />
          <Grid3 image={b3} itemName="Why Brands are Looking at Local Language" itemPrice="By Robert Norby / 18th March 2018" itemTag="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt...." />
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

export default Blog
