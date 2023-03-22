import React from 'react';
import Project from './Project';
// import githubLogo from '../../images/github.svg';
// import pjTravelerReview from '../../images/pj15-traveler-review.jpg';

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

        // <div>
        //   <Project/>
        //     <img src={pjTravelerReview} alt="LinkedIn logo" height={"300px"}/>
        //     <a href="https://www.yahoo.co.jp/">Traveler's Choice</a>
        //     <a href="https://github.com/shohei-mochizuki/TravelersChoice">
        //       <img src={githubLogo} alt="GitHub logo" height={"40px"}/>
        //     </a>
        // </div>