import React, { Fragment, Component } from "react";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import Contatti from "./components/Contatti/Contatti";
import Servizio from "./components/Servizio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import axios from "axios";
import "./css/Nav.css";

import { Api, ApiPost } from "./apiCall/Api";

export class App extends Component {
  state = {
    isLoaded: false,
    data: [],
    post: ""
  };
  componentDidMount() {
    // invia a API gli id delle pagine da richiamare
    const Apidata = Api([15, 2, 34], data => {
      this.setState({ isLoaded: true, data: [...this.state.data, data] });
    });

    const postData = axios
      .get("/wordpress/wp-json/wp/v2/posts")
      .then(res =>
        this.setState({
          post: res
        })
      )
      .catch(err => console.log(err));
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
            <Route
              exact
              path="/news"
              render={props => <News {...props} post={this.state.post} />}
            />
          </Switch>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
