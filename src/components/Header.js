import React from 'react';
import logoSite from '../images/website.png'

export default function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-primary px-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#aboutme">
            <img src={logoSite} width="30" height="30" className="d-inline-block align-text-bottom" alt="" />
            <span className="fs-3 fw-semibold ms-2 text-white">Shohei Mochizuki</span>
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
                  className={currentPage === 'AboutMe' ? 'nav-link active text-white' : 'nav-link text-white'}
                  aria-current="page"
                >About Me</a>
              </li>
              <li className="nav-item">
              <a 
                  href="#portfolio"
                  onClick={() => handlePageChange('Portfolio')}
                  className={currentPage === 'Portfolio' ? 'nav-link active text-white' : 'nav-link text-white'}
                  aria-current="page"
                >Portfolio</a>
              </li>
              <li className="nav-item">
              <a 
                  href="#contact"
                  onClick={() => handlePageChange('Contact')}
                  className={currentPage === 'Contact' ? 'nav-link active text-white' : 'nav-link text-white'}
                  aria-current="page"
                >Contact</a>
              </li>
              <li className="nav-item">
              <a 
                  href="#resume"
                  onClick={() => handlePageChange('Resume')}
                  className={currentPage === 'Resume' ? 'nav-link active text-white' : 'nav-link text-white'}
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