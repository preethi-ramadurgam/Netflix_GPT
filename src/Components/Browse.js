import React from 'react';
import { Header } from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import usePopularFilms from '../Hooks/usePopularFilms';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  usePopularFilms();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

