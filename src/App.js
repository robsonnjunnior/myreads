import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'

import BookShelf from './components/bookshelf/bookShelf'
import SearchBooks from './components/search/searchBooks'

class BooksApp extends React.Component {

  render() {
    return (
      <div>
        <Route exact path='/' component={BookShelf}/>
        <Route path='/search' component={ SearchBooks} />
        
      </div>
    )
  }
}
export default BooksApp
