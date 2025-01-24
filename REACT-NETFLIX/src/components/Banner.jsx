import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from '../components/Axios'
import { API_KEY,imageUrl } from "../constants/Dark";



function Banner() {

    const [movie, setMovie] = useState()
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
            console.log(Response.data.results[0]);
              setMovie (Response.data.results[0])  
        })
    }, [])
    
    return (
        <div className=''>

            <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className=" bg-cover h-[450px] text-white  ">
                <div className=" pt-[140px] h-[190px] pl-[15px] ">

                    <h1 className=' text-[3rem] font-[800px] pb-[0.3rem] '> {movie ? movie.title :""} </h1>
                    <div className=" ">
                        <button className=' text-white outline-none border-none font-[700] rounded-[5px] pl-[2rem] pr-[2rem] pt-[0.5rem] pb-[0.5rem] bg-[#111]/50 cursor-pointer hover:text-black hover:bg-[#e6e6e6] mr-2' >play</button>
                        <button className=' text-white outline-none border-none font-[700] rounded-[5px] pl-[2rem] pr-[2rem] pt-[0.5rem] pb-[0.5rem] bg-[#111]/50 cursor-pointer hover:text-black hover:bg-[#e6e6e6]' >my list</button>
                    </div>
                    <h1 className='w-[45rem] leading-[1.3] pt-[1rem] font-[1rem] h-[80px] max-w-[360px] '>{movie ? movie.overview : ""}</h1>

                </div>
                <div className="h-[17rem] bg-gradient-to-b from-transparent via-[rgba(37,37,37,0.61)] to-[#111]"></div>
            </div>

        </div>
    )
}

export default Banner;
