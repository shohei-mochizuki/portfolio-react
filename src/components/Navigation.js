import React from 'react';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function Navigation({currentPage}) {

  const renderPage = (currentPage) => {
    if (currentPage === "AboutMe") {
      return <AboutMe />
    } else if (currentPage === "Portfolio") {
      return <Portfolio />
    } else {
      return <Contact />
    }
  };
  
  return (
    <div>
      {renderPage(currentPage)}
    </div>
  );
}
