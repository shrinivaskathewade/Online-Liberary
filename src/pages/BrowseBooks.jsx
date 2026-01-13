
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { books } from '../data/books';

const BrowseBooks = () => {
  const { category } = useParams();
  const [search, setSearch] = useState('');

  // Filter books by category and search
  const filteredBooks = books.filter((b) => {
    const matchCategory = category ? b.category === category : true;
    const matchSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="browse-page">
      <h2 className="page-title">
        Browse Books {category ? `- ${category}` : ''}
      </h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {filteredBooks.length === 0 && <p>No books found.</p>}

      <div className="books-container">
        {filteredBooks.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.Cover} alt={book.title} className="book-image" />
            <div className="book-content">
              <h3 className="book-title">{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Category:</strong> {book.category}</p>
              <p><strong>Rating:</strong> {book.rating}</p>
              <p>{book.description}</p>
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

export default BrowseBooks;

