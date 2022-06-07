import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <input className="search-form__input" type="text" placeholder="Фильм" />
        <button type="button" className="search-form__button" />
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
