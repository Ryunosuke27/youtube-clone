import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Route,BrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import {CookiesProvider} from 'react-cookie';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <Route exact path = "/" component= {Login}/>
        <Route exact path = "/youtube" component={App}/>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
