import React from 'react';
import Navigation from "./Navigation"; // SHOULD BE IN HEADER
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
// const styles = header;

function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header className="header">
      <h1>Shohei Mochizuki</h1>
      <Navigation />
    </header>
  );
}

export default Header;
