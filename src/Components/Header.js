import React from "react";
import "../Styles/Header.css";

export default function Header(props) {
  
  const postsNumberCounter = props.posts.length;

  return (
    <div className="header">
      <div className="header-title">
        <h1>Posts found: {postsNumberCounter}</h1>
      </div>
    </div>
  );
}
