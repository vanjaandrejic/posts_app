import React from "react";
import "../Styles/Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Post(props) {
  return (
    <div className="post">
      <div className="post-text">
        <h1 className="post-title">{props.title}</h1>
        <p className="post-body">{props.body}</p>
      </div>
      <Link className="post-link" to={`/posts/${props.id}`}>
        Read More <FontAwesomeIcon icon={faArrowRight} size="xs" />
      </Link>
    </div>
  );
}
