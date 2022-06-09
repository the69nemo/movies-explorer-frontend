import React from "react";
import "./Register.css";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <Link to="/">
          <img className="register__logo" src={Logo} alt="логотип" />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <label className="register__label register__label_type_name">
            Имя
            <input
              className="register__input register__input_type_name"
              type="text"
              minLength="2"
              required
            />
            <span
              className="register__input-error"
              id="name-input-error"
            ></span>
          </label>
          <label className="register__label register__label_type_email">
            E-mail
            <input
              className="register__input register__input_type_email"
              type="email"
              required
            />
            <span
              className="register__input-error"
              id="email-input-error"
            ></span>
          </label>
          <label className="register__label register__label_type_password">
            Пароль
            <input
              className="register__input register__input_type_password"
              type="password"
              minLength="2"
              maxLength="8"
              required
            />
            <span
              className="register__input-error"
              id="password-input-error"
            ></span>
          </label>
        </form>
        <button className="register__btn" type="button">
          Зарегистрироваться
        </button>
        <p className="register__link-text">
          Уже зарегистрированы?
          <Link className="register__link" to="/signin">
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
