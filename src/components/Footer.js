import React from 'react';

// Import logos from another folder to use them for <a> tags' hrefs
import linkedinLogo from '../images/linkedin.png';
import githubLogo from '../images/github.svg';
import twitterLogo from '../images/twitter.svg';

export default function Footer() {
  return (
    <div className="bg-warning p-3 m-0">
      <div className="row justify-content-center">
        <div className="col text-end">
          <a href="https://www.linkedin.com/in/shoheimochizuki" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="LinkedIn logo" height={"40px"}/></a>
        </div>
        <div className="col text-center">
          <a href="https://github.com/shohei-mochizuki" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="GitHub logo" height={"40px"}/></a>
        </div>
        <div className="col text-start">
          <a href="https://twitter.com/ShoheiYYZ" target="_blank" rel="noopener noreferrer"><img src={twitterLogo} alt="Twitter logo" height={"40px"}/></a>
        </div>
      </div>
    </div>
  );
}