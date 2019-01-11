import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Book from '../books/books'

export default class SearchBooks extends Component {

  constructor(props){
    super(props)
    this.state = {
      booksSearch: [],
      searchValue: ''
    }
  }

  /**
  ** Author: Robson Junior
  ** Summary: Funcao responsavel por fazer o search dos livros a cada alteracao no input
  * tambem faz tratamento caso o retorno da API nao seja satisfatorio para o componente
  */
  searchBook = () => {
    const { searchValue } = this.state
   if(searchValue){
      BooksAPI.search(`${searchValue}`)
      .then((booksSearch) =>{
        if(booksSearch.length){
          this.setState(() => ({
            booksSearch
          }))
        }else {
          this.setState(() => ({
            booksSearch: []
          }))
        }
      })
    } else{
      this.setState({
        booksSearch: []
      })
    }
  }
  /**
  ** Author: Robson Junior
  ** Summary: Funcao responsavel por tratar todo evento de mudanca do input, atualizando o
  * state de search
  */
  handleChange = (e) => {
    const searchValue = e.target.value
    this.setState(() => ({
      searchValue
    }))
    // Apos setar o state, chama a api de busca
    this.searchBook()
  }
  

  render() {
    return (
      <div className="search-books">
      <div className="search-books-bar">
      <Link to='/' className='close-search'> Close </Link>
        <div className="search-books-input-wrapper">
          <input type="text" autoFocus placeholder="Search by title or author" value={this.state.searchValue} onChange={(e) => this.handleChange(e)}/>
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