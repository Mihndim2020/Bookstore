const GET_BOOKS = 'books/booksslice/GET_BOOKS';
const GET_BOOKS_SUCCESS = 'books/booksslice/GET_BOOKS_SUCCESS';
const GET_BOOKS_ERR = 'books/booksslice/GET_BOOKS_ERR';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const bookStoreID = '8XtEBYC6eVokmXoQ8g8c';

const booksURL = `${baseURL}${bookStoreID}/books/`;

const getBooks = () => async (dispatch) => {
  dispatch({ type: GET_BOOKS });
  const response = await fetch(booksURL);
  const books = await response.json();
  return dispatch({ type: GET_BOOKS_SUCCESS, books });
};

export {
  getBooks as default,
  GET_BOOKS,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERR,
};
