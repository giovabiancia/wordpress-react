import React, { Fragment, Component } from "react";
import Home from "./components/Home/Home";
import Contatti from "./components/Contatti/Contatti";
import Servizio from "./components/Servizio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import axios from "axios";
import "./css/Nav.css";

import { Api } from "./apiCall/Api";

export class App extends Component {
  state = {
    isLoaded: false,
    data: []
  };
  componentDidMount() {
    // invia a API gli id delle pagine da richiamare
    const Apidata = Api([15, 2, 34], data => {
      this.setState({ isLoaded: true, data: [...this.state.data, data] });
    });
  }

  render() {
    return (
      <Router>
        <Nav />
        <main role="main">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home {...props} authenticate={this.state.data} />
              )}
            />
            <Route
              exact
              path="/contatti"
              render={props => (
                <Contatti {...props} authenticate={this.state.data} />
              )}
            />
            <Route exact path="/servizio" component={Servizio} />
          </Switch>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
