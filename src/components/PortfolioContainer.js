import React, { useState } from 'react';
import Header from './Header';
// import Home from './pages/Home'; // FOR FUTURE DEVELOPMENT
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    // if (currentPage === 'Home') { // FOR FUTURE DEVELOPMENT
    //   return <Home />;
    // }
    if (currentPage === 'About') {
      return <About />;
    }
    else if (currentPage === 'Works') {
      return <Works />;
    } else {
    return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
