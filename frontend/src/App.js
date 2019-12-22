import React, { Fragment, Component } from 'react';
import Home from './components/Home'
import Contatti from './components/Contatti'
import Servizio from './components/Servizio'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './css/jumbo-bootstrap.css';
import './css/jumbo-core.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import axios from 'axios'

export class App extends Component {

  render() {




    return (
      <Router>
        <div className="gx-main-container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/servizio" component={Servizio} />
            <Route exact path="/contatti" component={Contatti} />

          </Switch>
          <Footer />



        </div>
      </Router>
    );

  }

}

export default App;
