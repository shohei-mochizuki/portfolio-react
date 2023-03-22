import React from 'react';
import resume from '../../document/resume.pdf';
import logoHtml from '../../images/html.svg';
import logoCss from '../../images/css.svg';
import logoBootstrap from '../../images/bootstrap.svg';
import logoJavascript from '../../images/javascript.svg';
import logoJquery from '../../images/jquery.svg';
import logoNode from '../../images/node.png';
import logoReact from '../../images/react.svg';
import logoApi from '../../images/api.svg';
import logoHandlebars from '../../images/handlebars.png';

export default function Resume() {
  return (
    <div>
      <h2>Resume & Skills</h2>
      <h3>Resume</h3>      
      <button><a href={resume}>Resume</a></button>
      <h3>Coding skills</h3>
        <div className="m-5 p-5 bg-light rounded-5">
          <div className="container text-center">
            <div className="row row-cols-lg-4 row-cols-3">
              <div className="col my-4">
                <img src={logoHtml} width="50" height="50" />
                <p>HTML</p>
              </div>
              <div className="col my-4">
                <img src={logoCss} width="50" height="50" />
                <p>CSS</p>
              </div>
              <div className="col my-4">
                <img src={logoBootstrap} width="60" height="50" />
                <p>Bootstrap</p>
              </div>
              <div className="col my-4">
                <img src={logoJavascript} width="50" height="50" />
                <p>JavaScript</p>
              </div>
              <div className="col my-4">
                <img src="./assets/logos/jquery.svg" width="50" height="50" />
                <p>JQuery</p>
              </div>
              <div className="col my-4">
                <img src="./assets/logos/node.png" width="70" height="50" />
                <p>Node</p>
              </div>
              <div className="col my-4">
                <img src="./assets/logos/react.svg" width="50" height="50" />
                <p>React</p>
              </div>
              <div className="col my-4">
                <img src="./assets/logos/api.svg" width="50" height="50" />
                <p>REST API</p>
              </div>
              <div className="col my-4">
                <img src="./assets/logos/handlebars.png" width="50" height="50" />
                <p>Handlebars</p>
              </div>
              <div className="col my-4">
                <img src="./assets/logos/mysql.png" width="70" height="50" />
                <p>MySQL</p>
              </div>
              <div className="col my-4">
                <img src="./assets/logos/mongodb.png" width="50" height="50" />
                <p>MongoDB</p>
              </div>
              <div className="col my-4">
                <img src="./assets/logos/gas.png" width="50" height="50" />
                <p>Google App Script</p>
              </div>
              <div className="col my-4">
                <img src="./assets/logos/git.svg" width="50" height="50" />
                <p>Git</p>
              </div>
              <div className="col my-4">
                <img src="./assets/logos/github.svg" width="50" height="50" />
                <p>GitHub</p>
              </div>
              <div className="col my-4">
                <img src="./assets/logos/vscode.svg" width="50" height="50" />
                <p>VS Code</p>
              </div>
              <div className="col my-4">
                <img src="./assets/logos/pwa.png" width="70" height="50" />
                <p>PWA</p>
              </div>
              <div className="col my-4">
                <img src="./assets/logos/python.svg" width="50" height="50" />
                <p>Python</p>
              </div>
              <div className="col my-4">
                <img src="./assets/logos/r.png" width="50" height="50" />
                <p>R</p>
              </div>
              <div className="col my-4">
                <img src="./assets/logos/bigquery1.png" width="50" height="50" />
                <p>BigQuery</p>
              </div>
              <div className="col my-4">
                <img src="./assets/logos/datastudio.svg" width="50" height="50" />
                <p>DataStudio</p>
              </div>
            </div>
          </div>
        </div>
      <h3>Data analytics skills</h3>
      <div>
        
      </div>
      <h3>Other skills</h3>
      <div>
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
      <div>
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
