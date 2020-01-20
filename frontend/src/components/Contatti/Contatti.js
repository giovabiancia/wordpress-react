import React, { Component } from "react";
import Mappa from "./Mappa";
import Address from "./Address";

export class Contatti extends Component {
  render() {
    let acfS = this.props.authenticate[1];
    console.log(acfS);
    return (
      <div>
        <Mappa acf={acfS} />
        <Address acf={acfS} />
      </div>
    );
  }
}

export default Contatti;
