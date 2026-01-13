import React from 'react';
import { Link } from 'react-router-dom';
import { books } from '../data/books';

const categories = ['fiction', 'non-fiction', 'sci-fi'];

const Home = () => {
 
  const popularBooks = books.slice(0, 4);

  return (
    <div>
      <h1>Welcome to the Online Library</h1>

      
      <h2>Categories</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <Link to={`/books/${cat}`}>{cat}</Link>
          </li>
        ))}
      </ul>

      
      <h2>Popular Books</h2>
      {popularBooks.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <Link to={`/book/${book.id}`}>View Details</Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;

