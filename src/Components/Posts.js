import React from "react";
import PostsList from "./PostsList";
import Form from "./Form";
import "../Styles/Posts.css";

export default function Posts(props) {
  const searchTitle = (param) => {
    props.onSearchTitle(param);
  };

  const searchAuthor = (param) => {
    props.onSearchAuthor(param);
  };

  return (
    <div className="posts-container">
      <Form
        users={props.users}
        searchTitle={searchTitle}
        searchAuthor={searchAuthor}
      />
      <PostsList posts={props.posts} />
    </div>
  );
}
