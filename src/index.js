import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { BrowserRouter }from 'react-router-dom'

function Root() {
  return (
    // <h1>Hello from Root</h1>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
  document.getElementById('root')
);

