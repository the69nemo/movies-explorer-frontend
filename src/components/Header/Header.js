import React from "react";
import "./Header.css";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <div className="header__container">
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
          <Navigation />
        )}
      </div>
    </header>
  );
}

export default Header;
