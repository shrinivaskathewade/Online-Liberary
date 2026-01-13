import React from 'react';
import { Link } from 'react-router-dom';
import { books } from '../data/books';

const categories = ['fiction', 'non-fiction', 'sci-fi'];

const Home = () => {
  const popularBooks = books.slice(0, 4);

  return (
    <div className="home">
      <h1 className="home-title">Welcome to the Online Library</h1>

      {/* Categories */}
      <h2 className="section-title">Categories</h2>
      <div className="category-list">
        {categories.map((cat) => (
          <Link key={cat} to={`/books/${cat}`} className="category-card">
            {cat}
          </Link>
        ))}
      </div>

      {/* Popular Books */}
      <h2 className="section-title">Popular Books</h2>
      <div className="books-container">
        {popularBooks.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.Cover} alt={book.title} className="book-image" />
            <div className="book-content">
              <h3 className="book-title">{book.title}</h3>
              <p>Author: {book.author}</p>
              <Link to={`/book/${book.id}`} className="details-link">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
