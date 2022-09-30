import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Posts from "./Components/Posts";
import PostDetails from "./Components/PostDetails";

function App() {
  const [posts, setPosts] = useState([]);
  const [AllPosts, setAllPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await res.json();
      setPosts(data);
      setAllPosts(data);
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

  console.log(users);
  console.log(comments);

  const onSearchTitle = (param) => {
    console.log(param);
    const filteredPosts = AllPosts.filter((post) => post.title.includes(param));
    setPosts(filteredPosts);
  };

  const onSearchAuthor = (param) => {
    if (parseInt(param) !== 0) {
      const filteredPosts = AllPosts.filter(
        (post) => post.userId === parseInt(param)
      );
      setPosts(filteredPosts);
    } else {
      setPosts(AllPosts);
    }
  };

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/posts">
            <Header posts={posts} />
            <Posts
              onSearchTitle={onSearchTitle}
              onSearchAuthor={onSearchAuthor}
              posts={posts}
            />
          </Route>
          <Route path='/posts/:id'>
            <PostDetails posts={posts} users={users} comments={comments}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
