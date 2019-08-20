import React, { useContext } from 'react';
import { graphql } from 'react-apollo'
import { getAuthorsQuery } from '../queries/queries';
import { BookContext } from '../contexts/BookContext';

const AddBook = (props) => {
  const { handleChange, handleSubmit } = useContext(BookContext);
  const authors = props.data.authors;
  //console.log(books)
  return (
    <form id="add-book">
      <div id="field">
        <label>Book name:</label>
        <input type="text" name="name" onChange={(event) => { handleChange(event) }} />
      </div>

      <div id="field" >
        <label>Genre:</label>
        <input type="text" name="genre" onChange={(event) => { handleChange(event) }} />
      </div>

      <div id="field">
        <label>Author:</label>
        <select name="authorId" onChange={(event) => { handleChange(event) }}>
          <option>Select Author</option>
          {props.data.loading ? (<option>Loading...</option>) : (authors.map(author => {
            return <option key={author.id} value={author.id}>{author.name}</option>
          }))}
        </select>
      </div>
      <button onClick={(e) => handleSubmit(e)}>+</button>
    </form>
  );
}

export default graphql(getAuthorsQuery)(AddBook);