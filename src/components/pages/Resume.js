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
import logoMySql from '../../images/mysql.png';
import logoMongoDb from '../../images/mongodb.png';
import logoGas from '../../images/gas.png';
import logoGit from '../../images/git.svg';
import logoGitHub from '../../images/github.svg';
import logoVsCode from '../../images/vscode.svg';
import logoPwa from '../../images/pwa.png';
import logoPython from '../../images/python.svg';
import logoR from '../../images/r.png';
import logoBigQuery from '../../images/bigquery.png';
import logoDataStudio from '../../images/datastudio.svg';

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
                <img src={logoJquery} width="50" height="50" />
                <p>JQuery</p>
              </div>
              <div className="col my-4">
                <img src={logoNode} width="70" height="50" />
                <p>Node</p>
              </div>
              <div className="col my-4">
                <img src={logoReact} width="50" height="50" />
                <p>React</p>
              </div>
              <div className="col my-4">
                <img src={logoApi} width="50" height="50" />
                <p>REST API</p>
              </div>
              <div className="col my-4">
                <img src={logoHandlebars} width="50" height="50" />
                <p>Handlebars</p>
              </div>
              <div className="col my-4">
                <img src={logoMySql} width="70" height="50" />
                <p>MySQL</p>
              </div>
              <div className="col my-4">
                <img src={logoMongoDb} width="50" height="50" />
                <p>MongoDB</p>
              </div>
              <div className="col my-4">
                <img src={logoGas} width="50" height="50" />
                <p>Google App Script</p>
              </div>
              <div className="col my-4">
                <img src={logoGit} width="50" height="50" />
                <p>Git</p>
              </div>
              <div className="col my-4">
                <img src={logoGitHub} width="50" height="50" />
                <p>GitHub</p>
              </div>
              <div className="col my-4">
                <img src={logoVsCode} width="50" height="50" />
                <p>VS Code</p>
              </div>
              <div className="col my-4">
                <img src={logoPwa} width="70" height="50" />
                <p>PWA</p>
              </div>
              <div className="col my-4">
                <img src={logoPython} width="50" height="50" />
                <p>Python</p>
              </div>
              <div className="col my-4">
                <img src={logoR} width="50" height="50" />
                <p>R</p>
              </div>
              <div className="col my-4">
                <img src={logoBigQuery} width="50" height="50" />
                <p>BigQuery</p>
              </div>
              <div className="col my-4">
                <img src={logoDataStudio} width="50" height="50" />
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
