import './App.css'
import search from '../src/images/search.png'
import arrow from '../src/images/arrow.png'
import mark from '../src/images/mark.png'
import quote from '../src/images/quote.png'
function App() {


  return (
    <>
      <div className="h-screen bg-[#F5F5F5]   ">
        <div className="h-[5rem] hidden lg:flex  items-center justify-evenly  ">
          <div className="py-3 px-16 bg-white rounded-[5px] font-light 	">Logotype</div>
          <div className="py-3 px-8 bg-white rounded-[5px] font-light ">
            <li className="list-none gap-10 flex  ">
              <a href=""><button className="h-6 w-14 rounded-[5px] bg-[#f5f5f5]">Menu</button></a>
              <a href="">Home</a>
              <a href="">Catloge</a>
              <a href="">Resorces</a>
            </li>
          </div>
          <div className="h-[60%] w-[30%] bg-white  rounded-[5px] flex items-center justify-around">
            <button className="h-6 w-36 bg-[#f5f5f5]   rounded-[5px] font-light" >Companies </button>
            <input className="focus:outline-none bg-white  border-none" type="text" placeholder="Search..." />
            <img className="w-4 " src={search} alt="" />
          </div>
          <div className="py-3 px-16 bg-white  rounded-[5px] font-light ">
            <select name="cars" id="cars">
              <option value="volvo">Eng</option>
              <option value="saab">Hin</option>
              <option value="opel">Mal</option>
            </select>
          </div>
          <div className="py-3 px-16 bg-white  rounded-[5px] font-light ">
            SIGN UP
          </div>
        </div>
        <div className="h-[80vh]  flex flex-col md:flex-row justify-evenly  ">
          <div className=" md:w-[64%] h-[96%]  rounded-[5px] bg-white ">
            <button className="w-64 h-6 bg-[#f5f5f5] rounded-full ml-9 mt-[5%] font-light border-1">
              TOP No1 catlog auto resellers
            </button>
            <p className="text-[50px] ml-7 leading-[60px] mt-9">
              Search the right auto <br />
              transport <span><img className="w-20 inline-block" src={arrow} alt="" /></span> <span className="text-[#6482AD]">delivery</span> <br />
              company with confidence
            </p>

            <p className="mt-7 ml-7 leading-5">
              Communication was  great and the service was super efficiant. They extra miles to <br /> ensure my vehicle was not scratched throughoutthe process Highly recommended.
            </p>
            <div className="flex justify-evenly  mt-5 font-light mr-[28%] gap-3 ml-1 md:gap-0">
              <button className="py-3 px-10 bg-[#f5f5f5] rounded-[5px]">
                <span><img className="inline-block w-4   " src={mark} alt="" /></span> From (zip or city,State)
              </button>
              <button className="py-3 px-8 bg-[#f5f5f5] rounded-[5px]">
                <span><img className="inline-block w-4   " src={mark} alt="" /></span> To (Zip or City,State)
              </button>
              <button className="py-3 px-8 bg-[#6482AD] text-white rounded-[5px]">
                GET STARTED <span ><img className="inline-block w-4 ml-2" src={arrow} alt="" /></span>
              </button>
            </div>
            <div className=" w-[80%] h-6 bg-[#f5f5f5] ml-4 mt-12 rounded-full flex justify-between  ">
              <div className="pl-4">
                Lorem ipsum
              </div>
              <div className="pr-4">
                Sit amet
              </div>
            </div>

          </div>
          <div className=" lg:w-[33%] h-[96%]  rounded-[10px] bg-cover  bg-[url('src/images/porsche.jpg')] flex justify-between flex-col  ">

            <div className="">
              <img className=" ml-8 mt-6 " src={quote} alt="" />

            </div>
            <div className="text-white ml-6 mb-4 text-[27px]">
              <p className="ml-20">Search the right auto </p>
              <p>transport delivery company <br /> with confindence</p>
            </div>

          </div>
        </div>
        <div className=" w-full h-10 mt-80 md:mt-0 flex flex-col md:justify-between   lg:flex-row ">
          <div className=" ml-4  ">
            <button className="py-3  px-1 md:px-10 text-xs bg-white rounded-[5px]  ">
              POPULAR
            </button>
            <button className="py-3 px-1 md:px-10 text-xs bg-white rounded-[5px] ml-3 ">
              TRENDING
            </button>
            <button className="py-3 px-1 md:px-10  text-xs bg-white rounded-[5px] ml-3 ">
              MOST REVIEWED
            </button>
            <button className="py-3 px-1 md:px-10 text-xs bg-white rounded-[5px] ml-3">
              VERIFIED
            </button>
          </div>
          <div className="">
            <input className="focus:outline-none bg-white  border-none h-10 mr-5 pl-3 rounded-[5px]  " type="text" placeholder="Search..." />
          </div>
        </div>




      </div>
    </>
  )
}

export default App
