import React from 'react';
import githubLogo from "../../images/github.svg"

export default function Project({imgSrc, imgAlt, hrefDeploy, hrefGitHub}) {
  return (
    <div className="position-relative">
      <img src={imgSrc} alt={imgAlt} height={"300px"} className="opacity-50" />
      <a href={hrefDeploy} className="position-absolute top-0 start-50 translate-middle-x fs-3 text-decoration-none text-black mt-5">Deployed site</a>
      <a href={hrefGitHub} className="position-absolute bottom-0 start-50 translate-middle-x fs-5 text-decoration-none text-black mb-5">
        <img src={githubLogo} alt="GitHub logo" height={"40px"}/>
        <p> GitHub Repo</p>
      </a>
    </div>
  );
}
