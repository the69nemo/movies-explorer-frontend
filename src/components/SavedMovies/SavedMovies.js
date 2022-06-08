import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SaveMovies({ isLoggedIn }) {
  return (
    <div className="saved-movies">
      <Header isLoggedIn={isLoggedIn} />
      <SearchForm />
      <MoviesCardList hiddenButton deleteIcon />
      <Footer />
    </div>
  );
}

export default SaveMovies;
