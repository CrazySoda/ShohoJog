import React, { Fragment, useState } from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import { toast } from "react-toastify";


const Login = ({ setAuth }) => {
  // State to hold form data
  const [formData, setFormData] = useState({
    e_mail: '',
    user_password: ''
  });
  // onChange function to update state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { ...formData };
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const parseRes = await response.json();
      if (parseRes.jwtToken) {
        localStorage.setItem('token', parseRes.jwtToken);
        setAuth(true);
        toast.success('Login Successful');
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <Fragment>
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className="login-input"
            type="email"
            name="e_mail"
            placeholder="Email"
            onChange={handleChange}
            value={formData.e_mail}
            required
          />
          <input
            className="login-input"
            type="password"
            name="user_password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.user_password}
            required
          />
          <button className="login-button" type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/registration">Register</Link></p>
      </div>
    </Fragment>
  );
};

export default Login;
