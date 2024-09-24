// src/Login.js
import React, { useState } from 'react';
import './Login.css'; // Import CSS file for styling

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState(''); // Initialize as empty
  const [password, setPassword] = useState(''); // Initialize as empty
  const [error, setError] = useState(''); // State for handling errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const success = await onLogin(username, password); // Assuming onLogin returns a boolean

    if (success) {
      // Reset fields only on successful login
      setUsername('');
      setPassword('');
      setError(''); // Clear any previous error messages
    } else {
      setError('Invalid username or password'); // Set an error message
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="login-input"
          autoComplete="off" // Prevent browser autofill
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
          autoComplete="off" // Prevent browser autofill
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
