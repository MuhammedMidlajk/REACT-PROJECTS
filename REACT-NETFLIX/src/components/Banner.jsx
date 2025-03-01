33

import React, { useEffect, useState } from 'react';
import axios from '../components/Axios';
import { API_KEY, imageUrl } from "../constants/Dark";

function Banner() {
    const [movies, setMovies] = useState([]); // Holds all fetched movies
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0); // Tracks the current movie index
    
    // Fetch trending movies
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                setMovies(response.data.results); // Save fetched movies to state
            });
    }, []);

    // Change the banner movie every 9 seconds
    useEffect(() => {
        if (movies.length === 0) return; // Wait until movies are loaded
        const interval = setInterval(() => {
            setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length); // Cycle through movies
        }, 7000); // Change every 9 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [movies]);

    const currentMovie = movies[currentMovieIndex]; // Get the current movie based on the index

    return (
        <div className=''>
            <div
                style={{
                    backgroundImage: `url(${currentMovie ? imageUrl + currentMovie.backdrop_path : ""})`,
                }}
                className="bg-cover h-[695px] text-white "
            >
                <div className="pt-[140px] h-[190px] pl-[15px]">
                    <h1 className='text-[3rem] font-[800px] pb-[0.3rem]'>
                        {currentMovie ? currentMovie.title || currentMovie.name : ""}
                    </h1>
                    <div>
                        <button className='text-white outline-none border-none font-[700] rounded-[5px] pl-[2rem] pr-[2rem] pt-[0.5rem] pb-[0.5rem] bg-[#111]/50 cursor-pointer hover:text-black hover:bg-[#e6e6e6] mr-2'>
                            Play
                        </button>
                        <button className='text-white outline-none border-none font-[700] rounded-[5px] pl-[2rem] pr-[2rem] pt-[0.5rem] pb-[0.5rem] bg-[#111]/50 cursor-pointer hover:text-black hover:bg-[#e6e6e6]'>
                            My List
                        </button>
                    </div>
                    <h1 className='w-[45rem] leading-[1.3] pt-[1rem] font-[1rem] h-[80px] max-w-[360px]'>
                        {currentMovie ? currentMovie.overview : ""}
                    </h1>
                </div>
                <div className="h-[31.6rem] bg-gradient-to-b from-transparent via-[rgba(37,37,37,0.61)] to-[#111]"></div>
            </div>
        </div>
    );
}

export default Banner;
