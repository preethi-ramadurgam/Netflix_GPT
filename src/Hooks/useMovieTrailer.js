import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utility/MovieSlice";
import { API_OPTIONS } from "../Utility/Constants"; 
const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();
    const trailerVideo=useSelector((store)=>store.movies.trailerVideo);
    const getMovieVideos= async ()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS);
        const json=await data.json();
        // console.log("video background",json);
        const filterData=json.results.filter((video)=>video.type==="Trailer");
        // if(filterData.length===0)
        //     return json.results[0];
        const trailer=filterData.length?filterData[0]:json.results[0];
        // console.log("trailer",trailer);
        // setTrailerId(trailer.key);
        dispatch(addTrailerVideo(trailer)); 
    };
    useEffect(()=>{
        !trailerVideo && getMovieVideos();
    },[]);
}
export default useMovieTrailer;