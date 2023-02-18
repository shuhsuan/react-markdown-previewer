import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root')); //there's a div in html called root which this renders to
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//This js takes what to render and where to render