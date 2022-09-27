import React from "react";
import { useEffect, useState } from "react";

import Header from "./Components/Header";
import Posts from "./Components/Posts";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header posts={posts} />
      <Posts posts={posts} />
    </>
  );
}

export default App;
