import React, { Component, Fragment } from "react";

// import "../styles/styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ForgotPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recoveryemail: ""
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onHandleChange(event) {
    let { name, value } = event.target;

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
        <form className="account-recovery-form" onSubmit={this.onSubmit}>
          <h3 className='account-recovery-form__title'>Forgot Password</h3> 
          <label className="account-recovery-form__input-name">Please enter your email and we'll send you instructions on how to reset your password</label>
          <input
            type="email"
            className="account-recovery-form__input"
            name="recoveryemail"
            onChange={this.onHandleChange}
            placeholder='Email'
          />
          <div className="account-recovery-form__btn-group">
            <button className="account-recovery-form__submit-btn">Submit</button>
          </div>
        </form>
        <Link className="account-recovery-form__link" to='/login'><FontAwesomeIcon icon='arrow-left' />{' '}Back to Login</Link>
      </Fragment>
    );
  }
}

export default ForgotPasswordForm;
