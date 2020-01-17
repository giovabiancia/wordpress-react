import React, { Component, useContext } from "react";
import Carosello from "./Carosello";

export class Home extends Component {
  render() {
    console.log(this.props);

    return <Carosello />;
  }
}

export default Home;
