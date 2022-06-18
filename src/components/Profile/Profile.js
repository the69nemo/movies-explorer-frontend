import React, { useState, useEffect, useContext } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ isLoggedIn, onUpdateUser, signOut }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const handleSubmit = (event) => {
    event.preventDefault();

    onUpdateUser({ name, email });
    setName("");
    setEmail("");
  };

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
                onChange={handleChangeName}
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
                name="email"
                required
                value={email || ""}
                onChange={handleChangeEmail}
              />
              <span
                className="profile__input-error"
                id="email-input-error"
              ></span>
            </label>
          </form>
          <button
            className="profile__btn profile__btn_edit"
            type="submit"
            form="profile"
          >
            Редактировать
          </button>
          <button className="profile__btn profile__btn_exit" type="button" onClick={signOut}>
            Выйти из аккаунта
          </button>
        </div>
      </section>
    </>
  );
}

export default Profile;
