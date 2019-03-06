import React from "react";

import './styles/styles.scss';

import LoginForm from "./LoginForm";

function App() {
  return (
    <div className="login">
      <div className="login__left-img" />
      <div className="login__primary">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;