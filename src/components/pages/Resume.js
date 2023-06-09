import React from 'react';

// Import document from another folder
import resume from '../../document/Resume_Shohei-Mochizuki.pdf';

// Import logos from another folder
import logoHtml from '../../images/html.svg';
import logoCss from '../../images/css.svg';
import logoBootstrap from '../../images/bootstrap.svg';
import logoJavascript from '../../images/javascript.svg';
import logoJquery from '../../images/jquery.svg';
import logoNode from '../../images/node.png';
import logoReact from '../../images/react.svg';
import logoApi from '../../images/api.svg';
import logoHandlebars from '../../images/handlebars.png';
import logoMySql from '../../images/mysql.png';
import logoMongoDb from '../../images/mongodb.png';
import logoGas from '../../images/gas.png';
import logoGit from '../../images/git.svg';
import logoGitHub from '../../images/github.svg';
import logoVsCode from '../../images/vscode.svg';
import logoPwa from '../../images/pwa.png';
import logoPython from '../../images/python.png'
import logoJupyter from '../../images/jupyter.png'
import logoR from '../../images/r.png';
import logoBigQuery from '../../images/bigquery.png';
import logoDataStudio from '../../images/datastudio.svg';
import logoTableau from '../../images/tableau.png';

export default function Resume() {
  return (
    <div className="container my-5">
      <h2>Resume & Skills</h2>
      <div className="m-5 d-flex justify-content-center">    
        <button type="button" className="btn btn-secondary">
          <a href={resume} target="_blank" rel="noopener noreferrer" className="text-reset text-decoration-none">Resume</a>
        </button>
      </div>
      <h3>Coding skills</h3>
      <div className="m-5 p-5 bg-light rounded-5">
        <div className="container text-center">
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
            <div className="col my-4">
              <img src={logoHtml} width="50" height="50" alt="logo" />
              <p>HTML</p>
            </div>
            <div className="col my-4">
              <img src={logoCss} width="50" height="50" alt="logo" />
              <p>CSS</p>
            </div>
            <div className="col my-4">
              <img src={logoBootstrap} width="60" height="50" alt="logo" />
              <p>Bootstrap</p>
            </div>
            <div className="col my-4">
              <img src={logoJavascript} width="50" height="50" alt="logo" />
              <p>JavaScript</p>
            </div>
            <div className="col my-4">
              <img src={logoJquery} width="50" height="50" alt="logo" />
              <p>JQuery</p>
            </div>
            <div className="col my-4">
              <img src={logoNode} width="70" height="50" alt="logo" />
              <p>Node</p>
            </div>
            <div className="col my-4">
              <img src={logoReact} width="50" height="50" alt="logo" />
              <p>React</p>
            </div>
            <div className="col my-4">
              <img src={logoApi} width="50" height="50" alt="logo" />
              <p>REST API</p>
            </div>
            <div className="col my-4">
              <img src={logoHandlebars} width="50" height="50" alt="logo" />
              <p>Handlebars</p>
            </div>
            <div className="col my-4">
              <img src={logoMySql} width="70" height="50" alt="logo" />
              <p>MySQL</p>
            </div>
            <div className="col my-4">
              <img src={logoMongoDb} width="50" height="50" alt="logo" />
              <p>MongoDB</p>
            </div>
            <div className="col my-4">
              <img src={logoGas} width="50" height="50" alt="logo" />
              <p>Google App Script</p>
            </div>
            <div className="col my-4">
              <img src={logoGit} width="50" height="50" alt="logo" />
              <p>Git</p>
            </div>
            <div className="col my-4">
              <img src={logoGitHub} width="50" height="50" alt="logo" />
              <p>GitHub</p>
            </div>
            <div className="col my-4">
              <img src={logoVsCode} width="50" height="50" alt="logo" />
              <p>VS Code</p>
            </div>
            <div className="col my-4">
              <img src={logoPwa} width="70" height="45" alt="logo" />
              <p>PWA</p>
            </div>
          </div>
        </div>
      </div>
      <h3>Data analytics skills</h3>
      <div className="m-5 p-5 bg-light rounded-5">
        <div className="container text-center">
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
            <div className="col my-4">
              <img src={logoPython} width="50" height="50" alt="logo" />
              <p>Python</p>
            </div>
            <div className="col my-4">
              <img src={logoJupyter} width="40" height="50" alt="logo" />
              <p>Jupyter</p>
            </div>
            <div className="col my-4">
              <img src={logoR} width="50" height="50" alt="logo" />
              <p>R</p>
            </div>
            <div className="col my-4">
              <img src={logoBigQuery} width="50" height="50" alt="logo" />
              <p>BigQuery</p>
            </div>
            <div className="col my-4">
              <img src={logoDataStudio} width="50" height="50" alt="logo" />
              <p>DataStudio</p>
            </div>
            <div className="col my-4">
              <img src={logoTableau} width="50" height="50" alt="logo" />
              <p>Tableau</p>
            </div>
          </div>
        </div>
      </div>    
      <h3>Other skills</h3>
      <div className="m-5 p-5 bg-light rounded-5 fs-5">
        <ul>
          <li>Project management</li>
          <li>Communication</li>
          <li>Leadership</li>
          <li>Reporting</li>
          <li>Presentation</li>
          <li>Office suits - Microsoft and Google</li>
          <li>SalesForce - Service Cloud</li>         
        </ul>
      </div>
      <h3>Languages</h3>
      <div className="m-5 p-5 bg-light rounded-5 fs-5">
        <ul>
          <li>🇬🇧 English: Fluent</li>
          <li>🇫🇷 French: Professional</li>
          <li>🇯🇵 Japanese: Native</li>
          <li>🇪🇸 Spanish: Beginner</li>         
        </ul>
      </div>
    </div>
  );
}
