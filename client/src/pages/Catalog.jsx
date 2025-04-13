import { useEffect, useState } from "react";

export default function Catalog() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/api/books")
      .then(res => res.json())
      .then(setBooks);
  }, []);

  return (
    <div>
      <h2>Каталог литературы</h2>
      <ul>
        {books.map((book, i) => (
          <li key={i}>
            <strong>{book.title}</strong> — {book.author}, {book.year} ({book.genre})
          </li>
        ))}
      </ul>
    </div>
  );
}