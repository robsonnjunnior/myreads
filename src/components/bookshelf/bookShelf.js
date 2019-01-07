import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Shelf from '../shelf/shelf'

export default class BookShelf extends Component {
  
  getBooksByShelf(shelf){
    return this.props.books.filter((book)=> book.shelf === shelf)
  }

  render() {
    return (
      <div className="app">          
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>    
                <Shelf 
                  title={'Currently Reading'}
                  booksOfShelf={this.getBooksByShelf('currentlyReading')}
                  moveBooks ={ this.props.moveBooks }
                  />
                <Shelf 
                  title={'Want to Read'} 
                  booksOfShelf={this.getBooksByShelf('wantToRead')}
                  moveBooks ={ this.props.moveBooks }
                  />
                <Shelf 
                  title={'Read'} 
                  booksOfShelf={this.getBooksByShelf('read')}
                  moveBooks ={ this.props.moveBooks }
                  />
              </div>
            </div>
            <div className="open-search">  
                <Link to="/search">Add a Book</Link>
            </div>
          </div>
      </div>
    )
  }
}
