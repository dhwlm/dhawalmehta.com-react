import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import 'imagesloaded';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { HashRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

ReactDOM.render(
  <HashRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </HashRouter>
  , document.getElementById('root'));
  registerServiceWorker();
