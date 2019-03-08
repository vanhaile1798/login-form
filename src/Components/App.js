import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import './styles/styles.scss';

import Form from './Form';
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Route path='/' exact component={Home}/>
        <Route path='/login' exact component={Form} />
        <Route path='/account-recovery' exact component={Form}/>
        <Route path='/signup' exact component={Form} />
      </div>
    </Router>
  );
}

export default App;
