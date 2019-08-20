import React from 'react'
import { graphql } from 'react-apollo';
import { getSingleBookQuery } from '../queries/queries';

const BookDetails = (props) => {
  const { book } = props.data
  return book ? (
    <div id="book-details">
      <h2>{book.name}</h2>
      <p>{book.genre}</p>
      <p>{book.author.name}</p>
      <p>All Books by this author:</p>
      <ul>
        {book.author.books.map(book => {
          return <li key={book.id}>{book.name}</li>
        })}
      </ul>
    </div>
  ) : (<div id="book-details">
    No book selected...
  </div>)
}

export default graphql(getSingleBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails);