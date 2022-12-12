import React, { useState } from "react"
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/Mutations';
import Auth from '../utils/Auth';
import Signup from '../pages/Signup';

const Login = (props) => {
  let [formState, setFormState] = useState({
    email: '',
    password: ''
  });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setFormState(formState = { email: event.target.email.value, password: event.target.password.value })

    console.log('running')

    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.log(formState)
      console.error(e);
    }
  }
  // if (authMode === 'signin') {}
  return (
    <div className="Auth-form-container">
      <form name="login" className="Auth-form" onSubmit={handleFormSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <span className="link-primary" onClick={Signup}>
              Sign Up
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              name='email'
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              name='password'
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
      {error && <div>Login failed</div>}
    </div>
  );
};

export default Login;
