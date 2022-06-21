import React from "react";
import "./Register.css";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormValidation";

function Register({ onAuth }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({});

  const { name, email, password } = values;

  const handleSubmit = (event) => {
    event.preventDefault();
    onAuth(values);
    resetForm();
  };

  return (
    <section className="register">
      <div className="register__container">
        <Link to="/">
          <img className="register__logo" src={Logo} alt="логотип" />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form" onSubmit={handleSubmit} id="register">
          <label className="register__label register__label_type_name">
            Имя
            <input
              className="register__input register__input_type_name"
              type="text"
              name="name"
              minLength="2"
              required
              value={name || ""}
              onChange={handleChange}
            />
            <span
              className={`register__input-error ${
                !isValid && "register__input-error_active"
              }`}
              id="name-input-error"
            >
              {errors.name}
            </span>
          </label>

          <label className="register__label register__label_type_email">
            E-mail
            <input
              className="register__input register__input_type_email"
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

          <label className="register__label register__label_type_password">
            Пароль
            <input
              className="register__input register__input_type_password"
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
              id="password-input-error"
            >
              {errors.password}
            </span>
          </label>
        </form>
        <button
          className={`register__btn ${!isValid && 'register__btn_disabled'}`}
          type="submit"
          form="register"
          disabled={!isValid}
        >
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
