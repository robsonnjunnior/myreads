import React, { Component } from 'react';
const IMAGE_NOT_AVAILABLE = 'http://books.google.com/books/content?id=NLK2AAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'

export default class books extends Component {
    
  handleChange = (e, book) => {
    this.props.moveBooks(book, e.target.value)
  }

  getShelfOfBookOnShelf = (book) => {
    return this.props.booksOnShelfs.filter((value) => value.id === book)
  }

  renderBooks = (book) => {
    
    const imagem = book.imageLinks && book.imageLinks.thumbnail
    ? book.imageLinks.thumbnail
    : IMAGE_NOT_AVAILABLE;

    if (typeof this.props.booksOnShelfs !== 'undefined'){
        const bookShelf = this.getShelfOfBookOnShelf(book.id)
  
        if(bookShelf.length !== 0){
          book.shelf = bookShelf[0].shelf
        }else {
          book.shelf = 'none'
        }
    }
  
    return(
      <li key={book.id}>
      <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imagem})`}}></div>
          <div className="book-shelf-changer">
            <select key={book.id} value={book.shelf} onChange={(e) => this.handleChange(e, book)}>
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
    )
  }

  render() {
    return (
      this.props.books.map(book => (
        this.renderBooks(book)
    ))
    )
  }
}