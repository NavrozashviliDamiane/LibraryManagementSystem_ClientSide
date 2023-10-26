import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Login.css";

function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://springbootlibrarymanagement-production.up.railway.app/librarians/all`);

      if (response.data) {
        // Check if a librarian with the specified username exists
        const librarianExists = response.data.some(librarian => librarian.username === username);

        if (librarianExists) {
          // User exists, redirect to the dashboard
          navigate('/dashboard?success=Signed%20in'); // Navigate to the dashboard page
        } else {
          // Authentication failed, set an error message
          setErrorMessage('Authentication failed. Please check your credentials OR SIGN UP');
        }
      } else {
        // Authentication failed, set an error message
        setErrorMessage('Authentication failed. Please try again later.');
      }
    } catch (error) {
      // Handle request error and set an error message
      setErrorMessage('An error occurred while signing in. Please try again later.');
    }
  }

  return (
    <div>
     
      <h1>Sign In as Librarian</h1>
      <form onSubmit={handleSignIn}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <Link to="/librariansignup" className="signup-link">Sign Up</Link>

      
      {errorMessage && (
        <p className="alert alert-error">
          <span className="icon__wrapper">
            <span>✖</span>
          </span>
          {errorMessage}
          
        </p>
      )}
    </div>
  );
}

export default SignIn;
