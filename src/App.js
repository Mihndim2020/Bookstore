import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from './features/components/NavBar';
import Book from './features/components/Book';
import AddBook from './features/components/AddBook';
import BookCategories from './features/components/BookCategories';

const booksInfo = [
  {
    id: 1,
    category: 'Action',
    name: 'The Hunger Games',
    author: 'Suzanne Collins',
    percentage: '64%',
    chapter: 'Chapter 17',
  },
  {
    id: 2,
    category: 'Science Fiction',
    name: 'Dune',
    author: 'Frank Herbert',
    percentage: '8%',
    chapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    id: 3,
    category: 'Economy',
    name: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    percentage: '0%',
    chapter: 'Introduction',
  },
];

const App = () => {
  const bookList = booksInfo.map((bookInfo) => <Book key={bookInfo.id} info={bookInfo} />);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          { bookList }
          <AddBook />
        </Route>
        <Route path="/categories">
          <BookCategories />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;