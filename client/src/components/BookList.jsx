import React, { useState } from 'react';
import { graphql } from 'react-apollo'
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = (props) => {
  const [singleBookId, setSingleBookId] = useState();
  var data = props.data;

  return data.loading ? (
    <div>loading...</div>
  ) :
    (
      <div id="book-list">
        <ul>
          {data.books.map(book => {
            return <li onClick={(e) => { setSingleBookId(book.id) }} key={book.id}>{book.name}</li>
          })}
        </ul>
        <BookDetails bookId={singleBookId} />
      </div>)
}


export default graphql(getBooksQuery)(BookList);