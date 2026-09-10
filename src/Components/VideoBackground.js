import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';
export const VideoBackground = ({movieId}) => {
    // const [trailerId,setTrailerId]=useState(null);
    const trailerVideo=useSelector((store)=>store.movies?.trailerVideo);
    useMovieTrailer(movieId);
  return (
    <div>
    {/* This is hardcoded using embed link from youtube. We will change this to dynamic link using the movieId prop and fetch the video link from the API. */}
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/AyIZ9tiiN8I?si=t5X2arA0aF9PuXAc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
        {/* <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + trailerId} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
    </div>

  )
}
