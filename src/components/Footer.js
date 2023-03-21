import React from 'react';
import linkedinLogo from '../images/linkedin.png';
import githubLogo from '../images/github.svg';
import twitterLogo from '../images/twitter.svg';

export default function Footer() {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a href="https://www.linkedin.com/in/shoheimochizuki"><img src={linkedinLogo} alt="LinkedIn logo" height={"40px"}/></a>
        </li>
        <li className="nav-item">
          <a href="https://github.com/shohei-mochizuki"><img src={githubLogo} alt="GitHub logo" height={"40px"}/></a>
        </li>
        <li className="nav-item">
          <a href="https://twitter.com/ShoheiYYZ"><img src={twitterLogo} alt="Twitter logo" height={"40px"}/></a>
        </li>
      </ul>
    </div>
  );
}