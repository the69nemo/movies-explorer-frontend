import React, { useCallback, useState, useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { MOBILE_WIDTH } from "../../utils/constants";

function MoviesCardList({
  hiddenButton,
  movies,
  onSave,
  onDelete,
  savedMovies,
  notFoundMessage
}) {
  const [currentCards, setCurrentCards] = useState(0);
  const [addCards, setAddCards] = useState(7);
  const [moviesToShow, setMoviesToShow] = useState([]);

  const getCards = (windowSize) => {
    if (windowSize > MOBILE_WIDTH) {
      return { first: 7, extra: 7 };
    }
    return { first: 5, extra: 1 };
  };

  const renderAddCards = useCallback(() => {
    const count = Math.min(movies.length, currentCards + addCards);
    const moreCards = movies.slice(currentCards, count);
    setMoviesToShow([...moviesToShow, ...moreCards]);
    setCurrentCards(count);
  }, [currentCards, addCards, movies, moviesToShow]);

  const resize = useCallback(() => {
    const windowSize = window.innerWidth;
    setAddCards(getCards(windowSize));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resize]);

  useEffect(() => {
    const windowSize = window.innerWidth;
    setAddCards(getCards(windowSize).extra);
    const count = Math.min(movies.length, getCards(windowSize).first);
    setMoviesToShow(movies.slice(0, count));
    setCurrentCards(count);
  }, [movies]);

  const renderMovies = useCallback(() => {
    renderAddCards();
  }, [renderAddCards]);

  return (
    <section className="movies-list">
      <div className="movies-list__container">
        {movies.length ? (
          moviesToShow.map((movie) => (
            <MoviesCard
              movie={movie}
              onSave={onSave}
              onDelete={onDelete}
              savedMovies={savedMovies}
              key={movie._id}
            />
          ))
        ) : (
          <h2 className="movies-list__not-found-text">{notFoundMessage}</h2>
        )}
      </div>
      <button
        type="button"
        onClick={renderMovies}
        className={
          !hiddenButton ? "movies-list__button" : "movies-list__button_hidden"
        }
      >
        Еще
      </button>
    </section>
  );
}

export default MoviesCardList;
