import React, { useState } from "react";
import "./Login.css";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormValidation";

function Login({ onAuth, infoMessage }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({});

  const { email, password } = values;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAuth(values);
    resetForm();
  };

  return (
    <section className="login">
      <div className="login__container">
        <Link to="/">
          <img className="login__logo" src={Logo} alt="логотип" />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" id="login" onSubmit={handleSubmit}>
          <label className="login__label login__label_type_email">
            E-mail
            <input
              className="login__input login__input_type_email"
              type="email"
              name="email"
              required
              value={email || ""}
              onChange={handleChange}
            />
            <span
              className={`register__input-error ${
                !isValid && "register__input-error_active"
              }`}
              id="email-input-error"
            >
              {errors.email}
            </span>
          </label>
          <label className="login__label login__label_type_password">
            Пароль
            <input
              className="login__input login__input_type_password"
              type="password"
              name="password"
              minLength="2"
              maxLength="8"
              required
              value={password || ""}
              onChange={handleChange}
            />
            <span
              className={`register__input-error ${
                !isValid && "register__input-error_active"
              }`}
              id="login-input-error"
            >
              {errors.password}
            </span>
          </label>
        </form>
        <p className="login__info-message">{infoMessage}</p>
        <button
          className={`login__btn ${!isValid && 'login__btn_disabled'}`}
          type="submit"
          form="login"
          disabled={!isValid}
        >
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
