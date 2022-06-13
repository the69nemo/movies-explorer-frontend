import React from "react";
import { NavLink } from "react-router-dom";
import "./BurgerMenu.css";

function BurgerMenu({ isOpen, isClose }) {

  return (
    <div className={`burger-menu ${isOpen && "open"}`}>
      <div className="burger-menu__container">
        <button className="burger-menu__close-icon" type="button" onClick={isClose} />
        <nav className="burger-menu__link-wrapper">
          <NavLink
            to="/"
            exact
            className="burger-menu__link"
            activeClassName="burger-menu__link_type_active"
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className="burger-menu__link"
            activeClassName="burger-menu__link_type_active"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className="burger-menu__link"
            activeClassName="burger-menu__link_type_active"
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
        <NavLink to="/profile">
          <button className="burger-menu__btn-profile" type="button">
            Аккаунт
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default BurgerMenu;
