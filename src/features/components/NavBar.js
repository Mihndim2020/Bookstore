import React from 'react';
import {
  Link,
} from 'react-router-dom';
import profileIcon from './profileIcon.png';

const NavBar = () => (
  <>
    <div className="title-navbar">
      <div className="leftNav">
        <h1 className="title-logo">Bookstore CMS</h1>
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/" className="books">BOOKS</Link>
            </li>
            <li>
              <Link to="/categories" className="categories">CATEGORIES</Link>
            </li>
          </ul>
        </nav>
      </div>
      <img className="profileIcon" src={profileIcon} alt="Profile Icon" />
    </div>
    <span><i /></span>
  </>
);

export default NavBar;
