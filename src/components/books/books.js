import React, { Component } from 'react';
import ShelfChanger from './shelfChanger'

export default class books extends Component {
    
  /*handleChange = (bookChanged, to) => {
    this.props.moveBooks(bookChanged, to)
  }*/
  render() {

    return (
      this.props.books.map(book => (
        <li key={book.title}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
            <ShelfChanger book={book} handleBookChange={this.props.moveBooks}/>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    ))
    )
  }
}