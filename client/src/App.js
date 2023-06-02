import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import Adopt from './pages/Adopt';
import Contact from './pages/Contact';
import Donate from './pages/Donate';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/adopt"
            element={<Adopt />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/donate"
            element={<Donate />}
          />
        </Routes>

        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
