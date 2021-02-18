import React, {Component} from 'react';
//import logo from './logo.svg';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'popper.js/dist/popper.js';
import Index from './seccions/Index';
import ResultatCerca from './seccions/ResultatCerca';

import { BrowserRouter as Router, Route } from "react-router-dom";

/*
            <Route path="/cases/:id">
              <Fitxa />
            </Route>
            <Route path="/reserva">
              <Reserva />
            </Route>
            <Route path="/registre">
              <Registre />
            </Route>
            <Route path="/iniciSessio">
              <IniciSessio />
            </Route>
*/


class App extends Component {
  
  render() {
    return (
      
      <Router>
        <div className="App">
            <Route exact path="/">
              <Index />
            </Route>
            <Route path="/cases">
              <ResultatCerca />
            </Route>

        </div>
      </Router>
      
      
    );
  }
}

export default App;
