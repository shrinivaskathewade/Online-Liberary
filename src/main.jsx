import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import BrowseBooks from './pages/BrowseBooks'
import AddBook from './pages/AddBook'
import BookDetails from './pages/BookDetails'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Error from './Components/error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },

      {
        path: 'books/:category',
        element: <BrowseBooks />
      },

      {
        path: 'book/:id',
        element: <BookDetails />
      },

      {
        path: 'books',
        element: <BrowseBooks />
      },

      {
        path: 'add-book',
        element: <AddBook />
      }, 
      { path: '*', 
        element: <Error /> 
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router} />
</Provider>
)
