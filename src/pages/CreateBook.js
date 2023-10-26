import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

function CreateBook() {
  const [errorMessage, setErrorMessage] = useState('');
  const [book, setBook] = useState({
    title: '',
    author: '',
    isbn: '',
    genre: '',
    availability: true,
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Book data to be sent:', book);
      const response = await fetch('https://springbootlibrarymanagement-production.up.railway.app/books/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });

      if (response.status === 201) {
        // The book was created successfully
        setErrorMessage('Book Created Successfully');
        // You can add code here to handle the successful creation, e.g., redirect to another page
      } else {
        // Handle errors or display error messages
        setErrorMessage('Book Creation failed, please fill all fields correctly');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create a Book</h1>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Author</label>
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>ISBN</label>
        <input
          type="text"
          name="isbn"
          value={book.isbn}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          value={book.genre}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button type="submit">Create Book</button>
      </div>
      {errorMessage && (
        <p className="alert alert-error">
          <span className="icon__wrapper">
            <span>!</span>
          </span>
          {errorMessage}
        </p>
      )}
      <Link to="/librarianbooks" className="back-link">Back to Books</Link>
    </form>
  );
}

export default CreateBook;
