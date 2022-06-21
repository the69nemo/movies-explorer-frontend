import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onSubmit, checkBoxClick, searchKeyword, isShort }) {
  const location = useLocation();

  const [movie, setMovies] = useState([]);

  useEffect(() => {
    if (searchKeyword.lenght && location.pathname === "/movies") {
      setMovies(searchKeyword);
    }
  }, []);

  const handleChange = (event) => {
    setMovies(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(movie);
  };

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit} noValidate>
        <input
          className="search-form__input"
          type="search"
          name="search"
          placeholder="Фильм"
          onChange={handleChange}
          value={movie}
        />
        <button type="submit" className="search-form__button" />
      </form>
      <FilterCheckbox checkBoxClick={checkBoxClick} isShort={isShort} />
      <div className="search-form__line" />
    </section>
  );
}

export default SearchForm;
