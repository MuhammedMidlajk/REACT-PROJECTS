import React from 'react'
import { Link } from 'react-router-dom'

import slider2 from '../assets/Images/slider2.jpg'
import p1 from '../assets/Images/p1.jpg'
import p2 from '../assets/Images/p2.jpg'
import p3 from '../assets/Images/p3.jpg'
import arrivals1 from '../assets/Images/arrivals1.jpg'
import arrivals2 from '../assets/Images/arrivals2.jpg'
import arrivals3 from '../assets/Images/arrivals3.jpg'
import arrivals4 from '../assets/Images/arrivals4.jpg'
import arrivals5 from '../assets/Images/arrivals5.jpg'
import arrivals6 from '../assets/Images/arrivals6.jpg'
import arrivals7 from '../assets/Images/arrivals7.jpg'
import arrivals8 from '../assets/Images/arrivals8.jpg'
import Grid from '../components/Grid'
import stars from '../assets/Images/stars.jpg'
import Grid2 from '../components/Grid2'
import f1 from '../assets/Images/f1.jpg'
import f2 from '../assets/Images/f2.jpg'
import f3 from '../assets/Images/f3.jpg'
import f4 from '../assets/Images/f4.jpg'
import b1 from '../assets/Images/b1.jpg'
import b2 from '../assets/Images/b2.jpg'
import b3 from '../assets/Images/b3.jpg'
import Grid3 from '../components/Grid3'
import c1 from '../assets/Images/c1.jpg'
import c2 from '../assets/Images/c2.jpg'
import c3 from '../assets/Images/c3.jpg'
import c4 from '../assets/Images/c4.jpg'
import c5 from '../assets/Images/c5.jpg'
import Grid4 from '../components/Grid4'
import Nav from '../components/Nav'


function Home() {
  return (

    <div className=" overflow-hidden">
      <div className=" bg-[#F8FAFC] ">
        <Nav/>
        <div className=" flex items-center justify-center  py-28 ">
          <div className=" h-96 w-[50%] flex justify-evenly flex-col ">
            <div className=" flex gap-2 md:flex-col text-[25px] ">
              <p className='text-[#776B5D] '>Great Design Collection</p>
              <p className='text-[45px]'>Mapple Wood Accent Chair</p>
            </div>
            <div className="flex gap-5 flex-col ">
              <p className='text-[19px] text-[#A6AEBF]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor ut <br /> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip.</p>
              <div className='flex items-center gap-3'>
                <div className="w-5 bg-black h-[0.1px]  "></div>$ 299.00 <del className='text-[#A6AEBF]'>$499.00</del>
              </div>
              <div className="l">
                <button className='py-4 px-9 bg-[#EB8317] text-white '>Add to cart</button> <button className='py-[14px] px-10 ease-in-out delay-200 hover:bg-transparent text-[#EB8317] hover:border-2 hover:border-[#EB8317]'>More Info</button>

              </div>

            </div>
          </div>
          <div className="">
            <img className='w-96' src={slider2} alt="" />
          </div>
        </div>

      </div>
      <div className="flex  items-center justify-center ">
        <div className="py-24 w-[78%] flex justify-evenly ">
          <div className=" w-72 bg-[#F8FAFC] flex items-center flex-col justify-evenly">
            <div className="">
              <img src={p1} alt="" />
            </div>
            <div className="">
              <p className='hover:text-[#EB8317]'>Arm Chair</p>
            </div>
            <div className="">
              <p className='text-center text-[#A6AEBF]'>Nemo enim ipsam voluptatem quia <br />volu ptas sit asperna aut odit aut</p>
            </div>

          </div>
          <div className=" w-[45%] bg-[#F8FAFC] flex  justify-around ">
            <div className="flex items-center">
              <img className='' src={p2} alt="" />
            </div>
            <div className=" flex flex-col justify-evenly ">
              <div className="">
                <p className='hover:text-[#EB8317]'>Latest Designed Stool And Chair</p>
              </div>
              <div className="text-[#A6AEBF]">
                <p className=''>Edi ut perspiciatis unde omnis iste natusina <br /> error sit voluptatem accusantium doloret mque <br /> laudantium, totam rem aperiam.</p>
              </div>
              <div className="l">
                <p >Sales Start from <span className='text-[#EB8317]'>$99.00</span></p>
              </div>
              <div className="">
                <button className='py-2 px-4 bg-[#EB8317] border-2 border-black  bg-transparent hover:bg-black hover:text-white' >Discover mode</button>
              </div>
            </div>

          </div>
          <div className="py-9 px-5 bg-[#F8FAFC] flex items-center flex-col justify-evenly">
            <div className="">
              <img className='' src={p3} alt="" />
            </div>
            <div className="">
              <p className='hover:text-[#EB8317]'>hanging lamp</p>
            </div>
            <div className="l">
              <p className='text-center text-[#A6AEBF]'>Nemo enim ipsam voluptatem quia <br /> volu ptas sit asperna aut odit aut fugit.</p>
            </div>
          </div>

        </div>
      </div>
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


      <div className="relative bg-[url('src/assets/Images/sofa-collection-banner.jpg')] bg-cover bg-center mt-24 flex">
        {/* Black Shadow Overlay (3/4) */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-[#373e40] bg-opacity-90"></div>

        <div className="relative py-48 px-48 text-white">
          <div className="flex flex-col">
            <h1 className="text-[35px] font-bold">Unlimited Sofa Collection</h1>
            <p className="text-[17px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br />
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br />
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
              starting from <span className='text-[#EB8317]'>$199</span>
            </p>
            <button className="h-10 w-36 bg-[#EB8317] mt-6">View more</button>
          </div>
        </div>
      </div>
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
      <div className="flex items-center flex-col py-10 ">
        <div className="text-[35px] font-bold text-[#776B5D]">
          <p>latest blog</p>
        </div>
        <div className="flex py-20 gap-5">
          <Grid3 image={b1} itemName="Why Brands are Looking at Local Language" itemPrice="By Robert Norby / 18th March 2018" itemTag="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt...." />
          <Grid3 image={b2} itemName="Why Brands are Looking at Local Language" itemPrice="By Robert Norby / 18th March 2018" itemTag="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt...." />
          <Grid3 image={b3} itemName="Why Brands are Looking at Local Language" itemPrice="By Robert Norby / 18th March 2018" itemTag="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt...." />
        </div>


      </div>
      <div className=" bg-[#F8FAFC] flex  justify-center items-center">
        <div className=" h-56 w-[75%]  flex items-center justify-around">
          <div className="">
            <img src={c2} alt="" />
          </div>
          <div className="">
            <img src={c3} alt="" />
          </div>
          <div className="">
            <img src={c4} alt="" />
          </div>
          <div className="">
            <img src={c5} alt="" />
          </div>
          <div className="">
            <img src={c1} alt="" />
          </div>
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

export default Home
