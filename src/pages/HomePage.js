import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ClickableCard from "../components/ClickableCard";
import "./Dashboard.css";
import patronImage from "../assets/patron.jpg";
import librarianImage from "../assets/Librarian.jpg";
import { Link, useNavigate } from 'react-router-dom';


function HomePage() {
  const location = useLocation();

  const linkStyle = {
    textDecoration: "none", // Remove underlines
    color: "inherit", // Inherit the text color
  };

  const handleCardClick = () => {
    // Handle the card click event here
  };

  return (
    <div>
      <h1>Welcome to the Library Management System</h1>

      <div className="card-container">
      <Link to="/patronlogin" style={linkStyle}>
        <ClickableCard
          imageSrc={patronImage}
          caption="Patron User" 
          
        /></Link>
         <Link to="/librarianlogin" style={linkStyle}>
        <ClickableCard
          imageSrc={librarianImage}
          caption="Librarian User"
          
        /></Link>
      
      </div>
    </div>
  );
}

export default HomePage;
