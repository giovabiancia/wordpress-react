import React, { Component } from "react";
import New from "./New";
import axios from "axios";

export class News extends Component {
  render() {
    const news = this.props.post.data;

    return (
      <div>
        {news.map(pippo => (
          <New key={pippo.id} data={pippo} />
        ))}
      </div>
    );
  }
}

export default News;
