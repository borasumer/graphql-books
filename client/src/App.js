import React from 'react';
import BookList from './components/BookList';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AddBook from './components/AddBook';
import BookContextProvider from './contexts/BookContext';



//ApolloClient Setup
const client = new ApolloClient({
  uri: "https://intense-scrubland-62590.herokuapp.com/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BookContextProvider>
        <div id="main">
          <BookList />
          <AddBook />
        </div>
      </BookContextProvider>
    </ApolloProvider>

  );
}

export default App;
