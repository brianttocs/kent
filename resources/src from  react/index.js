import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import './App.css';

import '../styles/css/linearicons.css';
import '../styles/css/linearicons.css';
import '../styles/css/font-awesome.min.css';
import '../styles/css/themify-icons.css';
import '../styles/css/bootstrap.css';
import '../styles/css/owl.carousel.css';
import '../styles/css/nice-select.css';
import '../styles/css/nouislider.min.css';
import '../styles/css/ion.rangeSlider.css';
import '../styles/css/ion.rangeSlider.skinFlat.css';
import '../styles/css/magnific-popup.css';
import '../styles/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ProductProvider} from './components/context';

ReactDOM.render(
  <ProductProvider>
      <Router>
        <App />
      </Router>
  </ProductProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
