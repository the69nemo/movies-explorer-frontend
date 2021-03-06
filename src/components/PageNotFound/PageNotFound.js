import React from 'react';
import { Link } from 'react-router-dom';
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className='page-not-found'>
      <h2 className='page-not-found__title'>404</h2>
      <p className='page-not-found__discription'>Страница не найдена</p>
      <Link to="/" className='page-not-found__button'>
        Назад
      </Link>
    </div>
   );
}

export default PageNotFound;
