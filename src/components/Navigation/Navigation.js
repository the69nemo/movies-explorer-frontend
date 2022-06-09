import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div className="navigation__btn-container navigation__btn-container_type_login">
        <Link to="/movies">
          <button
            className="navigation__button navigation__button_type_movies"
            type="button"
          >
            Фильмы
          </button>
        </Link>
        <Link to="/saved-movies">
          <button
            className="navigation__button navigation__button_type_saved-movies"
            type="button"
          >
            Сохраненные фильмы
          </button>
        </Link>
        <Link to="/profile">
          <button
            className="navigation__button navigation__button_type_profile"
            type="button"
          >
            Аккаунт
          </button>
        </Link>
        <button className="navigation__burger-btn" type="button"></button>
      </div>
    </>
  );
}

export default Navigation;
