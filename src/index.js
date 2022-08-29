import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import registerServiceWorker from "./registerServiceWorker";
import { Auth0Provider } from '@auth0/auth0-react';
render(

  <Auth0Provider
    domain="<domain-name>"
    clientId="<client_id>"
    redirectUri={window.location.origin + "/home"}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// registerServiceWorker();