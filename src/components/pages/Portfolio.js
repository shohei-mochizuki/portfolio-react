import React from 'react';
import Project from './Project';

// Import application images from another folder
import pj19 from "../../images/pj19-texteditor-pwa.png";
import pj15 from "../../images/pj15-traveler-review.jpg";
import pj11 from "../../images/pj11-notetaker.png";
import pj9 from "../../images/pj9-tenthings-toronto.jpg";
import pj6 from "../../images/pj6-weather-dashboard.jpg";
import pj4 from "../../images/pj4-interactive-quiz.png";

export default function Portfolio() {
  
  // Put all project/application data (as objects) into 'Projects' array
  const projects = [
    {
      title: "Text Editor - Progressive Web Application",
      imgSrc: pj19,
      imgAlt: "Text Editor image",
      hrefDeploy: "https://text-editor-pwa-2023.herokuapp.com/",
      hrefGitHub: "https://github.com/shohei-mochizuki/text-editor-pwa",
    },
    {
      title: "Traveler's Choice",
      imgSrc: pj15,
      imgAlt: "Traveler's choice image",
      hrefDeploy: "https://travelerschoice.herokuapp.com/",
      hrefGitHub: "https://github.com/shohei-mochizuki/TravelersChoice",
    },
    {
      title: "Easy Note Taker",
      imgSrc: pj11,
      imgAlt: "Easy Note Taker image",
      hrefDeploy: "https://shohei-easynotetaker.herokuapp.com/",
      hrefGitHub: "https://github.com/shohei-mochizuki/challenge11-expressjs-easynotetaker",
    },
    {
      title: "10 Things to Do in Toronto",
      imgSrc: pj9,
      imgAlt: "10 Things to Do in Toronto image",
      hrefDeploy: "https://shohei-mochizuki.github.io/10things-todo-in-toronto/",
      hrefGitHub: "https://github.com/shohei-mochizuki/10things-todo-in-toronto",
    },
    {
      title: "World Weather Dashboard",
      imgSrc: pj6,
      imgAlt: "World Weather Dashboard image",
      hrefDeploy: "https://shohei-mochizuki.github.io/challenge06-world-weather-dashboard/",
      hrefGitHub: "https://github.com/shohei-mochizuki/challenge06-world-weather-dashboard",
    },
    {
      title: "Coding Quiz Challenge",
      imgSrc: pj4,
      imgAlt: "Coding Quiz Challenge image",
      hrefDeploy: "https://shohei-mochizuki.github.io/challenge04-interactive-quiz/",
      hrefGitHub: "https://github.com/shohei-mochizuki/challenge04-interactive-quiz",
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