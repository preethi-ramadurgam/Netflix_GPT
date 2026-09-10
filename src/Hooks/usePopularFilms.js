import { API_OPTIONS } from '../Utility/Constants';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { addPopularMovies } from '../Utility/MovieSlice';
import { useSelector } from 'react-redux';
const usePopularFilms=()=>{
    // The use of this custom hook is to fetch the popular movies from the API and store it in the redux store.
    const dispatch =useDispatch();
    const popularMovies = useSelector((store) => store.movies.popularMovies);
    console.log("popular ",popularMovies);
    const getPopularMovies= async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
        const jsonData = await data.json();
        console.log("pop",jsonData.results);
        dispatch(addPopularMovies(jsonData.results));
    }
    useEffect(()=>{
        !popularMovies && getPopularMovies();
    },[]);
}
export default usePopularFilms;