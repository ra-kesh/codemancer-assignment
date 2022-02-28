import React from "react";

const Post = ({ post }) => {
  return (
    <div key={post.date}>
      <p>{post.text}</p>
      <img src={post.gifUrl} alt="" />
    </div>
  );
};

export default Post;
