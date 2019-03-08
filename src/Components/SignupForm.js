import React, { Component, Fragment } from "react";

// import "../styles/styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: ""
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
        <form className="signup-form" onSubmit={this.onSubmit}>
          <label className="sign-form__input-name" htmlFor='signup-form__username-input'>Username</label>
          <input
            type="text"
            className="signup-form__input"
            name="username"
            id='signup-form__username-input'
            onChange={this.onHandleChange}
          />
          <label className="signup-form__input-name" htmlFor='signup-form__password-input'>Password</label>
          <input
            type="password"
            className="signup-form__input"
            id='signup-form__password-input'
            name="password"
            onChange={this.onHandleChange}
          />
          <label className="signup-form__input-name" htmlFor='signup-form__password-confirm-input'>Confirm Password</label>
          <input
            type="password"
            className="signup-form__input"
            id='signup-form__password-confirm-input'
            name="confirmPassword"
            onChange={this.onHandleChange}
          />
          <label className="signup-form__input-name" htmlFor='signup-form__email-input'>Email</label>
          <input
            type="email"
            className="signup-form__input"
            id='signup-form__email-input'
            name="email"
            onChange={this.onHandleChange}
          />
          <div className="signup-form__btn-group">
            <button className="signup-form__login-btn">Sign up</button>
          </div>
        </form>
        <Link className="login-form__link" to='/'><FontAwesomeIcon icon='arrow-left' />{' '}Back to uiCookies</Link>
      </Fragment>
    );
  }
}

export default SignupForm;
