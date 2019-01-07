import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'

import BookShelf from './components/bookshelf/bookShelf'
import SearchBooks from './components/search/searchBooks'

import * as BooksAPI from './BooksAPI'

export default class App extends React.Component {

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

  handleSelectMoveBooks = (bookChanged, to) => {

    if(!this.state.books.find((value) => value.id === bookChanged.id)){
      bookChanged.shelf = to
      this.setState((currentState) => ({
        books : currentState.books.push(bookChanged)
      }))
    }else {
      this.setState((currentState) => ({
        books : currentState.books.map(book => book.id === bookChanged.id ? ({...book, shelf: to}): book)
      }))
    }
    BooksAPI.update(bookChanged, to)
}

  render() {
    return (
      <div>
        <Route exact path='/' component={() => (
          <BookShelf moveBooks={this.handleSelectMoveBooks} books={this.state.books}/>
        )}/>
         <Route path='/search' component={() => (
          <SearchBooks moveBooks={this.handleSelectMoveBooks} booksOnShelfs={this.state.books}/>
        )}/>
      </div>
    )
  }
}