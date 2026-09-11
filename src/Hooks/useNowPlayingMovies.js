import { API_OPTIONS } from '../Utility/Constants';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { addNowPlayingMovies } from '../Utility/MovieSlice';
import { useSelector } from 'react-redux';
const useNowPlayingMovies = () => {
    // The use of this custom hook is to fetch the now playing movies from the API and store it in the redux store.
    const dispatch =useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
    // console.log("j",nowPlayingMovies);
    const getNowPlayingMovies= async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?", API_OPTIONS);
        const jsonData = await data.json();
        // console.log("*",jsonData.results);
        dispatch(addNowPlayingMovies(jsonData.results));
    }
    useEffect(()=>{
        getNowPlayingMovies();
    },[]);
}
export default useNowPlayingMovies;