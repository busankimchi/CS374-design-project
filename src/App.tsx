import { Home } from 'pages/Home';
import {Tutorial1} from 'pages/Tuturial1'
import { Router } from 'react-router-dom';
import './utils/firebase';
import { createBrowserHistory } from 'history';
// import { uploadDummyQuestions, uploadDummyTopics, uploadDummySearchHistory } from 'utils/uploadDummyData';

const history = createBrowserHistory();

const App = () => {
  // uploadDummyQuestions();
  // uploadDummyTopics();
  // uploadDummySearchHistory();

  return (
    <Router history={history}>
      <Home />
    </Router>
  );
};

export default App;
