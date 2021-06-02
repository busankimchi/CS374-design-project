import { Home } from 'pages/Home';
import { Router } from 'react-router-dom';
import './utils/firebase';
import { createBrowserHistory } from 'history';
import { uploadDummyQuestions, uploadDummyTopics } from 'utils/uploadDummyData';

const history = createBrowserHistory();

const App = () => {
  // uploadDummyQuestions();
  // uploadDummyTopics();

  return (
    <Router history={history}>
      <Home />
    </Router>
  );
};

export default App;
