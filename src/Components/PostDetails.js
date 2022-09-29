import React from "react";
import { useParams } from "react-router-dom";

export default function PostDetails(props) {
  const params = useParams();
  const postId = parseInt(params.id);

  console.log(postId)

  const post = props.posts.find(post => post.id === postId)

   console.log(post)

  return (
    <>
      <h2>Post - {postId}</h2>
    </>
  );
}
