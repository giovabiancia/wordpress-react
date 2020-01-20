import React, { Component, useContext } from "react";
import Carosello from "./Carosello";
import Cards from "./Cards";

export class Home extends Component {
  render() {
    let acfS = this.props.authenticate[0];

    return (
      <div>
        <Carosello acf={acfS} />
        <Cards acf={acfS} />
      </div>
    );
  }
}

export default Home;
