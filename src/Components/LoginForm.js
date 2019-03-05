import React, { Component } from "react";

// import "../styles/styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <div className="login__form-wrapper">
        <div className="login__img-wrapper">
          <img
            className="login__image"
            src="https://images.unsplash.com/photo-1550852355-d04aff81523b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9"
            alt=""
          />
        </div>
        <form className="login__form" onSubmit={this.onSubmit}>
          <label className="login__input-name">Username or Email address</label>
          <input
            type="text"
            className="login__input"
            name="username"
            onChange={this.onHandleChange}
          />
          <label className="login__input-name">Password</label>
          <input
            type="password"
            className="login__input"
            name="password"
            onChange={this.onHandleChange}
          />
          <div className="login__btn-group">
            <div className="login__checkbox-wrapper">
              <input
                type="checkbox"
                name="rememberme"
                className="login__checkbox"
                onChange={this.onHandleChange}
              />{" "}
              Remember me
            </div>
            <button className="login__login-btn">Login</button>
          </div>
        </form>
          <a className="login__link login__lost-password" href="/">Lost your password?</a>
          <a className="login__link" href="/"><FontAwesomeIcon icon='arrow-left'/>{' '}Back to uiCookies</a>
      </div>
    );
  }
}

export default LoginForm;
