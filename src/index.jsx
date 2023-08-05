import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'

const matomo = createInstance({
  urlBase: 'https://analytics.ehaupt.de',
  siteId: 1,
  heartBeat: { // optional, enabled by default
    active: true, // optional, default value: true
    seconds: 10 // optional, default value: `15
  },
  configurations: { // optional, default value: {}
    // any valid matomo configuration, all below are optional
    disableCookies: true,
  }
});

ReactDOM.render(
  <React.StrictMode>
    <MatomoProvider value={matomo}>
      <App />
    </MatomoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
