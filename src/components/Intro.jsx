import React from "react";
import "./Intro.css";
import backgroundImage from "../Assets/background-images/background-header-web.svg";
import backgroundImageMobile from "../Assets/background-images/header-shapes-mobile.svg";
import medium from "../Assets/Icons/medium-vector.svg";
import linkedin from "../Assets/Icons/linkedin-vector.svg";
import twitter from "../Assets/Icons/twitter-vector.svg";
import github from "../Assets/Icons/github-vector.svg";
import angelist from "../Assets/Icons/angelist-vector.svg";

function Intro() {
  const css = `@media (max-width: 768px) {
    .background {
        background-image: url(${backgroundImageMobile})
    }
  }
  @media (min-width: 768px) {
      .background {
          background-image: url(${backgroundImage});
      }
  }`;

  return (
    <section id="intro">
      <style scoped>{css}</style>
      <div className="intro-container background">
        <h1 className="greetings animate__animated animate__fadeInDown">
          I’m Abraham, Glad to see you!
        </h1>
        <p className="intro-text animate__animated animate__fadeInRight">
          I’m a software developer! I can help you build a product , feature or
          website Look through some of my work and experience! If you like what
          you see and have a project you need coded, don’t hestiate to contact
          me.
        </p>
        <p className="connect animate__animated animate__bounce">
          LET’S CONNECT
        </p>
        <ul className="connect-links animate__animated animate__bounce">
          <li>
            <a href="https://twitter.com/AbrahamIbizugbe">
              <img src={twitter} alt="twitter" className="social-icons" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/abrahamibizugbe/">
              <img src={linkedin} alt="linkedin" className="social-icons" />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@abrahamibizugbe">
              <img src={medium} alt="medium" className="social-icons" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Ibizugbe">
              <img src={github} alt="gitHub" className="social-icons" />
            </a>
          </li>
          <li>
            <a href="https://angel.co/u/abraham-ibizugbe">
              <img src={angelist} alt="angelist" className="social-icons" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Intro;
