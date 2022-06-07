import React from "react";
import "./AboutMe.css";
import StudentPhoto from "../../images/my_photo.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__line" />
      <div className="about-me__container">
        <h3 className="about-me__student-name">Сергей</h3>
        <img
          className="about-me__photo"
          src={StudentPhoto}
          alt="личное фото студента"
        />
        <p className="about-me__subtitle">
          Будущий фронтенд-разработчик, 31 год
        </p>
        <p className="about-me__discription">
          Родился и проживаю в г. Малорита в Беларуси. Окончил строительный
          факультет БрГТУ по специальности "Экспертиза и управление
          недвижимости". По окончанию учебы и по сей день работую в "Брестском
          агенстве по государственной регистрации и земельному кадастру". Всегда
          тяготел к технологиям, поэтому и решил в 2021г. поступить на факультет
          веб-разработки от Яндекс.Практикума.
        </p>
        <div className="about-me__social-wrapper">
          <a
            className="about-me__social"
            href="https://vk.com/the69nemo"
            target="_blank"
            rel="noreferrer"
          >
            Вконтакте
          </a>
          <a
            className="about-me__social"
            href="https://github.com/the69nemo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
