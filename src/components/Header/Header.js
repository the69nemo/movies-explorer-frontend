import React from "react";
import "./Header.css";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <div className="header__logo-container">
        <a className="header__link" href="/">
          <img className="header__logo" src={Logo} alt="логотип" />
        </a>
      </div>
      {!isLoggedIn ? (
        <div className="header__btn-container">
          <Link to="/signup">
            <button className="header__button" type="button">
              Регистрация
            </button>
          </Link>
          <Link to="/signin">
            <button
              className="header__button header__button_type_signin"
              type="button"
            >
              Войти
            </button>
          </Link>
        </div>
      ) : (
        <div className="header__btn-container header__btn-container_type_login">
          <Link to="/movies">
            <button className="header__button header__button_type_movies" type="button">
              Фильмы
            </button>
          </Link>
          <Link to="/saved-movies">
            <button className="header__button header__button_type_saved-movies" type="button">
              Сохраненные фильмы
            </button>
          </Link>
          <Link to="/profile">
            <button
              className="header__button header__button_type_profile"
              type="button"
            >
              Аккаунт
            </button>
          </Link>
          <button className="header__burger-btn" type="button"></button>
        </div>
      )}
    </header>
  );
}

export default Header;
