import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  const [active, setActive] = useState('nav__menu');
  const [icon, setIcon] = useState('nav__toggler');

  const navToggle = () => {
    if (active === 'nav__menu') {
      setActive('nav__menu nav__active');
    } else setActive('nav__menu');

    // Icon Toggler
    if (icon === 'nav__toggler') {
      setIcon('nav__toggler toggle');
    } else setIcon('nav__toggler');
  };
  return (
    <nav className="nav">
      <Link to="intro" smooth duration={1500} className="nav__brand">
        AIO
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to="intro" smooth duration={1500}>
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="about" smooth duration={1500}>
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link to="contact-me" smooth duration={1500}>
            Contact Me
          </Link>
        </li>
        <li className="nav__item">
          <Link to="projects" smooth duration={1500}>
            Projects
          </Link>
        </li>
        <li className="nav__item">
          <Link to="skills" smooth duration={1500}>
            Skills
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon} onKeyDown={navToggle} role="presentation">
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
    </nav>
  );
}

export default Navbar;
