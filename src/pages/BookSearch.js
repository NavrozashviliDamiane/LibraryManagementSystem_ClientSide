import React, { useState } from "react";
import axios from "axios";

function BookSearch() {
  const [searchCriteria, setSearchCriteria] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = () => {
    // Make a GET request to search for books by title
    axios
      .get(
        `https://springbootlibrarymanagement-production.up.railway.app/books/title/${searchCriteria}`
      )
      .then((response) => {
        // Handle the response data and update the search results
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error("Error searching for books:", error);
        setErrorMessage("Error searching for books. Please try again.");
      });
  };

  return (
    <div>
      <h2>Search Books by Title</h2>
      <input
        type="text"
        value={searchCriteria}
        onChange={(e) => setSearchCriteria(e.target.value)}
        placeholder="Enter title to search"
      />
      <button onClick={handleSearch}>Search</button>
      {errorMessage && <p className="alert alert-error">{errorMessage}</p>}
      <div className="search-results">
        {searchResults.map((book) => (
          <div key={book.id}>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Availability: {book.availability ? "Available" : "Not Available"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookSearch;
