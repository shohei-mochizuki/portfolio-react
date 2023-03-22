import React from 'react';
import githubLogo from "../../images/github.svg"

export default function Project({imgSrc, imgAlt, hrefDeploy, hrefGitHub}) {
  return (
    <div>
      <img src={imgSrc} alt={imgAlt} height={"300px"}/>
      <a href={hrefDeploy}>Traveler's Choice</a>
      <a href={hrefGitHub}>
        <img src={githubLogo} alt="GitHub logo" height={"40px"}/>
      </a>
    </div>
  );
}
