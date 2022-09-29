import React from "react";
import PostsList from "./PostsList";
import Form from "./Form";
import "../Styles/Posts.css";

export default function Posts(props) {
  const searchTitle = (param) => {
    props.onSearchTitle(param);
  };

  return (
    <div className="posts-container">
      <Form searchTitle={searchTitle} />
      <PostsList posts={props.posts} />
    </div>
  );
}
