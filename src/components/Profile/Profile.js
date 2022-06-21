import React, { useState, useEffect, useContext } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useFormValidation";

function Profile({ isLoggedIn, onUpdateUser, signOut }) {
  const currentUser = useContext(CurrentUserContext);
  
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({});

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const { name, email } = values;

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateUser(values);
    resetForm();
  };

  const handleFocus = (event) => {
    event.target.select();
  };

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  useEffect(() => {
    if ((name !== currentUser.name || email !== currentUser.email) && isValid) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [email, isValid, name, currentUser.email, currentUser.name]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <section className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <form className="profile__form" id="profile" onSubmit={handleSubmit}>
            <label className="profile__label profile__label_type_name">
              Имя
              <input
                className="profile__input profile__input_type_name"
                type="text"
                name="name"
                minLength="2"
                required
                value={name || ""}
                onChange={handleChange}
                onFocus={handleFocus}
              />
              <span
                className={`profile__input-error ${
                  !isValid && "profile__input-error_active"
                }`}
                id="name-input-error"
              >
                {errors.name}
              </span>
            </label>
            <label className="profile__label profile__label_type_email">
              E-mail
              <input
                className="profile__input profile__input_type_email"
                type="email"
                name="email"
                required
                value={email || ""}
                onChange={handleChange}
                onFocus={handleFocus}
              />
              <span
                className={`profile__input-error ${
                  !isValid && "profile__input-error_active"
                }`}
                id="email-input-error"
              >
                {errors.email}
              </span>
            </label>
          </form>
          <button
            className={`profile__btn profile__btn_edit ${
              !buttonDisabled && "profile__btn_disabled"
            }`}
            type="submit"
            form="profile"
            disabled={!buttonDisabled}
          >
            Редактировать
          </button>
          <button
            className="profile__btn profile__btn_exit"
            type="button"
            onClick={signOut}
          >
            Выйти из аккаунта
          </button>
        </div>
      </section>
    </>
  );
}

export default Profile;
