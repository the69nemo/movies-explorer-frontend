import React,  {useState} from "react";
import "./Navigation.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { NavLink } from "react-router-dom";

function Navigation() {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleBurgerMenuClick = () => setIsBurgerMenuOpen(!isBurgerMenuOpen);

  return (
    <>
      <nav className="navigation__btn-container">
        <NavLink to="/movies" activeClassName="navigation__button_type_active">
          <button
            className="navigation__button navigation__button_type_movies"
            type="button"
          >
            Фильмы
          </button>
        </NavLink>
        <NavLink to="/saved-movies" className='navigation__nav-link' activeClassName="navigation__button_type_active">
          <button
            className="navigation__button navigation__button_type_saved-movies"
            type="button"
          >
            Сохраненные фильмы
          </button>
        </NavLink>
        <NavLink to="/profile">
          <button
            className="navigation__button navigation__button_type_profile"
            type="button"
          >
            Аккаунт
          </button>
        </NavLink>
        <button className="navigation__burger-btn" type="button" onClick={handleBurgerMenuClick}></button>
      </nav>
      <BurgerMenu
        isOpen={isBurgerMenuOpen}
        isClose={handleBurgerMenuClick}
      />
    </>
  );
}

export default Navigation;
