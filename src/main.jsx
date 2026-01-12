import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import BrowseBooks from './pages/BrowseBooks'
import AddBook from './pages/AddBook'

const router = createBrowserRouter([
  {
    path : "",
    element : <App />
  },
  { path: '/',
     element: <Home /> 
    },

  { path: '/books',
    element: <BrowseBooks /> 
  },

  { path: '/add-book',
     element: <AddBook /> 
    },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
