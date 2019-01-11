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

// Objeto de shelfs pre definidas
const Shelfs = [{
  id: 1,
  name: 'currentlyReading',
  label: 'Currently Reading'
},{
  id: 2,
  name: 'wantToRead',
  label: 'Want to Read'
},{
  id: 3,
  name: 'read',
  label: 'Read'
}]


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
                {Shelfs.map((shelf) => (
                  <Shelf
                  key={shelf.id}
                  title={shelf.label}
                  booksOfShelf={getBooksByShelf(shelf.name, props.books)}
                  moveBooks ={ props.moveBooks }
                  />
                ))}
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