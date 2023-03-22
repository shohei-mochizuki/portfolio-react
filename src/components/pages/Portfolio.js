import React from 'react';
import Project from './Project';

export default function Portfolio() {
  
  const projects = [
    {
      imgSrc: "../../images/pj15-traveler-review.jpg",
      imgAlt: "Traveler's choice image",
      hrefDeploy: "https://github.com/shohei-mochizuki/TravelersChoice",
      hrefGitHub: "https://github.com/shohei-mochizuki/TravelersChoice",
    },
    {
      imgSrc: "../../images/pj15-traveler-review.jpg",
      imgAlt: "Traveler's choice image",
      hrefDeploy: "https://github.com/shohei-mochizuki/TravelersChoice",
      hrefGitHub: "https://github.com/shohei-mochizuki/TravelersChoice",
    },
    {
      imgSrc: "../../images/pj15-traveler-review.jpg",
      imgAlt: "Traveler's choice image",
      hrefDeploy: "https://github.com/shohei-mochizuki/TravelersChoice",
      hrefGitHub: "https://github.com/shohei-mochizuki/TravelersChoice",
    },
    {
      imgSrc: "../../images/pj15-traveler-review.jpg",
      imgAlt: "Traveler's choice image",
      hrefDeploy: "https://github.com/shohei-mochizuki/TravelersChoice",
      hrefGitHub: "https://github.com/shohei-mochizuki/TravelersChoice",
    },
    {
      imgSrc: "../../images/pj15-traveler-review.jpg",
      imgAlt: "Traveler's choice image",
      hrefDeploy: "https://github.com/shohei-mochizuki/TravelersChoice",
      hrefGitHub: "https://github.com/shohei-mochizuki/TravelersChoice",
    },
    {
      imgSrc: "../../images/pj15-traveler-review.jpg",
      imgAlt: "Traveler's choice image",
      hrefDeploy: "https://github.com/shohei-mochizuki/TravelersChoice",
      hrefGitHub: "https://github.com/shohei-mochizuki/TravelersChoice",
    }];
  
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
        {projects.map(item => (
        <div>
          <Project imgSrc={item.imgSrc} imgAlt={item.imgAlt} hrefDeploy={item.hrefDeploy} hrefGitHub={item.hrefGitHub} />
        </div>
        ))}
      </div>
    </div>
  );
}