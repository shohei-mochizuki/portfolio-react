import React from 'react';
import resume from '../../document/resume.pdf';

export default function Resume() {
  return (
    <div>
      <button><a href={resume}>Resume</a></button>
      <h5>Hello World 🌎 ! I'm</h5>
      <h2>Shohei Mochizuki</h2>
      <p><small >Pronunciation: show-hay moe-chee-zoo-key | Pronuous: he/his/him</small></p>
      <p>A full stack web developer with 8 years of working experience in data analytics and engineering fields. Love solving issues with other people and working in a diverse environment.</p>
    </div>
  );
}
