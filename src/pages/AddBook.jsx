import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: '',
    title: '',
    author: '',
    category: '',
    rating: '',
    description: '',
    Cover: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !form.id ||
      !form.title ||
      !form.author ||
      !form.category ||
      !form.rating ||
      !form.description ||
      !form.Cover
    ) {
      setError('Please fill all fields');
      return;
    }

    dispatch(addBook({ ...form, id: parseInt(form.id), rating: parseFloat(form.rating) }));
    navigate('/books');
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="ID" name="id" value={form.id} onChange={handleChange} />
        <input type="text" placeholder="Title" name="title" value={form.title} onChange={handleChange} />
        <input type="text" placeholder="Author" name="author" value={form.author} onChange={handleChange} />
        <input type="text" placeholder="Category" name="category" value={form.category} onChange={handleChange} />
        <input type="number" step="0.1" placeholder="Rating" name="rating" value={form.rating} onChange={handleChange} />
        <input type="text" placeholder="Cover Image URL" name="Cover" value={form.Cover} onChange={handleChange} />
        <textarea placeholder="Description" name="description" value={form.description} onChange={handleChange}></textarea>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
