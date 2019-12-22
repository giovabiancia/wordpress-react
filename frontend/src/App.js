import React, { Fragment, Component } from 'react';
import Home from './components/Home'
import Contatti from './components/Contatti'
import Servizio from './components/Servizio'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './css';
import Nav from './components/Nav'
import axios from 'axios'

export class App extends Component {

  render() {




    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/servizio" component={Servizio} />
            <Route exact path="/contatti" component={Contatti} />
          </Switch>



        </div>
      </Router>
    );

  }

}

export default App;
