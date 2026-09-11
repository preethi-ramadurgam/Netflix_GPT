import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../Utility/Constants'
const GptSearch = () => {
  return (
    <div>
       <div className='fixed -z-10'>
          <img h-screen object-cover src={BG_URL} alt="Netflix"/>
        </div>
        <div className=''>
          <GptSearchBar/>
          <GptMovieSuggestions/>
        </div>
    </div>

  )
}

export default GptSearch