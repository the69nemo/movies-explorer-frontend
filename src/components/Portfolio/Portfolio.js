import React from "react";
import "./Portfolio.css";
import ArrowIcon from "../../images/icon_arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__wrapper">
        <li className="portfolio__list">
          <a
            className="portfolio__link"
            href="https://github.com/the69nemo/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
          </a>
          <img className="portfolio__icon" src={ArrowIcon} alt="иконка" />
        </li>
        <li className="portfolio__list">
          <a
            className="portfolio__link"
            href="https://github.com/the69nemo/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
          </a>
          <img className="portfolio__icon" src={ArrowIcon} alt="иконка" />
        </li>
        <li className="portfolio__list">
          <a
            className="portfolio__link"
            href="https://github.com/the69nemo/react-mesto-api-full"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
          </a>
          <img className="portfolio__icon" src={ArrowIcon} alt="иконка" />
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
