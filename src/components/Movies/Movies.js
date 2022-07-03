import React, { useState, useEffect } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { moviesApi } from "../../utils/MoviesApi";
import { SHORT_DURATION } from "../../utils/constants";

function Movies({
  isLoggedIn,
  isLoading,
  movies,
  savedMovies,
  onSubmit,
  onSave,
  onDelete,
  searchKeyword,
  setAllMovies
}) {
  const [checkBoxActive, setCheckBoxActive] = useState(false);
  const [isShort, setIsShort] = useState(false);

  const checkBoxClick = () => {
    setCheckBoxActive(!checkBoxActive)
    localStorage.setItem('checkBox', !checkBoxActive)
  }

  useEffect(() => {
    const checkBoxLocal = localStorage.getItem('checkBox')
    if (checkBoxLocal === 'true') {
      setIsShort(isShort)
      setCheckBoxActive(true)
    }
  }, [])

  useEffect (() => {
    if (!localStorage.loadedMovies) {
      moviesApi
          .getAllMovies()
          .then((data) => {
            setAllMovies(data);
            localStorage.setItem("loadedMovies", JSON.stringify(data));
          })
          .catch((err) => console.log(err));
    }
  }, [])

  const filterShortMovies = (filterMovies) =>
    filterMovies.filter((m) => m.duration < SHORT_DURATION)

  return (
    <div className="movies">
      <Header isLoggedIn={isLoggedIn} />
      <SearchForm
        onSubmit={onSubmit}
        checkBoxClick={checkBoxClick}
        searchKeyword={searchKeyword}
        isShort={checkBoxActive}
      />
      {isLoading && <Preloader />}
      {!isLoading && (
        <MoviesCardList
          movies={checkBoxActive ? filterShortMovies(movies) : movies}
          onSave={onSave}
          onDelete={onDelete}
          savedMovies={savedMovies}
          checkBox={checkBoxClick}
          searchKeyword={searchKeyword}
        />
      )}
      <Footer />
    </div>
  );
}

export default Movies;
