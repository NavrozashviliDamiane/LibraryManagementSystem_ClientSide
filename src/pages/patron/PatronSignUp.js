import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";


function PatronSignUp() {
const [errorMessage, setErrorMessage] = useState('');
  const [patron, setPatron] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    contactInfo: '',
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatron({
      ...patron,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log('Patron data to be sent:', patron);
      const response = await fetch('https://springbootlibrarymanagement-production.up.railway.app/patrons/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patron),
      });

      if (response.status === 201) {
        // The patron was created successfully
        setErrorMessage('Patron Created Successfully, please sign in');
        // You can add code here to handle the successful creation, e.g., redirect to another page
      } else {
        // Handle errors or display error messages
        setErrorMessage('Sign Up failed please fill all fields correctly');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Patron Sign Up</h1>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={patron.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={patron.password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={patron.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={patron.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>contactInfo</label>
        <input
          type="text"
          name="contactInfo"
          value={patron.contactInfo}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button type="submit">Create Patron</button>
      </div>
      {errorMessage && (
        <p className="alert alert-error">
          <span className="icon__wrapper">
            <span>!</span>
          </span>
          {errorMessage}
          
        </p>
      )}
      <Link to="/patronlogin" className="signup-link">Sign in</Link>
      
    </form>
  );
}

export default PatronSignUp;
