import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Styles/PostDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function PostDetails(props) {
  const params = useParams();
  const postId = parseInt(params.id);
  const prevId = postId - 1;
  const nextId = postId + 1;

  const post = props.posts.find((post) => post.id === postId);

  const userId = parseInt(post.userId);

  const user = props.users.find((user) => user.id === userId);




  console.log(user.address.street);

  const commentList = props.comments.filter(
    (comment) => comment.postId === postId
  );

  console.log(commentList);

  const postComments = commentList.map((c) => {
    return (
      <div key={c.id} className="comment-card">
        <h3>{c.name}</h3>
        <p>{c.body}</p>
      </div>
    );
  });

  return (
    <div className="post-container">
      <div className="post-details-title">
        <h1>{post.title}.</h1>
      </div>
      <div className="post-details-body">
        <p>{post.body}</p>
      </div>
      <div className="post-controls">
        <Link className="post-controls__prev" to={`/posts/${prevId}`}><FontAwesomeIcon icon={faArrowLeft} size="xs" /> Previous Article</Link>
        <Link className="post-controls__next" to={`/posts/${nextId}`}>Next Article <FontAwesomeIcon icon={faArrowRight} size="xs" /></Link>
      </div>
      <div className="post-author">
        <div className="post-author__author">
          <h4>Author name</h4>
          <h3>{user.name}</h3>
        </div>
        <div className="post-author__address">
        <h4>Address</h4>
          <h3>{user.address.city}, {user.address.zipcode}, {user.address.street}</h3>
        </div>
      </div>
      <div className="post-comments">
        <h2>Comments</h2>
        {postComments}
      </div>
    </div>
  );
}
