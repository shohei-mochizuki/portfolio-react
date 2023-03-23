import React from 'react';
import Project from './Project';
import a from "../../images/pj15-traveler-review.jpg";

export default function Portfolio() {
  
  const projects = [
    {
      title: a,
      imgSrc: a,
      imgAlt: "Traveler's choice image",
      hrefDeploy: "https://github.com/shohei-mochizuki/TravelersChoice",
      hrefGitHub: "https://github.com/shohei-mochizuki/TravelersChoice",
    },
    {
      title: a,
      imgSrc: a,
      imgAlt: "Traveler's choice image",
      hrefDeploy: "https://github.com/shohei-mochizuki/TravelersChoice",
      hrefGitHub: "https://github.com/shohei-mochizuki/TravelersChoice",
    },
    {
      title: a,
      imgSrc: a,
      imgAlt: "Traveler's choice image",
      hrefDeploy: "https://github.com/shohei-mochizuki/TravelersChoice",
      hrefGitHub: "https://github.com/shohei-mochizuki/TravelersChoice",
    },
    {
      title: a,
      imgSrc: a,
      imgAlt: "Traveler's choice image",
      hrefDeploy: "https://github.com/shohei-mochizuki/TravelersChoice",
      hrefGitHub: "https://github.com/shohei-mochizuki/TravelersChoice",
    },
    {
      title: a,
      imgSrc: a,
      imgAlt: "Traveler's choice image",
      hrefDeploy: "https://github.com/shohei-mochizuki/TravelersChoice",
      hrefGitHub: "https://github.com/shohei-mochizuki/TravelersChoice",
    },
    {
      title: a,
      imgSrc: a,
      imgAlt: "Traveler's choice image",
      hrefDeploy: "https://github.com/shohei-mochizuki/TravelersChoice",
      hrefGitHub: "https://github.com/shohei-mochizuki/TravelersChoice",
    }];
  
  return (
    <div className="container my-5">
      <h2>Portfolio</h2>
      <div className="row row-cols-lg-2 row-cols-1 text-center">
        {projects.map(item => (
        <div className="col my-3">
          <Project title={item.title} imgSrc={item.imgSrc} imgAlt={item.imgAlt} hrefDeploy={item.hrefDeploy} hrefGitHub={item.hrefGitHub} />
        </div>
        ))}
      </div>
    </div>
  );
}