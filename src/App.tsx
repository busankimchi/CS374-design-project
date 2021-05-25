import React from 'react';
import { Home } from 'pages/Home';
import { Router } from 'react-router-dom';
import './utils/firebase';
import { createBrowserHistory } from 'history';
// import logo from './logo.svg';
// import { uploadDummyQuestion } from './utils/uploadDummyData'

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Home />
    </Router>
  );
};

export default App;
