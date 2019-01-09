import React from 'react';
import { Link } from 'react-router-dom'
import Shelf from '../shelf/shelf'

/**
 ** Author: Robson Junior
 ** Summary: Function responsavel por receber os parametros de shelfs e array de books
 * devolvendo de forma organizada para o Component BookShelf organizar
 * @param {string} shelf
 * @param {Object[]} book
 */
const getBooksByShelf = (shelf, books) => {
  return books.filter((book)=> book.shelf === shelf)
}

/**
 ** Author: Robson Junior
 ** Summary: Componente stateless que monta o index do projeto
 * organizando os books de acordo com suas shelfs
 * @param {Object} props
 */
const BookShelf = (props) => {
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
                  booksOfShelf={getBooksByShelf('currentlyReading', props.books)}
                  moveBooks ={ props.moveBooks }
                  />
                <Shelf 
                  title={'Want to Read'} 
                  booksOfShelf={getBooksByShelf('wantToRead', props.books)}
                  moveBooks ={ props.moveBooks }
                  />
                <Shelf 
                  title={'Read'} 
                  booksOfShelf={getBooksByShelf('read', props.books)}
                  moveBooks ={ props.moveBooks }
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

export default BookShelf