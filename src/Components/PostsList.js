import React from "react";
import Post from "./Post";
import "../Styles/PostsList.css";

export default function PostsList(props) {
  return (
    <div className="posts-list">
      {props.posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}
