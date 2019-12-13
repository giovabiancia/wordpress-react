import React, { Fragment } from 'react';
import Contrade from './components/Contrade'
import Contrada from './components/Contrada'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Contrade} />
        <Route exact path="/contrada/:id" component={Contrada} />
      </Fragment>
    </Router>
  );
}

export default App;
