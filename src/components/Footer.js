import React from 'react';
import linkedinLogo from '../images/linkedin.png';
import githubLogo from '../images/github.svg';
import twitterLogo from '../images/twitter.svg';

export default function Footer() {
  return (
    <div className="bg-secondary p-3 m-0">
      <div className="row justify-content-center">
        <div className="col text-end">
          <a href="https://www.linkedin.com/in/shoheimochizuki"><img src={linkedinLogo} alt="LinkedIn logo" height={"40px"}/></a>
        </div>
        <div className="col text-center">
          <a href="https://github.com/shohei-mochizuki"><img src={githubLogo} alt="GitHub logo" height={"40px"}/></a>
        </div>
        <div className="col text-start">
          <a href="https://twitter.com/ShoheiYYZ"><img src={twitterLogo} alt="Twitter logo" height={"40px"}/></a>
        </div>
      </div>
    </div>
  );
}