import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='Logo'>
        <h2>Book App Liberary</h2>
      </div>
       <nav>
        <Link to="/">Home</Link>
        <Link to="/books">Browse Books</Link> 
        <Link to="/add-book">Add Book</Link>
      </nav>
    </div>
  )
}

export default Navbar;
