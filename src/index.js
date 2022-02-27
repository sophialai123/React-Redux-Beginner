import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//npm install redux react - redux @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";

// determin which component is access to the store.
import { Provider } from 'react-redux';

import userReducer from "./components/user";
import themeReducer from "./components/theme";


//create a store, a collection of reducer(function,takes values and actions and return a new value )
const store = configureStore({
  reducer: {
    user: userReducer, // pass userReducer
    theme: themeReducer,

  },





});


ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

