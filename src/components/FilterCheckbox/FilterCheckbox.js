import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ checkBoxClick, isShort }) {
  return (
    <div className="filter-checkbox__wrapper">
      <label className="filter-checkbox__switch">
        <input
          className="checkbox"
          type="checkbox"
          onChange={checkBoxClick}
          checked={isShort}
        />
        <span className="filter-checkbox__slider filter-checkbox__round" />
      </label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
