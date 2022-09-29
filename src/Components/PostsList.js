import React from "react";
import { useState, useEffect } from "react";
import Post from "./Post";
import "../Styles/PostsList.css";
import "../Styles/Pagination.css";
import ReactPaginate from "react-paginate";

export default function PostsList(props) {
  const [currentPosts, setCurrentPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [postOffset, setPostOffset] = useState(0);
  const postsPerPage = 14;

  useEffect(() => {
    const endOffset = postOffset + postsPerPage;
    const slicedPosts = props.posts.slice(postOffset, endOffset);
    setCurrentPosts(slicedPosts);
    setPageCount(Math.ceil(props.posts.length / postsPerPage));
  }, [postOffset, postsPerPage, props.posts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * postsPerPage) % props.posts.length;
    setPostOffset(newOffset);
  };

  return (
    <>
      <div className="posts-list">
        {currentPosts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" > "
        onPageChange={handlePageClick}
        pageRangeDisplayed={8}
        pageCount={pageCount}
        previousLabel=" < "
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}
