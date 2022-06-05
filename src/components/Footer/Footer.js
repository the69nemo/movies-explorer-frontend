import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__discription">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__line" />
      <div className="footer__links-wrapper">
        <p className="footer__copyright">&copy;2022</p>
        <ul className="footer__links-container">
          <li className="footer_list">
            <a
              className="footer__link"
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
            >Яндекс.Практикум</a>
          </li>
          <li className="footer_list">
            <a
              className="footer__link"
              href="https://github.com/the69nemo"
              target="_blank"
              rel="noreferrer"
            >GitHub</a>
          </li>
          <li className="footer_list">
            <a
              className="footer__link"
              href="https://vk.com/the69nemo/"
              target="_blank"
              rel="noreferrer"
            >Вконтакте</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
