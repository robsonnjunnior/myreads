import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Shelf from '../shelf/shelf'
import * as BooksAPI from '../../BooksAPI'

export default class BookShelf extends Component {

  constructor(props){
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then((books) =>{
        this.setState(() => ({
          books
        }))
      })
  }
  
  getBooksByShelf(shelf){
    return this.state.books.filter((book)=> book.shelf === shelf)
  }
  
  handleSelectMoveBooks = (bookChanged, to) => {
    console.log(bookChanged, to)

    /*this.setState((currentState) => ({
      books: currentState.books.map( book => {
        if(book.title === bookChanged.title){
          book = {...book, shelf : to}
        }
      }) 
    }))*/
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
                  moveBooks ={ this.handleSelectMoveBooks }
                  />
                <Shelf 
                  title={'Want to Read'} 
                  booksOfShelf={this.getBooksByShelf('wantToRead')}
                  moveBooks ={ this.handleSelectMoveBooks }
                  />
                <Shelf 
                  title={'Read'} 
                  booksOfShelf={this.getBooksByShelf('read')}
                  moveBooks ={ this.handleSelectMoveBooks }
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
