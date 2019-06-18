import React from "react";

const PostList = props => {
  const posts = props.posts.map(post => {
    return (
      <div className="post" key={post.id}>
        <div className="img">
          <img src={post.img} alt="" />
        </div>
        <h2>{post.title}</h2>
        <p>{post.text}</p>
      </div>
    );
  });
  return <>{posts}</>;
};

export default PostList;
