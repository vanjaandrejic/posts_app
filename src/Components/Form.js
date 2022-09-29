import React from "react";
import "../Styles/Form.css";

export default function Form(props) {
  const inputHandler = (e) => {
    props.searchTitle(e.target.value);
  };

  const selectHandler = (e) => {
    props.searchAuthor(e.target.value);
  };

  return (
    <form className="form">
      <input
        type="search"
        className="filter-title"
        placeholder="Search"
        onChange={inputHandler}
      ></input>

      <select onChange={selectHandler} className="filter-author">
        <option>Filter by author name</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </select>
    </form>
  );
}
