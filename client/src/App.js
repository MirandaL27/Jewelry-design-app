import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Homepage from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Component from './pages/Component';
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/components' component={Component} />
        </Switch>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
