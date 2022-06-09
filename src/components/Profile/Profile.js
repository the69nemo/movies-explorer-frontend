import React from "react";
import "./Profile.css";
import Header from "../Header/Header";

function Profile({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <section className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Привет, Сергей!</h2>
          <form className="profile__form">
            <label className="profile__label profile__label_type_name">
              Имя
              <input
                className="profile__input profile__input_type_name"
                type="text"
                minLength="2"
                required
              />
              <span
                className="profile__input-error"
                id="name-input-error"
              ></span>
            </label>
            <label className="profile__label profile__label_type_email">
              E-mail
              <input
                className="profile__input profile__input_type_email"
                type="email"
                required
              />
              <span
                className="profile__input-error"
                id="email-input-error"
              ></span>
            </label>
          </form>
          <button className="profile__btn profile__btn_edit" type="button">
            Редактировать
          </button>
          <button className="profile__btn profile__btn_exit" type="button">
            Выйти из аккаунта
          </button>
        </div>
      </section>
    </>
  );
}

export default Profile;
