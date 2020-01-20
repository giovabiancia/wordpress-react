import React, { Component } from "react";

export class New extends Component {
  render() {
    console.log(this.props);
    const { id, title, excerpt } = this.props.data;

    return (
      <div>
        <h2>{title.rendered}</h2>7
        <small>
          Scritto da <b>autore</b>
        </small>
        <img style={{ width: "10%" }} alt={title.rendered}></img>
        <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
      </div>
    );

    return null;
  }
}

export default New;
