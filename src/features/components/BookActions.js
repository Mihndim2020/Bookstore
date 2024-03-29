import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { removeBook } from '../redux/books/books';

const BookActions = ({ id }) => {
  const dispatch = useDispatch();

  const handleBookRemoval = async () => {
    dispatch(removeBook(id));
  };
  return (
    <div className="book-actions">
      <a href="/#" className="action-buttons">Comments</a>
      <span className="stroke">{' | '}</span>
      <a href="/#" onClick={handleBookRemoval} className="action-buttons">Remove</a>
      <span className="stroke">{' | '}</span>
      <a href="/#" className="action-buttons">Edit</a>
    </div>
  );
};

BookActions.propTypes = ({
  id: PropTypes.number,
}).isRequired;

export default BookActions;
