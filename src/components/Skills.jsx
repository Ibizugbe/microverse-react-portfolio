import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import "./Skills.css";
import medium from "../Assets/Icons/medium-vector.svg";
import linkedin from "../Assets/Icons/linkedin-vector.svg";
import twitter from "../Assets/Icons/twitter-vector.svg";
import github from "../Assets/Icons/github-vector.svg";
import angelist from "../Assets/Icons/angelist-vector.svg";
import bootstrap from "../Assets/languages/bootstrap.png";
import css from "../Assets/languages/css.png";
import firebase from "../Assets/languages/firebase.png";
import githubLang from "../Assets/languages/github.png";
import javascript from "../Assets/languages/javascript.png";
import ruby from "../Assets/languages/ruby.png";
import rails from "../Assets/languages/rails.png";
import react from "../Assets/languages/react.png";
import tailwind from "../Assets/languages/tailwind.png";
import html from "../Assets/languages/html.png";

function Skills() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <div class="about-container">
      <div class="about">
        <h1 class="about-header">About Myself</h1>
        <h1 class="about-text">
          Hello I’m a software developer! I can help you build a product ,
          feature or website Look through some of my work and experience! If you
          like what you see and have a project you need coded, don’t hestiate to
          contact me.
        </h1>
        <p class="connect">LET’S CONNECT</p>
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
        <button class="btn project-link" type="button">
          Get my resume
        </button>
      </div>
      <div class="language-container">
        <Fragment>
          <Accordion open={open === 1} animate={customAnimation}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="text-4xl font-normal py-10"
            >
              Languages
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} animate={customAnimation}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="text-4xl font-normal py-10"
            >
              Frameworks
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} animate={customAnimation}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="text-4xl font-normal py-10"
            >
              Skills
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
    </div>
  );
}

export default Skills;
