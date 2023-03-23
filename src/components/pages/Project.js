import React from 'react';

// Import GitHub logo to use it in a link to repo pages
import githubLogo from "../../images/github.svg"

export default function Project({title, imgSrc, imgAlt, hrefDeploy, hrefGitHub}) { // Destructure props object 
  return (
    <div className="position-relative">
      <img src={imgSrc} alt={imgAlt} height={"300px"} className="opacity-100 border border-3 border-dark rounded-4" />
      <a href={hrefDeploy} target="_blank" rel="noopener noreferrer" className="position-absolute top-0 start-50 translate-middle-x fs-5 fw-bold text-decoration-none text-black bg-warning mt-5 p-1 border border-1 border-dark rounded-4 opacity-100">{title}</a>
      <a href={hrefGitHub} target="_blank" rel="noopener noreferrer" className="position-absolute bottom-0 start-50 translate-middle-x fs-5 fw-semibold text-decoration-none text-black bg-warning mb-5 p-1 border border-1 border-dark rounded-4 opacity-100">
        <img src={githubLogo} alt="GitHub logo" height={"40px"}/>
        <small> Repo</small>
      </a>
    </div>
  );
}
