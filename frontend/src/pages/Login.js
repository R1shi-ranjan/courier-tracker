import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Make sure to import the CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Keep the role state for potential UI logic
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password || !role) {
      setError('All fields are required');
      return;
    }

    try {
      // Send username, password, and role in the request body
      const response = await axios.post('http://localhost:5000/login', { username, password, role });
      if (response.status === 200) {
        // Redirect based on role (this logic is client-side only)
        navigate(role === 'admin' ? '/admin' : '/track');
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Incorrect username or password.');
      } else {
        setError('Login failed. Please try again later.');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
