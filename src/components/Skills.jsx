import React from 'react';

import './Skills.css';
import medium from '../Assets/Icons/medium-vector.svg';
import linkedin from '../Assets/Icons/linkedin-vector.svg';
import twitter from '../Assets/Icons/twitter-vector.svg';
import github from '../Assets/Icons/github-vector.svg';
import angelist from '../Assets/Icons/angelist-vector.svg';
import resume from '../Assets/resume/my_Resume.pdf';
import Accordion from './Accordion';
import accordionData from '../data/accordionData';

function Skills() {
  return (
    <div className="about-container">
      <div className="about">
        <h1 className="about-header">About Myself</h1>
        <h1 className="about-text">
          Hello I’m a software developer! I can help you build a product ,
          feature or website Look through some of my work and experience! If you
          like what you see and have a project you need coded, don’t hestiate to
          contact me.
        </h1>
        <p className="connect">LET’S CONNECT</p>
        <ul className="connect-links animate__animated animate__bounce">
          <li>
            <a href="https://twitter.com/AbrahamIbizugbe" target="_blank" rel="noreferrer">
              <img src={twitter} alt="twitter" className="social-icons" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/abrahamibizugbe/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="linkedin" className="social-icons" />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@abrahamibizugbe" target="_blank" rel="noreferrer">
              <img src={medium} alt="medium" className="social-icons" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Ibizugbe" target="_blank" rel="noreferrer">
              <img src={github} alt="gitHub" className="social-icons" />
            </a>
          </li>
          <li>
            <a href="https://angel.co/u/abraham-ibizugbe" target="_blank" rel="noreferrer">
              <img src={angelist} alt="angelist" className="social-icons" />
            </a>
          </li>
        </ul>
        <a target="_blank" href={resume} rel="noreferrer" download>
          <button className="btn project-link" type="button">
            Get my resume
          </button>
        </a>
      </div>
      <div className="language-container">
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} key="3" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
