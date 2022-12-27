import React from "react";

const Intro = () => {
  return (
    <section id="intro">
      <div class="intro-container">
        <h1 class="greetings">I’m Abraham, Glad to see you!</h1>
        <p class="intro-text animate__animated animate__backInRight">
          I’m a software developer! I can help you build a product , feature or
          website Look through some of my work and experience! If you like what
          you see and have a project you need coded, don’t hestiate to contact
          me.
        </p>
        <p class="connect">LET’S CONNECT</p>
        <ul class="connect-links">
          <li>
            <a href="https://twitter.com/AbrahamIbizugbe">
              <img
                src="./Assets/Icons/twitter-vector.svg"
                alt="twitter"
                class="social-icons"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/abrahamibizugbe/">
              <img
                src="./Assets/Icons/linkedin-vector.svg"
                alt="linkedin"
                class="social-icons"
              />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@abrahamibizugbe">
              <img
                src="./Assets/Icons/medium-vector.svg"
                alt="medium"
                class="social-icons"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/Ibizugbe">
              <img
                src="./Assets/Icons/github-vector.svg"
                alt="gitHub"
                class="social-icons"
              />
            </a>
          </li>
          <li>
            <a href="https://angel.co/u/abraham-ibizugbe">
              <img
                src="./Assets/Icons/social-icon-vector.svg"
                alt="social"
                class="angelist"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Intro;
