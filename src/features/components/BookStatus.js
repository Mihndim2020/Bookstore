import React from 'react';
import statusIcon from './statusIcon.png';

const BookStatus = () => (
  <div className="book-completion-status">
    <img className="statusIcon" src={statusIcon} alt="Status Icon" />
    <div className="stats">
      <p className="completion-percentage">78%</p>
      <p className="text-completed">Completed</p>
    </div>
  </div>
);

export default BookStatus;
