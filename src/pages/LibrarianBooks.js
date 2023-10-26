import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../components/Ui.css';
import { Link } from 'react-router-dom';

function LibrarianBooks() {
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]); // State for search results
  const [searchCriteria, setSearchCriteria] = useState('');

  const linkStyle = {
    textDecoration: "none", // Remove underlines
    color: "inherit", // Inherit the text color
  };

  useEffect(() => {
    // Make an HTTP GET request to fetch data from the provided endpoint
    axios
      .get('https://springbootlibrarymanagement-production.up.railway.app/books/all')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Filter the data based on the search criteria as the user types
    const results = data.filter((item) =>
      item.title.toLowerCase().includes(searchCriteria.toLowerCase())
    );
    setSearchResults(results);
  }, [searchCriteria, data]); // Watch for changes in searchCriteria and data

  return (
    <div className="lud-5 lud">
      <p className="sub-title">Enjoy our book collections</p>
      <div className="ex-4 example">
        <Link style={linkStyle} to="/createbook">
          <button className="b-1">Create New Book</button>
        </Link>
        <div>
          <input
            type="text"
            placeholder="Search by title"
            value={searchCriteria}
            onChange={(e) => setSearchCriteria(e.target.value)}
          />
        </div>
      </div>

      <div className="ex-5 example">
        {searchResults.length > 0
          ? searchResults.map((item, index) => (
              <div key={item.id} className={`card c-${index + 1}`}>
                <Link style={linkStyle} to={`${item.id}`}>
                  <p className="revenue">{item.title}</p>
                  <p className="label">Author: {item.author}</p>
                  <div className="line"></div>
                  <p className="sales">
                    {item.availability ? 'Available' : 'Not Available'}
                  </p>
                </Link>
              </div>
            ))
          : data.map((item, index) => (
              <div key={item.id} className={`card c-${index + 1}`}>
                <Link style={linkStyle} to={`${item.id}`}>
                  <p className="revenue">{item.title}</p>
                  <p className="label">Author: {item.author}</p>
                  <div className="line"></div>
                  <p className="sales">
                    {item.availability ? 'Available' : 'Not Available'}
                  </p>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}

export default LibrarianBooks;
