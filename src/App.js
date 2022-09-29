import React from "react";
import { useEffect, useState } from "react";

import Header from "./Components/Header";
import Posts from "./Components/Posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [AllPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await res.json();
      setPosts(data);
      setAllPosts(data);
    };
    fetchPosts();
  }, []);

  const onSearchTitle = (param) => {
    console.log(param);
    const filteredPosts = AllPosts.filter((post) => post.title.includes(param));
    setPosts(filteredPosts);
  };

  return (
    <>
      <Header posts={posts} />
      <Posts onSearchTitle={onSearchTitle} posts={posts} />
    </>
  );
}

export default App;
