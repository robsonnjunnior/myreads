import React from 'react';
import Book from '../books/books'

// componente stateless que monta as shelfs
const shelf = (props) => (
    <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        <Book books={props.booksOfShelf} moveBooks={props.moveBooks}/>
      </ol>
    </div>
  </div>
);

export default shelf;
