import React from 'react'
import CardSlider from './CardSlider'

export default function Slider({movies}) {
  const getMoviesFromRange=(from, to)=>{
    return movies.slice(from,to)
  }
    return (

    <div>
        <CardSlider title="Trending Now" data={getMoviesFromRange(0,20)}/>
        <CardSlider title="New Release" data={getMoviesFromRange(20,40)}/>
        <CardSlider title="Block-Buster Movies" data={getMoviesFromRange(40,60)}/>
        <CardSlider title="Popular On Netflix" data={getMoviesFromRange(60,80)}/>
        <CardSlider title="Action Movies" data={getMoviesFromRange(80,100)}/>
        <CardSlider title="Epics" data={getMoviesFromRange(120,140)}/>
        <CardSlider title="Most Watched" data={getMoviesFromRange(140,160)}/>
        <CardSlider title="Thriller Movies" data={getMoviesFromRange(160,180)}/>
        
    </div>
  )
}
