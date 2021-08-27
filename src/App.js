import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './features/components/NavBar';
import BookStore from './features/redux/books/bookStore';
import AddBook from './features/components/AddBook';
import BookCategories from './features/components/BookCategories';
import store from './features/redux/configureStore';

const App = () => (
  <Provider store={store}>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div className="mainContainer">
            <BookStore />
            <AddBook />
          </div>
        </Route>
        <Route path="/categories">
          <BookCategories />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
