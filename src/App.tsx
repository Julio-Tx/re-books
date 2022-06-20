import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ToastContainer,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import ProductPage from './pages/ProductPage';

import GlobalStyle from './styles/GlobalStyle';
import Register from './pages/Register';
import Login from './pages/Login';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Header />
                <Home />

              </>
            )}
          />
          <Route
            path="/checkout"
            element={(
              <>
                <Header />
                <Checkout />
              </>
            )}
          />
          <Route
            path="/product/:id"
            element={(
              <>
                <Header />
                <ProductPage />
              </>
            )}
          />
          <Route
            path="/register"
            element={(
              <>
                <Register />
                <ToastContainer autoClose={3000} />
              </>
            )}
          />
          <Route
            path="/login"
            element={(
              <>
                <Login />
                <ToastContainer autoClose={3000} />
              </>
            )}
          />
          <Route
            path="/user"
            element={(
              <>
                <User />
                <ToastContainer autoClose={3000} />
              </>
            )}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
