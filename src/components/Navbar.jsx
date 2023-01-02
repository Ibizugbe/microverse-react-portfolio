import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <Link to="intro" smooth duration={500} className="nav__brand">
        AIO
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to="intro" smooth duration={500}>
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="about" smooth duration={500}>
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link to="projects" smooth duration={500}>
            Projects
          </Link>
        </li>
        <li className="nav__item">
          <Link to="skills" smooth duration={500}>
            Skills
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
