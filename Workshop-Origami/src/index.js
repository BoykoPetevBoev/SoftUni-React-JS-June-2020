import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './navigation';
import Authorization from './Authorization';

ReactDOM.render(
  <React.StrictMode>
    <Authorization>
      <Navigation />
    </Authorization>
  </React.StrictMode>,
  document.getElementById('root')
);
