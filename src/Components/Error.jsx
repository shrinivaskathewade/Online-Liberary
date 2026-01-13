import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Error = () => {
    const location = useLocation();
  return (
    <div>
        <div className="notfound-page">
      <h2>404 - Page Not Found</h2>
      <p>The requested URL <code>{location.pathname}</code> does not exist.</p>
      <Link to="/">Go Back Home</Link>
    </div>
    </div>
  )
}

export default Error
