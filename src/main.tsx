import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import './index.css';
import Dashboard from './modules/Dashboard';
import Users from './modules/Users';

const modules = [Dashboard, Users];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RecoilRoot>
        <App modules={modules} />
      </RecoilRoot>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
