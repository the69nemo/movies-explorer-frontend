import React from "react";
import "./MoviesCard.css";

function MoviesCard({ cardName, imgCover, time, deleteIcon }) {
  return (
    <section className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__text-wrapper">
          <div className="movies-card__text-container">
            <h2 className="movies-card__title"> {cardName} </h2>
            <p className="movies-card__time"> {time} </p>
          </div>
          <div className="movies-card__button-container">
            <button className={deleteIcon ? 'movies-card__like-btn movies-card__delete-btn' : 'movies-card__like-btn'} type="button" />
          </div>
        </div>
        <img
          className="movies-card__img-cover"
          alt="кадр из фильма"
          src={imgCover}
        />
      </div>
    </section>
  );
}

export default MoviesCard;
