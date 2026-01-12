import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
       <nav>
        <Link to="/">Home</Link>
        <Link to="/books">Browse</Link> 
        <Link to="/add-book">Add Book</Link>
      </nav>
    </div>
  )
}

export default Navbar;
