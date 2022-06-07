import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__line" />
      <div className="about-project__flex-container">
        <div className="about-text-container">
          <h3 className="about-project__text-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text-subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-text-container">
          <h3 className="about-project__text-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text-subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__grid-container">
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
