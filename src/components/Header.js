import React from 'react';

export default function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <h1>Shohei Mochizuki</h1>
      <ul className="nav nav-tabs">
        {/* // FOR FUTURE DEVELOPMENT // <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >Home</a>
        </li> */}
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >About</a>
        </li>
        <li className="nav-item">
          <a
            href="#works"
            onClick={() => handlePageChange('Works')}
            className={currentPage === 'Works' ? 'nav-link active' : 'nav-link'}
          >Portfolio</a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >Contact</a>
        </li>
      </ul>
    </div>
  );
}
