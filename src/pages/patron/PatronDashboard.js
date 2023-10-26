import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ClickableCard from '../../components/ClickableCard';
import "./Dashboard.css";

function PatronDashboard() {
  const location = useLocation();
  const successMessage = new URLSearchParams(location.search).get('success');
  const [visible, setVisible] = useState(true);

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
      <h1> Patron Dashboard</h1>
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
        <ClickableCard
          imageSrc="https://picsum.photos/id/287/250/300"
          caption="Card 1"
          onClick={handleCardClick}
        />
        <ClickableCard
          imageSrc="https://picsum.photos/id/475/250/300"
          caption="Card 2"
          onClick={handleCardClick}
        />
        <ClickableCard
          imageSrc="https://picsum.photos/id/678/250/300"
          caption="Card 3"
          onClick={handleCardClick}
        />
      </div>
  
    </div>
  );
}

export default PatronDashboard;
