import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Cover1 from "../../images/movie_pic_1.jpg";
import Cover2 from "../../images/movie_pic_2.jpg";
import Cover3 from "../../images/movie_pic_3.jpg";
import Cover4 from "../../images/movie_pic_4.jpg";
import Cover5 from "../../images/movie_pic_5.jpg";
import Cover6 from "../../images/movie_pic_6.jpg";
import Cover7 from "../../images/movie_pic_7.jpg";

function MoviesCardList({ hiddenButton, deleteIcon }) {
  return (
    <section className="movies-list">
      <div className="movies-list__container">
        <MoviesCard
          cardName="33 слова о дизайне"
          time="1ч 42м"
          imgCover={Cover1}
          deleteIcon={deleteIcon}
        />
        <MoviesCard
          cardName="Киноальманах «100 лет дизайна»"
          time="1ч 42м"
          imgCover={Cover2}
          deleteIcon={deleteIcon}
        />
        <MoviesCard
          cardName="В погоне за Бенкси"
          time="1ч 42м"
          imgCover={Cover3}
          deleteIcon={deleteIcon}
        />
        <MoviesCard
          cardName="Баския: Взрыв реальности"
          time="1ч 42м"
          imgCover={Cover4}
          deleteIcon={deleteIcon}
        />
        <MoviesCard
          cardName="Бег это свобода"
          time="1ч 42м"
          imgCover={Cover5}
          deleteIcon={deleteIcon}
        />
        <MoviesCard
          cardName="Книготорговцы"
          time="1ч 42м"
          imgCover={Cover6}
          deleteIcon={deleteIcon}
        />
        <MoviesCard
          cardName="Когда я думаю о Германии ночью"
          time="1ч 42м"
          imgCover={Cover7}
          deleteIcon={deleteIcon}
        />
      </div>
      <button type="button" className={!hiddenButton ? 'movies-list__button' : 'movies-list__button_hidden'}>
        Еще
      </button>
    </section>
  );
}

export default MoviesCardList;
