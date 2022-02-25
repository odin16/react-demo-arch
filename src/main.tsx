import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import Dashboard from './modules/Dashboard';
import Users from './modules/Users';
import { StoreProvider } from './utils';

const modules = [Dashboard, Users];
const stores = modules.flatMap(module => module?.stores || []);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StoreProvider stores={stores}>
        <App modules={modules} />
      </StoreProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
