import React from "react";
import "./Login.css";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <Link to="/">
          <img className="login__logo" src={Logo} alt="логотип" />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
          <label className="login__label login__label_type_email">
            E-mail
            <input
              className="login__input login__input_type_email"
              type="email"
              required
            />
            <span className="login__input-error" id="email-input-error"></span>
          </label>
          <label className="login__label login__label_type_password">
            Пароль
            <input
              className="login__input login__input_type_password"
              type="password"
              minLength="2"
              maxLength="8"
              required
            />
            <span className="login__input-error" id="login-input-error"></span>
          </label>
        </form>
        <button className="login__btn" type="button">
          Войти
        </button>
        <p className="login__link-text">
          Ещё не зарегистрированы?
          <Link className="login__link" to="/signup">
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
