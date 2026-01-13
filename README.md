# Online Library System - React Assignment 2

## 📚 Project Overview

This is a **React-based Online Library System** built as part of React Assignment 2 (100 Marks).  
The application allows users to browse books by category, search for books, view detailed information about each book, and add new books using a form with Redux state management.

**Tech Stack:**
- React + React Router
- Redux (for book state management)
- CSS (responsive design, cards, shadows, hover effects)
- Vite (React project setup)

---

## 📝 Features

### 1. Home Page
- Welcome message and list of book categories (Fiction, Non-Fiction, Sci-Fi)
- Display 4 popular books as cards
- Navigation bar links: Home, Browse Books, Add Book
- Modern UI with shadows, hover effects, and responsive layout

### 2. Browse Books Page
- Filter books by category (`/books/:category`)
- Search functionality by **title** or **author**
- Display all book details in card format (image, title, author, category, rating, description)
- "View Details" link for each book

### 3. Book Details Page
- Dynamic route (`/book/:id`) to display detailed info
- Image, title, author, category, rating, description
- "Back to Browse" link
- Modern card with shadow and hover effects

### 4. Add Book Page
- Form to add new books (ID, Title, Author, Category, Rating, Cover Image, Description)
- Form validation to ensure all fields are filled
- Uses **Redux** to manage the book list
- Redirects to Browse Books page after submission

### 5. 404 Page
- Dynamic "Page Not Found" for undefined routes
- Shows invalid URL
- Back to Home button
- No navigation bar

### 6. Styling & UX
- Responsive design for mobile and desktop
- Cards with shadows and hover effects
- Buttons with hover transitions
- Clean, professional developer-themed colors

---


github link :  https://github.com/shrinivaskathewade/Online-Liberary

## 🚀 Setup & Installation

1. **Clone the repository**
```bash
git clone <YOUR_GITHUB_REPO_URL>
cd <REPO_FOLDER>
npm install
npm run dev
 



