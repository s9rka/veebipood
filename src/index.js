import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// kommentaar
// ctrl + ä kui aktiveerin koodi

// package.json koodilõikude kogumik

// React versioon 15 -> 17
// package.json failis muudan ära 15 asemel 17
// ja kirjutan cmd-sse "npm install"

// package-lock-json -> detailvaade
// seda ei muudeta

// .gitignore -> mida ma githubi üles ei pane
// node_modules ei lähe, sest liiga suur
//  lihtsasti genereeritav

// node_module -> kõik erinevad koodilõigud, mida React vajab

// public -> pildid, assets

// src -> kood - .js ja .css
