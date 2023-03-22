import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About'); // Set the About page as landing page

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Navigation currentPage={currentPage} />
      <Footer />
    </div>
  );
}
