import React from 'react';

export default function Header({ currentPage, handlePageChange }) {
  return (
    <div className="px-4">
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img src="./assets/images/logo.png" width="30" height="30" className="d-inline-block align-text-bottom" alt="" />
            <span className="fs-3 fw-semibold ms-1">Shohei Mochizuki</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a 
                  href="#aboutme"
                  onClick={() => handlePageChange('AboutMe')}
                  className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                  aria-current="page"
                >About Me</a>
              </li>
              <li className="nav-item">
              <a 
                  href="#portfolio"
                  onClick={() => handlePageChange('Portfolio')}
                  className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                  aria-current="page"
                >Portfolio</a>
              </li>
              <li className="nav-item">
              <a 
                  href="#contact"
                  onClick={() => handlePageChange('Contact')}
                  className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                  aria-current="page"
                >Contact</a>
              </li>
              <li className="nav-item">
              <a 
                  href="#resume"
                  onClick={() => handlePageChange('Resume')}
                  className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                  aria-current="page"
                >Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    );
};
    
    {/* <div>
      <h1>Shohei Mochizuki</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#aboutme"
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >About Me</a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >Portfolio</a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >Contact</a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >Resume</a>
        </li>
      </ul>
    </div> */}