import React from 'react'
import lang from '../Utility/LanguageConstants'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import OpenAi from '../Utility/OpenAi.js'
import { API_OPTIONS } from '../Utility/Constants.js'
import { useDispatch } from 'react-redux'
import addGptMovieResult from '../Utility/GptSlice.js'
const GptSearchBar = () => {
  const langKey=useSelector(store=>store.config.lang)
  const searchText=useRef(null);
  const dispatch=useDispatch();
  const searchMovieTMDB=async(movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick= async ()=>{
    console.log(searchText.current.value);
     const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText.current.value; 
    const gptResults=await OpenAi.chat.completions.create({
      model: 'gpt-5.5',
      messages: [
        { role: 'user', content: gptQuery },
      ],
    });
    console.log(gptResults.choices?.[0]?.message?.content);
    // This contains movie list seperated by commas now we want them to store in an array  
    const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");
    //For each movie I will call TMDB API of that movie 
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  }
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2  bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()} >
            <input ref={searchText} type="text" className='p-4 m-4 col-span-9 ' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='py-2 px-4 m-4 bg-red-700 col-span-3 text-white rounded-lg' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar