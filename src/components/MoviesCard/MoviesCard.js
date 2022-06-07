import React from 'react';
import './MoviesCard.css';
import Cover  from '../../images/movie_pic_1.jpg'

function MoviesCard ({ cardName, imgPath, time}) {
  return (
    <section className='movies-card'>
      <div className='movies-card__container'>
        <div className='movies-card__text-wrapper'>
          <h2 className='movies-card__title'>33 слова о дизайне</h2>
          <p className='movies-card__time'>1ч 42м</p>
          <button className='movies-card__like' type='button' />
        </div>
        <img className='movies-card__img-cover' alt='кадр из фильма' src={Cover}/>
      </div>
    </section>
  );
}

export default MoviesCard;
