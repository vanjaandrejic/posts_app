import React from "react";
import "../Styles/Form.css";

export default function Form(props) {
  const inputHandler = (e) => {
    props.searchTitle(e.target.value);
  };

  const selectHandler = (e) => {
    props.searchAuthor(e.target.value);
  };

  const selectOptions = props.users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  return (
    <form className="form">
      <input
        type="search"
        className="filter-title"
        placeholder="Search"
        onChange={inputHandler}
      ></input>
      <select onChange={selectHandler} className="filter-author">
        <option value={0}>Filter by author name</option>
        {selectOptions}
      </select>
    </form>
  );
}
