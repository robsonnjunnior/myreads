import React, { Component } from 'react';

export default class books extends Component {

  render() {
    
    const handleChange = (e) => {
      console.log(e.target.value)
      //this.props.moveBooks(book, e.target.value)
    }

    return (
      this.props.books.map(book => (
        <li key={book.title}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
            <div className="book-shelf-changer">
              <select key={book.title} value={book.shelf} onChange={(e) => handleChange(e)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading" >Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read" >Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    ))
    )
  }
}