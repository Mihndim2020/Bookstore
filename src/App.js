import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './feature/components/NavBar';
import BookStore from './redux/books/BookStore';
import AddBook from './feature/components/AddBook';
import Categories from './feature/components/Categories';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <BookStore />
          <BookNew />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;