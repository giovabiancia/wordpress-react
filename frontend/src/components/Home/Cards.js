import React, { Component } from "react";

export class Cards extends Component {
  render() {
    if (this.props.acf !== undefined) {
      let acfs = this.props.acf.card;

      let titolo1 = acfs[0].titolo;
      let titolo2 = acfs[1].titolo;
      let titolo3 = acfs[2].titolo;

      let sottotitolo1 = acfs[0].sottotitolo;
      let sottotitolo2 = acfs[1].sottotitolo;
      let sottotitolo3 = acfs[2].sottotitolo;

      let descrizione1 = acfs[0].descrizione;
      let descrizione2 = acfs[1].descrizione;
      let descrizione3 = acfs[2].descrizione;

      return (
        <div class="row mt-5">
          <div class="col-lg-4 col-sm-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{titolo1}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{sottotitolo1}</h6>
                <p class="card-text">{descrizione1}</p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{titolo2}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{sottotitolo2}</h6>
                <p class="card-text">{descrizione2}</p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{titolo3}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{sottotitolo3}</h6>
                <p class="card-text">{descrizione3}</p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return "";
  }
}

export default Cards;
