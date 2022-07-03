import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import { MOVIES_URL } from "../../utils/constants";

function MoviesCard({ movie, onSave, onDelete, savedMovies }) {
  const location = useLocation();
  let hours = Math.floor(movie.duration / 60)
  let minutes = Math.floor(movie.duration - hours * 60)
    .toString()
    .padStart(2, "0");

  const isSaved = savedMovies.some((m) => m.movieId === movie.id);

  function handleSaveClick() {
    if (isSaved) {
      onDelete(savedMovies.filter((m) => m.movieId === movie.id)[0]);
    } else {
      onSave(movie);
    }
  }

  function handleDeleteMovie() {
    onDelete(movie);
  }

  return (
    <section className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__text-wrapper">
          <div className="movies-card__text-container">
            <h2 className="movies-card__title"> {movie.nameRU} </h2>
            <p className="movies-card__time"> {`${hours}ч ${minutes}м`} </p>
          </div>
          <div className="movies-card__button-container">
            {location.pathname === "/movies" && (
              <button
                className={`movies-card__like-btn ${isSaved && 'movies-card__like-btn_active'}`}
                type="button"
                onClick={handleSaveClick}
              />
            )}
            {location.pathname === "/saved-movies" && (
              <button
                className="movies-card__like-btn movies-card__delete-btn"
                type="button"
                onClick={handleDeleteMovie}
              />
            )}
          </div>
        </div>
        {location.pathname === "/movies" && (
        <a className="movies-card__trailer-link"
        href={movie.trailerLink}
        target='_blank'
        rel="noreferrer"
        >
          <img
            className="movies-card__img-cover"
            alt={movie.nameRU}
            src={`${MOVIES_URL}${movie.image.url}`}
          />
        </a>
        )}
        {location.pathname === "/saved-movies" && (
        <a className="movies-card__trailer-link"
        href={movie.trailerLink}
        target='_blank'
        rel="noreferrer"
        >
          <img
            className="movies-card__img-cover"
            alt={movie.nameRU}
            src={movie.image}
          />
        </a>
        )}
      </div>
    </section>
  );
}

export default MoviesCard;
