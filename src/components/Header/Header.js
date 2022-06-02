import React from "react";
import './Header.css';
import Logo from "../../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img className="header__logo" src={Logo} alt="логотип" />
      </div>
      <div className="header__btn-container">
        <button className="header__button" type="button">
          Регистрация
        </button>
        <button className="header__button header__button_type_signin" type="button">
          Войти
        </button>
      </div>
    </header>
  );
}

export default Header;
