import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './CSS/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> // used here to ensure routing works on everything inside 
      <App />   // ... in this case, the whole app
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
