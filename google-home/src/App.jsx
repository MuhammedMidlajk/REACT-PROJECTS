
import Tube from '../src/assets/tube.png'
import apps from '../src/assets/Apps.png'
import search from '../src/assets/search.png'
import voice from '../src/assets/voice.png'
import lence from '../src/assets/lence.png'
function App() {
  
  return (
    <>
      <div className=" bg-[#202124] h-screen overflow-hidden">
        <div className=" h-16 bg-[#202124] flex justify-between items-center w-[100%] font-light " >
          <div className="">
            <li className="list-none text-white gap-5 ml-7 flex   ">
              <a href="">About</a>
              <a href="">Store</a>

            </li>
          </div>
          <div className="l">

            <li className="list-none text-white gap-5 mr-6 flex  ">
              <a href="">Gmail</a>
              <a href="">Images</a>
              <img className="h-5 mt-1 " src={Tube} alt="" />
              <img className="h-7 " src={apps} alt="" />
            </li>
          </div>

        </div>
        <div className="text-white h-1/2 flex justify-center items-center flex-col">
          <h6 className=" text-7xl font-semibold xl: mb-7 md:mb-0  " >Google </h6>

          <div className=" h-[10%] md:h-[13%] w-[80%] lg:w-[42%] bg-[#4d5156] px-2 flex justify-center items-center mt-[3%]  rounded-full">
            <div className="mr-[2%]"><img src={search} alt="" /></div>
            <input className="w-[72vh]  md:h-10  border-none focus:outline-none bg-[#4d5156]" type="text" placeholder="Search Google or type a URL " />
            <div className="ml-[3%] w-[2.3%]"><img src={voice} alt="" /></div>
            <div className="ml-[3%] w-6"><img src={lence} alt="" /></div>
          </div>
          <div className="  mt-8 flex justify-center items-center gap-3">
            <button className='bg-[#303134] px-4 py-1 rounded-sm font-light '>Google Search</button>
            <button className='bg-[#303134] px-4 py-1 rounded-sm font-light' >  I'm Feeling Lucky</button>
          </div>
        </div>
        <div className=" w-[100%] h-[41%] flex items-end justify-center  ">
          <div className='w-full' >
            <div className="bg-[#171717] h-12  w-[100%] flex items-center p-4 text-white border-b-[1px] 	border-gray-600 font-light ">
              India
            </div>
            <div className="bg-[#171717] h-12 w-[100%] flex justify-between lg:justify-between items-center p-4  text-xs ">

              <div className="">
                <li className="list-none text-white gap-2 md:gap-5  md:mr-6 flex font-light ">
                  <a href="">Advertising</a>
                  <a href="">Business</a>
                  <a href="">How Search Work</a>

                </li>
              </div>
              <div className="">
                <li className="list-none text-white gap-2 md:gap-5 md:mr-6  flex font-light ">
                  <a href="">Privacy</a>
                  <a href="">Terms</a>
                  <a href="">Setting</a>

                </li>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
