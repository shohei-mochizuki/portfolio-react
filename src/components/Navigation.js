import React from 'react';
import facePhoto from '../../images/shohei.jpg';

export default function Navigation({currentPage}) {
  
    const renderPage = () => {
      switch (currentPage){
        case "About": 
          return <About />
          break;
        case "Works":
          return <Works />
          break;
        case "Contact":
          return <Contact />
      }
    };
  
  return (
    <div>
      {renderPage}
    </div>
  );
}
