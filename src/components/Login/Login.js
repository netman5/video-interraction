import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './login.css';

async function loginUser(credentials) {
  return fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => data.json());
}

export default function Login({ setToken }) {
  const initVal = {
    username: '',
    password: '',
  };

  const [values, setValues] = useState(initVal);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.username && !values.password) {
      usernameRef.current.style.border = '1px solid red';
      passwordRef.current.style.border = '1px solid red';
      return;
    }
    const token = await loginUser({
      username: initVal.username,
      password: initVal.password,
    });
    setToken(token);
    window.history.pushState({}, '', '/');
    window.location.reload();
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <p>Username</p>
          <input type="text" ref={usernameRef} onChange={handleChange} value={values.username} name="username" placeholder="Enter username" />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input type="password" ref={passwordRef} onChange={handleChange} value={values.password} name="password" placeholder="Enter password" />
        </label>
        <div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
