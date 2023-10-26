import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function UpdateBook() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [updatedBook, setUpdatedBook] = useState({
    title: "",
    author: "",
    genre: "",
    availability: false,
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Fetch book details based on the ID from the URL
    axios
      .get(`https://springbootlibrarymanagement-production.up.railway.app/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, [id]);

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
      <Link to={`/book/${id}`}>Back to Book Details</Link>
    </div>
  );
}

export default UpdateBook;
