import React from "react";
import ReactDOM from "react-dom";

import './styles/styles.scss';

import LoginForm from "./LoginForm";

function App() {
    return (
      <div className="App-wrapper">
        <div className="img-bg" />
        <div className="App">
          <LoginForm />
        </div>
      </div>
    );
  }

export default App;