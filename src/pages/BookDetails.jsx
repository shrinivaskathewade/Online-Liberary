import { useParams, Link } from "react-router-dom";
import { books } from "../data/books.js";

 function BookDetails() {
  const params = useParams();

  const book = books.filter((items) => items.id == params.id)[0];

  if (!book) {
    return <h2 style={{ padding: "20px" }}>Book not found</h2>;
  }

  return (
    <div className="book-details-page">
      <div className= "book-image-wrapper">
        <img src= {book.Cover} alt= {book.title} />
      </div>
    
    <div className="book-content">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p>{book.description}</p>

      <Link to="/books">⬅ Back to Browse</Link>
    </div>
    </div>
  );
}

export default BookDetails;
