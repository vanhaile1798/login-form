import React, { Component, Fragment } from "react";

// import "../styles/styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      rememberme: false
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onHandleChange(event) {
    let { name, value } = event.target;
    if (event.target.type === "checkbox") {
      value = event.target.checked;
      console.log(value);
    }

    this.setState({
      [name]: value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <Fragment>
        <form className="login-form" onSubmit={this.onSubmit}>
          <label className="login-form__input-name" htmlFor='login-form__username-input'>Username or Email address</label>
          <input
            type="text"
            className="login-form__input"
            name="username"
            id='login-form__username-input'
            onChange={this.onHandleChange}
          />
          <label className="login-form__input-name" htmlFor='login-form__password-input'>Password</label>
          <input
            type="password"
            className="login-form__input"
            id='login-form__password-input'
            name="password"
            onChange={this.onHandleChange}
          />
          <div className="login-form__btn-group">
            <div className="login-form__checkbox-wrapper">
              <input
                type="checkbox"
                name="rememberme"
                className="login-form__remember-checkbox"
                id='login-form__remember-checkbox'
                onChange={this.onHandleChange}
              />
              {' '}
              <label className='login-form__remember' htmlFor='login-form__remember-checkbox'>Remember me</label>
            </div>
            <button className="login-form__login-btn">Login</button>
          </div>
        </form>
        <Link className="login-form__link login-form__lost-password" to='/account-recovery'>Lost your password?</Link>
        <Link className="login-form__link login-form__signup-btn" to='/signup'>Don't have a account? Sign up</Link>
        <Link className="login-form__link" to='/'><FontAwesomeIcon icon='arrow-left' />{' '}Back to uiCookies</Link>
      </Fragment>
    );
  }
}

export default LoginForm;
