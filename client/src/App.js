import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// page links
import Home from './pages/Home';
import Adopt from './pages/Adopt';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import DogCategory from './pages/DogCategory';

// component links
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


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

          <Route
            path="/signin"
            element={<SignIn />}
          />

          <Route
            path="/signup"
            element={<SignUp />}
          />

          <Route
            path="/dogcategory"
            element={<DogCategory />}
          />

        </Routes>

        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
