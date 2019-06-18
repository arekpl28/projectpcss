import React, { Component } from "react";

import PostList from "./PostList";

class Right extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("https://arekpl28.github.io//json-example/data.json")
      .then(response => {
        if (response.ok) {
          return response;
        }
      })
      .then(response => response.json())
      .then(data => {
        const posts = data.post;
        this.setState(prevState => ({
          posts: prevState.posts.concat(posts)
        }));
      });
  }

  render() {
    const { posts } = this.state;

    return (
      <>
        <div className="wpb_column">
          {posts.length > 0 ? <PostList posts={posts} /> : posts}
        </div>
      </>
    );
  }
}

export default Right;
