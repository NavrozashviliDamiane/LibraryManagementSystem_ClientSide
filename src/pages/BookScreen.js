import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "../components/Ui.css";

import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function BookScreen() {
  const location = useLocation();
  const successMessage = new URLSearchParams(location.search).get("success");
  const [visible, setVisible] = useState(true);
  const [book, setBook] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [updatedBook, setUpdatedBook] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    availability: false,
  });

  const divStyle = {
    width: "500px",
  };

  const linkStyle = {
    textDecoration: "none", // Remove underlines
    color: "inherit", // Inherit the text color
  };

  const { id } = useParams(); // Get the book ID from the URL

  const deleteBook = (bookId) => {
    axios
      .delete(
        `https://springbootlibrarymanagement-production.up.railway.app/books/${bookId}`
      )
      .then((response) => {
        if (response.status === 200) {
          setErrorMessage("Book Deleted Successfully");
          console.log("Book deleted successfully");
        } else {
          // Handle other response statuses as needed
          console.log("Error deleting the book");
        }
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
      });
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

  useEffect(() => {
    // Fetch book details based on the ID from the URL
    axios
      .get(
        `https://springbootlibrarymanagement-production.up.railway.app/books/${id}`
      )
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, [id]);

  const handleCardClick = () => {
    // Handle the card click event here
  };

  const handleUpdate = () => {
    axios
      .put(`https://springbootlibrarymanagement-production.up.railway.app/books/${id}`, updatedBook)
      .then((response) => {
        if (response.status === 200) {
          setErrorMessage("Book Updated Successfully");
          console.log("Book updated successfully");
        } else {
          console.log("Error updating the book");
        }
      })
      .catch((error) => {
        console.error("Error updating book:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setUpdatedBook({
      ...updatedBook,
      [name]: newValue,
    });
  };

  return (
    <div style={divStyle}>
      <div class="ex-11 example">
        <div class="modal">
          <div class="upper">
            <p>{book.title}</p>
          </div>
          <div class="lower">
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p>{book.availability ? "Available" : "Not Available"}</p>

            <div class="actions">
              <button className="delete" onClick={() => deleteBook(book.id)}>
                Delete
              </button>
              <Link to={`/librarianbooks/update/${id}`} style={linkStyle}>
              <button className="cancel">Update</button>
              </Link>
            </div>
          </div>
        </div>
        <Link style={linkStyle} to="/librarianbooks">
          <button className="cancel">Back to Books List</button>
        </Link>
      </div>
      {errorMessage && (
        <p className="alert alert-error">
          <span className="icon__wrapper">
            <span>!</span>
          </span>
          {errorMessage}
        </p>
      )}

<div>
      <h1>Update Book</h1>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={updatedBook.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Author</label>
        <input
          type="text"
          name="author"
          value={updatedBook.author}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          value={updatedBook.genre}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Isbn</label>
        <input
          type="text"
          name="isbn"
          value={updatedBook.isbn}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Availability</label>
        <input
          type="checkbox"
          name="availability"
          checked={updatedBook.availability}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button onClick={handleUpdate}>Update Book</button>
      </div>
      {errorMessage && (
        <p className="alert alert-success">
          <span className="icon__wrapper">
            <span>✔</span>
          </span>
          {errorMessage}
        </p>
      )}
      
    </div>
    </div>
  );
}

export default BookScreen;
