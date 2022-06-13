import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <input className="search-form__input" type="text" placeholder="Фильм" required />
        <button type="button" className="search-form__button" />
      </form>
      <FilterCheckbox />
      <div className="search-form__line" />
    </section>
  );
}

export default SearchForm;
