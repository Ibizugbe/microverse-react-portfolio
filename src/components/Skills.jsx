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
          Full-stack web developer and enthusiastic learner
          who values accessible design and clean code. An enthusiast
          for remote work and pair programming. I have great experience
          in the scrum method, problem-solving, test-driven development,
          and code reviews while studying at Microverse.  Fluent in ruby,
          javascript, react, ruby on rails, and other technologies. Confident
          communicator, strategic thinker, and innovative creator to
          develop customized software.
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
      <div className="language-container lg:pt-10">
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
