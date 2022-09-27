import React from "react";
import PostsList from "./PostsList";
import "../Styles/Posts.css";

export default function Posts(props) {
  return (
    <div className="posts-container">
      <PostsList posts={props.posts} />
    </div>
  );
}
