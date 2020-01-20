import React, { Component } from "react";

export class Mappa extends Component {
  render() {
    if (this.props.acf !== undefined) {
      let acfs = this.props.acf;
      console.log(acfs);

      let titolo = acfs.titolo;
      let sottotitolo = acfs.sottotitolo;

      return (
        <div class="jumbotron">
          <h1 class="display-4">{titolo}</h1>
          <p class="lead">{sottotitolo}</p>

          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </p>
        </div>
      );
    } else return "";
  }
}

export default Mappa;
