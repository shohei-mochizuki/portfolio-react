import React from 'react';
import facePhoto from '../../images/shohei.jpg';

export default function About() {
  return (
    <div>
      <img src={facePhoto} alt="Shohei" height={"200px"}/>
      <h5>Hello World 🌎 ! I'm</h5>
      <h2>Shohei Mochizuki</h2>
      <p><small >Pronunciation: show-hay moe-chee-zoo-key | Pronuous: he/his/him</small></p>
      <p>A full stack web developer with 8 years of working experience in data analytics and engineering fields. Love solving issues with other people and working in a diverse environment.</p>
    </div>
  );
}
