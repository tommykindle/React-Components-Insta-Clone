//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";


const PostsPage = () => {
  const [postData, setPostData] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
      {postData.map(data => (
        <Post key={data.username} post={data} />
      ))}
    </div>
  );
};

export default PostsPage;
