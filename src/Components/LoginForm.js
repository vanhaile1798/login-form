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
      <div className="form-wrapper">
        <div className="img-wrapper">
          <img
            src="https://images.unsplash.com/photo-1550852355-d04aff81523b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9"
            alt=""
          />
        </div>
        <form onSubmit={this.onSubmit}>
          <label>Username or Email address</label>
          <input
            type="text"
            className="user-pass"
            name="username"
            onChange={this.onHandleChange}
          />
          <label>Password</label>
          <input
            type="password"
            className="user-pass"
            name="password"
            onChange={this.onHandleChange}
          />
          <div className="btn-group">
            <div className="checkbox">
              <input
                type="checkbox"
                name="rememberme"
                onChange={this.onHandleChange}
              />{" "}
              Remember me
            </div>
            <button className="login-btn">Login</button>
          </div>
        </form>
        <div className="lost-password link">
          <a href="/">Lost your password?</a>
        </div>
        <div className="link">
          <a href="/"><FontAwesomeIcon icon='arrow-left'/>{' '}Back to uiCookies</a>
        </div>
      </div>
    );
  }
}

export default LoginForm;
