import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ClickableCard from '../components/ClickableCard';
import "./Dashboard.css";
import booksimg from '../assets/books.jpg';
import transactionImg from '../assets/Transactions.png'
import usersImage from '../assets/personas.png'
import { Link, useNavigate } from 'react-router-dom';


function Dashboard() {
  const location = useLocation();
  const successMessage = new URLSearchParams(location.search).get('success');
  const [visible, setVisible] = useState(true);

  const linkStyle = {
    textDecoration: "none", // Remove underlines
    color: "inherit", // Inherit the text color
  };

  useEffect(() => {
    
    if (successMessage) {
      // Set a timeout to hide the success message after 2 seconds
      const timeoutId = setTimeout(() => {
        setVisible(false);
      }, 2000);

      // Clear the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [successMessage]);

  const handleCardClick = () => {
    // Handle the card click event here
  };

  return (
    <div>
      <h1>Librarian Dashboard</h1>
      {visible && successMessage && (
        <p className="alert alert-success">
          <span className="icon__wrapper">
            <span>✔</span>
          </span>
          {decodeURIComponent(successMessage)}
          <span className="close">✖</span>
        </p>
      )}

      <div className="card-container">
      <Link to="/librarianbooks" style={linkStyle}>
        <ClickableCard
          imageSrc={booksimg}
          caption="Books"
         
        />
        </Link>

        <Link to="patronusers" style={linkStyle}>
        <ClickableCard
          imageSrc={usersImage}
          caption="Patron Users"
         
        /> </Link>
        <ClickableCard
          imageSrc={transactionImg}
          caption="Transactions"
          onClick={handleCardClick}
        />
      </div>
      {/* Rest of your dashboard content */}
    </div>
  );
}

export default Dashboard;
