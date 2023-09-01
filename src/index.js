import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './Hooks/App';
// import reportWebVitals from './reportWebVitals';
// console.log(React.version);
import App from './Redux/App';
import store from './Redux/app/store';
import { Provider } from 'react-redux';
// import * as serviceWorker from ''

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
