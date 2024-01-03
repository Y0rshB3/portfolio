import React from 'react';
import ReactDOM from 'react-dom/client';
import Page404 from './components/404/Page404';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page404 />
  </React.StrictMode>
);