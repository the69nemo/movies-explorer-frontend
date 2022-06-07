import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__line" />
      <div className="about-project__container">
        <h3 className="about-project__text-title about-project__text-title_type_title1">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="about-project__text-subtitle about-project__text-title_type_subtitle1">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <h3 className="about-project__text-title about-project__text-title_type_title2">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about-project__text-subtitle about-project__text-title_type_subtitle2">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
        <div className="about-project__timeline about-project__timeline_type_timelin1">
          <span className="about-project__timeline-text">1 неделя</span>
        </div>
        <div className="about-project__timeline about-project__timeline_type_timelin2">
        <span className="about-project__timeline-text">4 недели</span>
        </div>
        <div className="about-project__timeline-subtitle about-project__timeline_type_subtimelin1">
        <span className="about-project__timeline-text">Back-end</span>
        </div>
        <div className="about-project__timeline-subtitle about-project__timeline_type_subtimelin2">
        <span className="about-project__timeline-text">Front-end</span>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
