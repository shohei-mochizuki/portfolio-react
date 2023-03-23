import React, { useState } from 'react';
import logoSite from '../images/website.png'

export default function Header({ currentPage, handlePageChange }) {
  
  // This is to switch show/unvisible of the toggle menu (when window is small) in the navigation bar
  const [toggleMenu, setToggleMenu] = useState(false);

  // When the toggle menu is clicked, switch the state from false -> true or true -> false
  const showMenu = () => {
    setToggleMenu(!toggleMenu);
  }
  
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-warning px-3">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img src={logoSite} width="30" height="30" className="d-inline-block align-text-bottom" alt="" />
            <span className="fs-3 fw-bold ms-2 text-white">Shohei Mochizuki</span>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={showMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={toggleMenu ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
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