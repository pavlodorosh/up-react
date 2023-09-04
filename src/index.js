import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Redux2/components/App';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './Redux2/reducers'
import initialState from './Redux2/store/initialState';

import './index.css';


const store = configureStore({ reducer: rootReducer, preloadedState: initialState });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
)
