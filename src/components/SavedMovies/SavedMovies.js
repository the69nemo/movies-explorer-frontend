import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SaveMovies() {
  return (
    <div className='saved-movies'>
      <SearchForm />
      <MoviesCardList
        hiddenButton
        deleteIcon
      />
    </div>
   );
}

export default SaveMovies;