import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { fetchDataByGenre } from '../store';
import { API_KEY, TMBD_BASE_URL } from "../utils/constant";
function Banner() {
    const [movie, setMovie]=useState([]);
useEffect(()=>{
    async function fetchMovies(){
    const request= await axios.get(fetchMovies)
    setMovie(
      request.data.results[Math.floor(Math.random)*request.data.results.length-1]

    )  
    return request;
    }
   fetchMovies();
},[])
  return (
    <header className='banner'
    style={{
      backgroundSize: "cover",
      backgroundImage: `${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}`,
      backgroundPosition:"center center",
    }}
    >
      <div className='banner__contents'>
        <h1>{
          movie?.title|| movie?.name ||movie?.original_name
          }
          </h1>
      
      </div>

    </header>
  )
}


export default Banner