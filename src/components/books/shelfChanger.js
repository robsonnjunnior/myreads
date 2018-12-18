import React, {
  Component
} from 'react';

export default class shelfChanger extends Component {
 handleChange = (e) => {
    this.props.handleBookChange(this.props.book, e.target.value)
  }

  render() {

    const { book } = this.props

    return (
      <div className="book-shelf-changer">
      <select key={book.title} value={book.shelf} onChange={this.handleChange}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading" >Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read" >Read</option>
        <option value="none">None</option>
      </select>
    </div>
    )
  }
}