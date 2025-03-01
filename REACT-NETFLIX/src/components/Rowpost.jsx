import React, { useEffect, useState } from 'react'
import axios from '../components/Axios'
import { imageUrl, API_KEY } from '../constants/Dark'
import YouTube from 'react-youtube'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


function Rowpost(props) {
    const [movie, setMovie] = useState([])
    const [urlid, setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then(Response => {
            console.log(Response.data);
            setMovie(Response.data.results)

        }).catch(err => {
            alert('network error')
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handlemovie = (id) => {
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])

            } else {
                console.log('Array empty');

            }

        })

    };

    const removeMovie = () => {
        setUrlId('');
    };

    return (
        <div className='ml-[20px] text-[white]'>
            <h1>{props.title}</h1>
            <div className="flex p-[20px] overflow-x-scroll overflow-y-hidden scrollbar-hidden hi  ">
                {movie.map((obj) =>

                    <img onClick={() => handlemovie(obj.id)} className={`max-h-[${props.height}px] cursor-pointer hover:transform hover:scale-[1.1]  mr-[10px]`} src={`${imageUrl + obj.backdrop_path}`} alt="" />
                )}


            </div>

            {urlid && (<div className="py-10 relative">
                <YouTube opts={opts} videoId={urlid.key} />
                <button onClick={removeMovie} className='absolute right-1 top-1 mr-4'>
                    <FontAwesomeIcon icon={faTimes} />
                </button>

            </div>

            )}


        </div>
    )
}

export default Rowpost
