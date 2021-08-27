import React from 'react';
import PropTypes from 'prop-types';

import BookInfo from './BookInfo';
import BookActions from './BookActions';
import BookStatus from './BookStatus';
import BookProgress from './BookProgress';

const Book = (
  {
    id, title, category,
  },
) => (
  <div className="book-row">
    <div className="first-column">
      <BookInfo title={title} category={category} />
      <BookActions id={id} />
    </div>
    <div className="middle-column">
      <BookStatus />
    </div>
    <div>
      <BookProgress />
    </div>
  </div>
);

Book.propTypes = ({
  id: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
}).isRequired;

export default Book;
