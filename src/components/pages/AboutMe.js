import React from 'react';

// Import photo from another folder
import facePhoto from '../../images/shohei.jpg';

export default function AboutMe() {
  return ( 
    <div className="flex-column my-5 py-5">   
      <div className="row lg-3">
        <div className="row g-0">
          <div className="col-lg-4 mb-4 d-flex justify-content-lg-end justify-content-center">
            <img src={facePhoto} className="rounded-5" height="200px" width="200px" alt="..." />
          </div>
          <div className="col-lg-8">
            <div className="mx-5">
              <h5 className="text-center text-lg-start mx-5">Hello World 🌎 ! I'm</h5>
              <h2 className="text-center text-lg-start mx-5">Shohei Mochizuki</h2>
              <p className="text-center text-lg-start mx-5"><small className="text-muted">Pronunciation: show-hay moe-chee-zoo-key<br/>Pronuous: he/his/him</small></p>
              <p className="mx-5">A full stack web developer with 8 years of working experience in data analytics and engineering fields. Love solving issues with other people and working in a diverse environment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
