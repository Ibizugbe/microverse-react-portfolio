import React from "react";
import "./Skills.css";
import medium from "../Assets/Icons/medium-vector.svg";
import linkedin from "../Assets/Icons/linkedin-vector.svg";
import twitter from "../Assets/Icons/twitter-vector.svg";
import github from "../Assets/Icons/github-vector.svg";
import angelist from "../Assets/Icons/angelist-vector.svg";

function Skills() {
  return (
    <section id="skills">
      <div class="about-container">
        <div class="about">
          <h1 class="about-header">About Myself</h1>
          <h1 class="about-text">
            Hello I’m a software developer! I can help you build a product ,
            feature or website Look through some of my work and experience! If
            you like what you see and have a project you need coded, don’t
            hestiate to contact me.
          </h1>
          <p class="connect">LET’S CONNECT</p>
          <ul class="connect-links">
            <li>
              <a href="#">
                <img src={twitter} alt="twitter" class="social-icons" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={linkedin} alt="linkedin" class="social-icons" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={medium} alt="medium" class="social-icons" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={github} alt="gitHub" class="social-icons" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={angelist} alt="angelist" class="social-icons" />
              </a>
            </li>
          </ul>
          <button class="btn project-link" type="button">
            Get my resume
          </button>
        </div>
        <div class="language-container">
          <ul class="about-languages">
            <li>
              <div class="language-header-container">
                <h2 class="language-header">Languages</h2>
                <img src="./Assets/Icons/icon-down.png" alt="null" />
              </div>
              <ul class="my-language">
                <li class="my-language-container">
                  <img
                    src="./Assets/Icons/javascript-icon.png"
                    alt="javaScript"
                  />
                  <p class="my-language-text">javaScript</p>
                </li>
                <li class="my-language-container">
                  <img src="./Assets/Icons/css-icon.png" alt="CSS" />
                  <p class="my-language-text">CSS</p>
                </li>
                <li class="my-language-container">
                  <img src="./Assets/Icons/html-icon.png" alt="HTML" />
                  <p class="my-language-text">HTML</p>
                </li>
              </ul>
            </li>
            <li class="language-header-container frameworks">
              <h3 class="language-header">Frameworks</h3>
              <img src="./Assets/Icons/icon-right.png" alt="null" />
            </li>
            <li class="language-header-container skills">
              <h3 class="language-header">Skills</h3>
              <img src="./Assets/Icons/icon-right.png" alt="null" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
