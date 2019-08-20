import React, { createContext, useState } from 'react';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import { getBooksQuery, addBookMutation } from '../queries/queries';


export const BookContext = createContext();

const BookContextProvider = (props) => {

  const [books, setBooks] = useState({
    name: '',
    genre: '',
    authorId: ''
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBookMutation({
      variables: {
        name: books.name,
        genre: books.genre,
        authorId: books.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    })

  }
  const handleChange = (event) => {
    event.persist();
    setBooks(books => ({ ...books, [event.target.name]: event.target.value }));
  }

  return (
    <BookContext.Provider value={{ books, setBooks, handleChange, handleSubmit }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default compose(
  graphql(getBooksQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(BookContextProvider);