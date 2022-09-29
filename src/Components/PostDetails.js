import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PostDetails(props) {
  const params = useParams();
  const postId = parseInt(params.id);
  const prevId = postId - 1;

  const post = props.posts.find((post) => post.id === postId);

  const userId = parseInt(post.userId);
  
  const user = props.users.find((user) => user.id === userId);

  console.log(user);

  const commentList = props.comments.filter((comment) => comment.postId === postId );
  
  console.log(commentList);

  const komentari = commentList.map(c => {
    return <div className="comment-card">
      <h3>{c.name}</h3>
      <p>{c.body}</p>
    </div>
  })

  return (
    <div className="post-container">
      <div className="post-title">
        <h1>{post.title}</h1>
      </div>
      <div className="post-body">
        <p>{post.body}</p>
      </div>
      <div className="post-controls">
        <Link to={`/posts/${prevId}`}>Previous Article</Link>
        <a href="/">Next Article</a>
      </div>
      <div className="post-author">
        <div className="post-author__author">
          <h4>ccc</h4>
        </div>
        <div className="post-author__adress"></div>
      </div>
      <div className="post-comments">
        <h2>Comments</h2>
      {komentari}
      </div>
    </div>
  );
}
