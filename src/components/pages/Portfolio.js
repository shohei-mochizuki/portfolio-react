import React from 'react';
import githubLogo from '../../images/github.svg';
import pjTravelerReview from '../../images/pj15-traveler-review.jpg';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
        <div>
          <img src={pjTravelerReview} alt="LinkedIn logo" height={"300px"}/>
          <a href="https://www.yahoo.co.jp/">Traveler's Choice</a>
          <a href="https://github.com/shohei-mochizuki/TravelersChoice">
            <img src={githubLogo} alt="GitHub logo" height={"40px"}/>
          </a>
        </div>
      </div>
    </div>
  );
}
