import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../Utility/Constants'
const GptSearch = () => {
  return (
    <div>
       <div className='fixed -z-10'>
          <img src={BG_URL} alt="Netflix"/>
        </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>

  )
}

export default GptSearch