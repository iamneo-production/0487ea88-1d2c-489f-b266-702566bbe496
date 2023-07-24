import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleChange = async (e) => {
    e.preventDefault();
    // Perform login authentication logic here

    // Check if login credentials are valid
    if (loginEmail.trim() === '' || loginPassword.trim() === '') {
      alert('Please enter valid login credentials.');
      return;
    }

    // Prepare the data for the login request
    const data = {
      Email: loginEmail,
      Password: loginPassword,
    };

    try {
      // Make the login request using Axios
      const response = await axios.post('http://127.0.0.1:9999/login', data);

      // Handle successful login response (optional)
      console.log(response.data); // You can do something with the response data here

      // Navigate to the authenticated page on successful login (optional)
      // Add your navigation logic here if needed
    } catch (error) {
      // Handle error
      if (error.response) {
        // The request was made, but the server responded with an error status code
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made, but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="login-form" onSubmit={handleChange}>
          <h2>Login</h2>
          <input
            className="in"
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
          <input
            className="in"
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
          <button type="submit" className="b">
            Login
          </button>
        </form>
        <h2>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </h2>
      </div>
    </div>
  );
}

export default Login;
