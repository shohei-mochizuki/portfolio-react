import React from 'react';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function Navigation({currentPage}) {

  const renderPage = (currentPage) => {
    if (currentPage === "AboutMe") {
      return <AboutMe />
    } else if (currentPage === "Portfolio") {
      return <Portfolio />
    } else if (currentPage === "Contact") {
      return <Contact />
    } else {
      return <Resume />
    }
  };
  
  return (
    <div>
      {renderPage(currentPage)}
    </div>
  );
}
