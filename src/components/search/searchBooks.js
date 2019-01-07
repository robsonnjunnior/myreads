import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Book from '../books/books'

export default class SearchBooks extends Component {

  constructor(props){
    super(props)
    this.state = {
      booksSearch: []
    }
  }

  handleChange = (e) => {
    if(e.target.value){
      BooksAPI.search(`${e.target.value}`)
      .then((booksSearch) =>{
        this.setState(() => ({
          booksSearch
        }))
      })
    } else{
      this.setState({
        booksSearch: []
      })
    }
  }
  

  render() {
    return (
      <div className="search-books">
      <div className="search-books-bar">
      <Link to='/' className='close-search'> Close </Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input type="text" placeholder="Search by title or author" onChange={(e) => this.handleChange(e)}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          <Book books={this.state.booksSearch} moveBooks={this.props.moveBooks} booksOnShelfs={this.props.booksOnShelfs} />
        </ol>

      </div>
    </div>
    )
  }
}