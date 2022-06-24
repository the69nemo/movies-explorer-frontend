import React,{useState, useMemo} from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

import {SHORT_DURATION} from '../../utils/constants'

function SaveMovies({
  isLoggedIn,
  isLoading,
  onDelete,
  savedMovies,
  searchKeyword,
}) {
  const [checkBoxActive, setCheckBoxActive] = useState(false);
  const [filter, setFilter] = useState('');

  const filterShortMovies = (filterMovies) =>
    filterMovies.filter((m) => m.duration < SHORT_DURATION);

  function checkBoxClick() {
    setCheckBoxActive(!checkBoxActive);
  }

  const filteredMovies = useMemo(
    () =>
      savedMovies.filter((m) =>
        m.nameRU.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, savedMovies]
  );

  return (
    <div className="saved-movies">
      <Header isLoggedIn={isLoggedIn} />
      <SearchForm
        onSubmit={setFilter}
        checkBoxClick={checkBoxClick}
        searchKeyword={searchKeyword}
      />
      {isLoading && <Preloader />}
      {!isLoading && (
        <MoviesCardList
          hiddenButton
          movies={
            checkBoxActive ? filterShortMovies(filteredMovies) : filteredMovies
          }
          onDelete={onDelete}
          savedMovies={savedMovies}
        />
      )}
      <Footer />
    </div>
  );
}

export default SaveMovies;
