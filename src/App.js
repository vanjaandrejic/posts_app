import React from "react";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Header from "./Components/Header";
import Posts from "./Components/Posts";
import PostDetails from "./Components/PostDetails";

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [titleSearchParam, setTitleSearchParam] = useState("");
  const [authorSearchParam, setAuthorSearchParam] = useState("");

  useEffect(() => {
    if (titleSearchParam && authorSearchParam > 0) {
      const filteredPosts = allPosts.filter(
        (post) =>
          post.title.includes(titleSearchParam.toLowerCase()) &&
          post.userId === parseInt(authorSearchParam)
      );
      setPosts(filteredPosts);
    } else if (titleSearchParam && !authorSearchParam) {
      const filteredPosts = allPosts.filter((post) =>
        post.title.includes(titleSearchParam.toLowerCase())
      );
      setPosts(filteredPosts);
    } else if (authorSearchParam > 0 && !titleSearchParam) {
      const filteredPosts = allPosts.filter(
        (post) => post.userId === parseInt(authorSearchParam)
      );
      setPosts(filteredPosts);
    } else if (!titleSearchParam && authorSearchParam === 0) {
      setPosts(allPosts);
    } else {
      const filteredPosts = allPosts.filter((post) =>
        post.title.includes(titleSearchParam.toLowerCase())
      );
      setPosts(filteredPosts);
    }
  }, [titleSearchParam, authorSearchParam, allPosts]);

  useEffect(() => {
    const fetchPosts = async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await res.json();
      setAllPosts(data);
      setPosts(data);
    };

    const fetchUsers = async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await res.json();
      setUsers(data);
    };

    const fetchComments = async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/comments");
      let data = await res.json();
      setComments(data);
    };

    fetchPosts();
    fetchUsers();
    fetchComments();
  }, []);

  const onSearchTitle = (param) => {
    setTitleSearchParam(param);
  };

  const onSearchAuthor = (param) => {
    setAuthorSearchParam(param);
  };

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/posts" />
          </Route>
          <Route path="/posts" exact>
            <Header posts={posts} />
            <Posts
              onSearchTitle={onSearchTitle}
              onSearchAuthor={onSearchAuthor}
              posts={posts}
              users={users}
            />
          </Route>
          <Route path="/posts/:id">
            <PostDetails posts={posts} users={users} comments={comments} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
