import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../../components/Book';
import getBooks from '../slices/booksSlice';

const BookStore = () => {
  const bookComponent = [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  let bookStoreFetch = useSelector((store) => store.booksReducer.books);
  if (bookStoreFetch.error) {
    bookStoreFetch = [];
  } else {
    const bookIDs = Object.keys(bookStoreFetch);
    bookIDs.forEach((id) => {
      bookStoreFetch[id].map((book) => (
        bookComponent.push(
          <Book
            key={id}
            id={id}
            title={book.title}
            category={book.category}
          />,
        )
      ));
    });
  }

  return (
    <>
      { bookComponent }
    </>
  );
};

export default BookStore;
